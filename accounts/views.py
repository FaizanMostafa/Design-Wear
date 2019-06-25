from django.shortcuts import render
from django.views.generic import CreateView
from . forms import CustomUserCreationForm
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView

# Create your views here.
class SignUp(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('accounts:login')
    template_name = 'accounts/register.html'