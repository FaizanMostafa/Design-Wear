from django.contrib import admin
from . models import (
    Base, Pattern, InnerCollar,
    OuterCuff, Yoke, Background,
    InnerCuff, OuterCollar, OuterPlacket,
    InnerPlacket, CollarBase, Shirt, Creator,
    BaseButton, CollarButton, CuffButton,
    Pocket,
)

# class PatternBase(admin.AdminSite):
#     list_display = ['id', 'name', 'created_on']

# Register your models here.
admin.site.register(Pattern)
admin.site.register(Base)
admin.site.register(Background)
admin.site.register(Yoke)
admin.site.register(OuterCollar)
admin.site.register(InnerCollar)
admin.site.register(OuterCuff)
admin.site.register(InnerCuff)
admin.site.register(OuterPlacket)
admin.site.register(InnerPlacket)
admin.site.register(CollarBase)
admin.site.register(BaseButton)
admin.site.register(CollarButton)
admin.site.register(Pocket)
admin.site.register(CuffButton)
admin.site.register(Shirt)
admin.site.register(Creator)