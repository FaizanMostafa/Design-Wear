from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('place/', views.place_order, name='place'),
    path('myorders/', views.my_orders, name='my_orders'),
]
