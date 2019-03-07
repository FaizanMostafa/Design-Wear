from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from . forms import CustomUserCreationForm
from . models import User

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    model = User
    list_display = ['id', 'first_name', 'last_name',  'email', 'age', 'height', 'join_date']

admin.site.register(User, CustomUserAdmin)