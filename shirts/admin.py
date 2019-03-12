from django.contrib import admin
from . models import Base, Pattern, Collar

# class PatternBase(admin.AdminSite):
#     list_display = ['id', 'name', 'created_on']

# Register your models here.
admin.site.register(Base)
admin.site.register(Pattern)
admin.site.register(Collar)