from django.db import models
from accounts.models import User
from carts.models import Item

# Create your models here.

class Order(models.Model):
    STATUS_CHOICES = (
        ('PND', 'PENDING'),
        ('CNF', 'CONFIRMED'),
        ('INP', 'IN PROGRESS'),
        ('DSP', 'DISPACHED'),
        ('CMP', 'COMPLETED'),
    )
    order_id = models.CharField(max_length=32, default='')
    date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=3, choices=STATUS_CHOICES, default='PND')
    items = models.IntegerField(default=0)
    amount = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)