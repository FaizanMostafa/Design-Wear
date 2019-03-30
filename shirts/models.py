from django.db import models
from django.utils.translation import ugettext_lazy as _
from PIL import Image

# Create your models here.
class Pattern(models.Model):
    name = models.CharField(_("Pattern Name"), unique=True, max_length=32)
    created_on = models.DateTimeField(_("Created On"), editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name

class Base(models.Model):
    l_shoulder = models.ImageField(_("Left Shoulder"), upload_to='left_shoulders/')
    r_shoulder = models.ImageField(_("Right Shoulder"), upload_to='right_shoulders/')
    l_front = models.ImageField(_("Left Front"), upload_to='left_fronts/')
    r_front = models.ImageField(_("Right Front"), upload_to='right_fronts/')
    pattern = models.OneToOneField(Pattern, on_delete=models.CASCADE)

class Background(models.Model):
    background = models.ImageField(_("Background Shirt Base"), upload_to='bg_shirt_base/')
    class Meta:
        verbose_name_plural = "Background"

class Yoke(models.Model):
    bottom = models.ImageField(_("Bottom Yoke"), upload_to='neck_bottoms/')
    top = models.ImageField(_("Top Yoke"), upload_to='neck_tops/')
    opened = models.BooleanField(default=False)
    pattern = models.ForeignKey(Pattern, related_name="yoke", on_delete=models.CASCADE)

class OuterPlacket(models.Model):
    outer = models.ImageField(_("Outer Placket"), upload_to='outer_plackets/')
    opened = models.BooleanField(default=False)
    pattern = models.ForeignKey(Pattern, related_name="outer_placket", on_delete=models.CASCADE)

class InnerPlacket(models.Model):
    inner = models.ImageField(_("Inner Placket"), upload_to='inner_plackets/')
    pattern = models.OneToOneField(Pattern, on_delete=models.CASCADE)

class InnerCollar(models.Model):
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
    opened = models.BooleanField(default=False)
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    pattern = models.ForeignKey(Pattern, related_name="inner_collar", on_delete=models.CASCADE)

class OuterCollar(models.Model):
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
    upper = models.ImageField(_("Upper Collar"), upload_to="outer_collars/upper_collars/")
    outer_r = models.ImageField(
        _("Outer Right Collar"), upload_to="outer_collars/outer_right_collars/"
    )
    outer_l = models.ImageField(
        _("Outer Left Collar"), upload_to="outer_collars/outer_left_collars/"
    )
    l_base = models.ImageField(
        _("Left Collar Base"), upload_to='outer_collars/left_collor_bases/'
    )
    r_base = models.ImageField(
        _("Right Collar Base"), upload_to='outer_collars/right_color_bases/'
    )
    opened = models.BooleanField(default=False)
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    pattern = models.ForeignKey(Pattern, related_name="outer_collar", on_delete=models.CASCADE)

class OuterCuff(models.Model):
    CATAGORY_CHOICES = (
        ('AA', 'Angle'),
        ('BA', 'Big Angle'),
        ('BR', 'Big Round'),
        ('FR', 'French'),
        ('RR', 'Round'),
        ('SQ', 'Square'),
    )
    top = models.ImageField(_("Outer Top Cuff"), upload_to="outer_top_cuffs/")
    bottom = models.ImageField(_("Outer Bottom Cuff"), upload_to="outer_bottom_cuffs/")
    opened = models.BooleanField(default=False)
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    pattern = models.ForeignKey(Pattern, related_name="outer_cuff", on_delete=models.CASCADE)

    def __str__(self):
        return self.pattern.name + " opened: " + str(self.opened)

class InnerCuff(models.Model):
    CATAGORY_CHOICES = (
        ('AA', 'Angle'),
        ('BA', 'Big Angle'),
        ('BR', 'Big Round'),
        ('FR', 'French'),
        ('RR', 'Round'),
        ('SQ', 'Square'),
    )
    inner = models.ImageField(_("Inner Cuff"), upload_to="inner_cuffs/")
    opened = models.BooleanField(default=False)
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    pattern = models.ForeignKey(Pattern, related_name="inner_cuff", on_delete=models.CASCADE)

    def __str__(self):
        return self.pattern.name + " opened: " + str(self.opened)