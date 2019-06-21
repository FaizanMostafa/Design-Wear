from django.shortcuts import render, reverse, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import ExtPayPalPaymentsForm
from django.views.decorators.csrf import csrf_exempt
from order.models import Order, OrderItem
from django.conf import settings
from django.contrib import messages

# Create your views here.
@csrf_exempt
def payment_done(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Order, order_id=order_id)
    order_items = OrderItem.objects.all().filter(order=order)
    for o_item in order_items:
        item = o_item.item
        item.ordered = True
        item.save()
    messages.success(request, "Payment was succesfull, hence your your order status will change shortly!")
    return redirect('orders:my_orders')


@csrf_exempt
def payment_canceled(request):
    messages.error(request, "An error occurred during payment processing, please try later!")
    return redirect('carts:get_cart')


@login_required
def payment_process(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Order, order_id=order_id)
    host = request.get_host()
    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': order.amount,
        'item_name': 'shirts',
        'invoice': order.id,
        'currency_code': 'USD',
        'notify_url': 'http://{0}{1}'.format(host, reverse('paypal-ipn')),
        'return_url': 'http://{0}{1}'.format(host, reverse('payment:done')),
        'cancel_return': 'http://{0}{1}'.format(host, reverse('payment:canceled')),
    }
    form = ExtPayPalPaymentsForm(initial=paypal_dict)
    return form