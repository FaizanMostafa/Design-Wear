from django.urls import path
from . import views

app_name = 'shipments'

urlpatterns = [
    path('addresspayement/', views.get_payment_address, name='payment_address'),
    path('address/', views.get_address, name='address'),
]
