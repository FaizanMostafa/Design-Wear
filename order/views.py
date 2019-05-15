from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string
import datetime
from . models import Order, OrderItem
from carts.models import Cart, Item

# Create your views here.
def place_order(request):
    uid = get_random_string(
            length=12,
            allowed_chars=u'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        )
    date = datetime.datetime.now()
    order_id = "{0}{1}{2}{3}".format(date.year, date.month, date.day, uid)
    request.session['order_id'] = order_id
    cart = Cart.objects.all().filter(user=request.user).first()
    order = Order.objects.create(
        order_id  = order_id,
        amount = cart.grand_total,
        user = request.user,
    )
    items = Item.objects.all().filter(cart=cart)
    for item in items:
        OrderItem.objects.create(
            item = item,
            order = order,
        )
    return redirect('payment:process')