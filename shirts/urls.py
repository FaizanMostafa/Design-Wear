from django.urls import path
from . import views

app_name = 'shirts'

urlpatterns = [
    path('design/', views.design, name='design'),
    path('getbasepattern/', views.get_pattern, name='get_base_pattern'),
    path('getoutercollarpattern/', views.get_outer_collar_pattern, name='get_outer_collar_pattern'),
    path('getoutercollardesign/', views.get_outer_collar_design, name='get_outer_collar_design'),
    path('getinnercollar/', views.get_inner_collar, name='get_inner_collar'),
    path('getouterplacket/', views.get_outer_placket, name='get_outer_placket'),
    path('getinnerplacket/', views.get_inner_placket, name='get_inner_placket'),
    path('getouterfoldedcuff/', views.get_outer_folded_cuff, name='get_outer_folded_cuff'),
    path('getoutercuffpattern/', views.get_outer_cuff_pattern, name='get_outer_cuff_pattern'),
    path('getoutercuffdesign/', views.get_outer_cuff_design, name='get_outer_cuff_design'),
    path('getinneropenedcuff/', views.get_inner_opened_cuff, name='get_inner_opened_cuff'),
    path('getinnerclosedcuff/', views.get_inner_closed_cuff, name='get_inner_closed_cuff'),
    path('getpocket/', views.get_pocket, name='get_pocket'),
    # path('postshirtspecs/', views.post_shirt_specs, name='post_shirt_specs'),
    # path('editdesign/<int:pk>', views.edit_design, name='edit_design'),
]
