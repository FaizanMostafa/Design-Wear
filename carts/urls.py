from django.urls import path
from . import views

app_name = 'carts'

urlpatterns = [
    path('', views.get_cart, name='get_cart'),
    path('additem/', views.add_item, name='add_item'),
    path('removeitem/<int:pk>', views.remove_item, name='remove_item'),
]
