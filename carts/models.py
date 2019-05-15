from django.db import models
from shirts.models import Shirt
from accounts.models import User
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

# Create your models here.

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping = models.IntegerField(_("Shipping Charges"), default=0)
    sub_total = models.IntegerField(_("Sub Total Price"), default=0)
    grand_total = models.IntegerField(_("Grand Total Price"), default=0)

class Item(models.Model):
    SIZE_OPTIONS = (
        ('SM', 'SMALL'),
        ('MD', 'MEDIUM'),
        ('LG', 'LARGE'),
        ('XL', 'EXTRA LARGE'),
        ('XX', 'XX LARGE'),
    )
    FITTING_OPTIONS = (
        ('SLM', 'SLIM'),
        ('REG', 'REGULAR'),
        ('RLX', 'RELAXED'),
    )
    size = models.CharField(max_length=2, choices=SIZE_OPTIONS, default='LG')
    fitting = models.CharField(max_length=3, choices=FITTING_OPTIONS, default='REG')
    quantity = models.IntegerField(max_length=1, default=1)
    shirt = models.ForeignKey(Shirt, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, related_name='cart', on_delete=models.CASCADE)

@receiver([post_save, post_delete], sender=Item)
def calculate_total_price(sender, instance, **kwargs):
    cart = instance.cart
    items = Item.objects.all().filter(cart=cart)
    shipping = 4
    sub_total = 0
    for item in items:
        sub_total += int(item.shirt.price)
    if(sub_total > 35):
        shipping = 0
    cart.shipping = shipping
    cart.sub_total = sub_total
    cart.grand_total = sub_total+shipping
    cart.save()