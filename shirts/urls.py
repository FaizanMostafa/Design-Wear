from django.urls import path
from . import views

app_name = 'shirts'

urlpatterns = [
    path('design/', views.design, name='design'),
    path('getbasepattern/', views.get_pattern, name='get_base_pattern'),
    path('getoutercollar/', views.get_outer_collar, name='get_outer_collar'),
    path('getinnercollar/', views.get_inner_collar, name='get_inner_collar'),
    path('getouterplacket/', views.get_outer_placket, name='get_outer_placket'),
    path('getinnerplacket/', views.get_inner_placket, name='get_inner_placket'),
    path('getouterfoldedcuff/', views.get_outer_folded_cuff, name='get_outer_folded_cuff'),
]
