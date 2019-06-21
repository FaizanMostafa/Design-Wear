from django.urls import path
from . import views

app_name = 'carts'

urlpatterns = [
    path('', views.get_cart, name='get_cart'),
    path('additem/', views.add_item, name='add_item'),
    path('removeitem/<int:pk>', views.remove_item, name='remove_item'),
    path('updateitemsize/', views.update_item_size, name='update_item_size'),
    path('updateitemfitting/', views.update_item_fitting, name='update_item_fitting'),
    path('updateitemquantity/<int:pk>', views.update_item_quantity, name='update_item_quantity'),
]
