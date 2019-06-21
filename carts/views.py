from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, Http404
from . models import Cart, Item
from shirts.models import Shirt, Creator, Background, Pattern
from django.utils.crypto import get_random_string
import datetime

# Create your views here.
def add_item(request):
    base_pattern = get_object_or_404(Pattern, name=request.POST.get('basePattern'))
    ocollar_pattern = get_object_or_404(Pattern, name=request.POST.get('outerCollarPattern'))
    icollar_pattern = get_object_or_404(Pattern, name=request.POST.get('innerCollarPattern'))
    collar_catagory = request.POST.get('collarDesign')
    ocuff_pattern = get_object_or_404(Pattern, name=request.POST.get('outerCuffPattern'))
    icuff_pattern = get_object_or_404(Pattern, name=request.POST.get('innerCuffPattern'))
    cuff_catagory = request.POST.get('cuffDesign')
    iplacket_pattern = get_object_or_404(Pattern, name=request.POST.get('innerPlacketPattern'))
    oplacket_pattern = get_object_or_404(Pattern, name=request.POST.get('outerPlacketPattern'))
    if request.user.is_authenticated:
        shirt = Shirt.objects.create(
            base = base_pattern.base,
            inner_collar = icollar_pattern.inner_collar.all().filter(catagory=collar_catagory, opened=False).first(),
            outer_collar = ocollar_pattern.outer_collar.all().filter(catagory=collar_catagory, opened=False).first(),
            collar_base = ocollar_pattern.collar_base.filter(opened=False).first(),
            yoke = base_pattern.yoke.all().filter(opened=False).first(),
            outer_placket = oplacket_pattern.outer_placket.all().filter(opened=False).first(),
            inner_placket = iplacket_pattern.innerplacket,
            outer_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=cuff_catagory, opened=False).first(),
            inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=cuff_catagory, opened=False).first(),
        )
        cart = Cart.objects.all().filter(user=request.user).first()
        if not cart:
            cart = Cart.objects.create(
                user = request.user,
            )
        Creator.objects.create(
            shirt = shirt,
            user = request.user,
        )
        Item.objects.create(
            shirt = shirt,
            cart = cart,
        )
    else:
        uid = get_random_string(
            length=12,
            allowed_chars=u'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        )
        date = datetime.datetime.now()
        session_id = "{0}{1}{2}{3}".format(date.year, date.month, date.day, uid)
        request.session['id'] = session_id
        shirt = Shirt.objects.create(
            base = base_pattern.base,
            inner_collar = icollar_pattern.inner_collar.all().filter(catagory=collar_catagory, opened=False).first(),
            outer_collar = ocollar_pattern.outer_collar.all().filter(catagory=collar_catagory, opened=False).first(),
            collar_base = ocollar_pattern.collar_base.filter(opened=False).first(),
            yoke = base_pattern.yoke.all().filter(opened=False).first(),
            outer_placket = oplacket_pattern.outer_placket.all().filter(opened=False).first(),
            inner_placket = iplacket_pattern.innerplacket,
            outer_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=cuff_catagory, opened=False).first(),
            inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=cuff_catagory, opened=False).first(),
            sess_id = session_id,
        )
        return redirect('accounts:login')
    return redirect('carts:get_cart')

@login_required
def get_cart(request):
    cart = Cart.objects.all().filter(user=request.user).first()
    if(not cart):
        cart = Cart.objects.create(
            user=request.user
        )
    items = Item.objects.all().filter(cart=cart, ordered=False).order_by('-shirt__created_on')
    background = Background.objects.all().first()
    context = {
        'background': background.background,
        'cart': cart,
        'items': items,
    }
    return render(request, 'carts/cart.html', context)

@login_required
def remove_item(request, pk):
    shirt = Shirt.objects.all().filter(pk=pk)
    shirt.delete()
    return redirect('carts:get_cart')

@login_required
def update_item_size(request):
    id = request.GET.get('id')
    size = request.GET.get('size')
    item = Item.objects.all().filter(shirt_id=id).first()
    item.size = size
    item.save()
    return HttpResponse(200)

@login_required
def update_item_fitting(request):
    id = request.GET.get('id')
    fitting = request.GET.get('fitting')
    item = Item.objects.all().filter(shirt_id=id).first()
    item.fitting = fitting
    item.save()
    return HttpResponse(200)

@login_required
def update_item_quantity(request, pk):
    quantity = request.POST.get('quantity')
    item = Item.objects.all().filter(pk=pk).first()
    item.quantity = quantity
    item.save()
    return redirect('carts:get_cart')