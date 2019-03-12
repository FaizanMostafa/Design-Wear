from django.db import models
from django.utils.translation import ugettext_lazy as _
from PIL import Image

# Create your models here.
class Pattern(models.Model):
    name = models.CharField(_("Pattern Name"), unique=True, max_length=32)
    created_on = models.DateTimeField(_("Created On"), editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Patterns"

class Base(models.Model):
    l_shoulder = models.ImageField(_("Left Shoulder"), upload_to='left_shoulders/')
    r_shoulder = models.ImageField(_("Right Shoulder"), upload_to='right_shoulders/')
    l_front = models.ImageField(_("Left Front"), upload_to='left_fronts/')
    r_front = models.ImageField(_("Right Front"), upload_to='right_fronts/')
    l_collar_base = models.ImageField(_("Left Collar Base"), upload_to='left_collor_bases/')
    r_collar_base = models.ImageField(_("Right Collar Base"), upload_to='right_color_bases/')
    yoke_bottom = models.ImageField(_("Bottom Yoke"), upload_to='neck_bottoms/')
    yoke_top = models.ImageField(_("Top Yoke"), upload_to='neck_tops/')
    placket = models.ImageField(_("Placket"), upload_to='plackets/')
    pattern = models.OneToOneField(Pattern, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Bases"

class Collar(models.Model):
    CATAGORY_CHOICES = (
        ('RR', 'Regular'),
        ('BR', 'Big Round'),
        ('CA', 'Cut Away'),
        ('DB', 'Dual Button'),
        ('PH', 'Pin Hole'),
        ('SW', 'Semi Wide'),
        ('RB', 'Round Button Down'),
        ('SP', 'Short Point'),
        ('SS', 'Stand'),
        ('WS', 'Wide Spread'),
    )
    inner = models.ImageField(_("Inner Collar"), upload_to="inner_collars/")
    upper = models.ImageField(_("Upper Collar"), upload_to="upper_collars/")
    outer_r = models.ImageField(_("Outer Right Collar"), upload_to="outer_right_collars/")
    outer_l = models.ImageField(_("Outer Left Collar"), upload_to="outer_left_collars/")
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES)
    pattern = models.ForeignKey(Pattern, related_name="collar", on_delete=models.CASCADE)

class Cuff(models.Model):
    CATAGORY_CHOICES = (
        ('AA', 'Angle'),
        ('BA', 'Big Angle'),
        ('BR', 'Big Round'),
        ('FR', 'French'),
        ('RR', 'Round'),
        ('SQ', 'Square'),
    )
    outer_top = models.ImageField(_("Outer Top Cuff"), upload_to="outer_top_cuffs/")
    outer_bottom = models.ImageField(_("Outer Bottom Cuff"), upload_to="outer_bottom_cuffs/")
    inner = models.ImageField(_("Inner Cuff"), upload_to="inner_cuffs/")
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES)
    pattern = models.ForeignKey(Pattern, related_name="cuff", on_delete=models.CASCADE)