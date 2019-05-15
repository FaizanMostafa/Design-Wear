from django.shortcuts import render, reverse, get_object_or_404
from django.conf import settings
from paypal.standard.forms import PayPalPaymentsForm
from django.views.decorators.csrf import csrf_exempt
from order.models import Order

# Create your views here.
@csrf_exempt
def payment_done(request):
    return render(request, 'payment/done.html')


@csrf_exempt
def payment_canceled(request):
    return render(request, 'payment/canceled.html')


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
    form = PayPalPaymentsForm(initial=paypal_dict)
    return render(request, 'payment/process.html', {'form':form})