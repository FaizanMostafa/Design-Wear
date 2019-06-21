from django.db import models
from accounts.models import User

# Create your models here.

class Address(models.Model):
    first_name = models.CharField(max_length=16)
    last_name = models.CharField(max_length=16)
    address_line1 = models.CharField(max_length=256)
    address_line2 = models.CharField(max_length=256, default='')
    state_province = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    zipcode = models.CharField(max_length=32)
    country = models.CharField(max_length=32, default='Pakistan')
    contact_no = models.CharField(max_length=16)
    email = models.EmailField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)