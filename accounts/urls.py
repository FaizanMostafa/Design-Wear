from django.urls import include, path
from . import views
from . forms import UserLoginForm
from django.contrib.auth import views as auth_views
app_name = "accounts"

urlpatterns = [
    path('signup/', views.SignUp.as_view(), name='signup'),
    path(
        'login/',
        auth_views.LoginView.as_view(
            template_name="accounts/login.html",
            authentication_form=UserLoginForm
            ),
        name='login'
    ),
    path('', include('django.contrib.auth.urls')),
]
