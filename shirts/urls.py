from django.urls import path
from . import views

app_name = 'shirts'

urlpatterns = [
    path('design/', views.design, name='design'),
    path('getpattern/', views.get_pattern, name='get_pattern'),
]
