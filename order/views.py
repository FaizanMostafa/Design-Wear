from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string
from django.contrib.auth.decorators import login_required
from . models import Order, OrderItem
from carts.models import Cart, Item
import datetime

# Create your views here.
@login_required
def place_order(request):
    uid = get_random_string(
            length=12,
            allowed_chars=u'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        )
    date = datetime.datetime.now()
    order_id = "{0}{1}{2}{3}".format(date.year, date.month, date.day, uid)
    request.session['order_id'] = order_id
    cart = Cart.objects.all().filter(user=request.user).first()
    items = Item.objects.all().filter(cart=cart, ordered=False)
    order = Order.objects.create(
        order_id  = order_id,
        amount = cart.grand_total,
        items = len(items),
        user = request.user,
    )
    for item in items:
        OrderItem.objects.create(
            item = item,
            order = order,
        )
    return redirect('shipments:payment_address')

@login_required
def my_orders(request):
    orders = Order.objects.all().filter(user=request.user).order_by('-date')
    return render(request, 'orders/myorders.html', {'orders':orders})