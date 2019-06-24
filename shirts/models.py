from django.db import models
from django.utils.translation import ugettext_lazy as _
from accounts.models import User
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

    def __str__(self):
        return self.pattern.name + " catagory: " + self.catagory + " opened: " + str(self.opened)

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
    opened = models.BooleanField(default=False)
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    pattern = models.ForeignKey(Pattern, related_name="outer_collar", on_delete=models.CASCADE)

    def __str__(self):
        return self.pattern.name + " catagory: " + self.catagory + " opened: " + str(self.opened)

class CollarBase(models.Model):
    l_base = models.ImageField(
        _("Left Collar Base"), upload_to='outer_collars/left_collor_bases/'
    )
    r_base = models.ImageField(
        _("Right Collar Base"), upload_to='outer_collars/right_color_bases/'
    )
    opened = models.BooleanField(default=False)
    pattern = models.ForeignKey(Pattern, related_name="collar_base", on_delete=models.CASCADE)

    def __str__(self):
        return self.pattern.name + " opened: " + str(self.opened)

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
        return self.pattern.name + " catagory: " + self.catagory + " opened: " + str(self.opened)

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
        return self.pattern.name + " catagory: " + self.catagory + " opened: " + str(self.opened)
    
class Pocket(models.Model):
    pocket = models.ImageField(upload_to="pockets/")
    visible = models.BooleanField(default=False)
    pattern = models.ForeignKey(Pattern, related_name="pocket", on_delete=models.CASCADE)

    def __str__(self):
        return "pattern: " + str(self.pattern) + " visible: " + str(self.visible)

class BaseButton(models.Model):
    color = models.CharField(max_length=32)
    button = models.ImageField(upload_to="base_buttons/")

    def __str__(self):
        return self.color

class CollarButton(models.Model):
    CATAGORY_CHOICES = (
        ('RR', 'Regular'),
        ('DB', 'Dual Button'),
        ('RB', 'Round Button Down'),
        ('PH', 'Pinhole'),
    )
    color = models.CharField(max_length=32)
    button = models.ImageField(upload_to="collar_buttons/")
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    opened = models.BooleanField(default=False)

class CuffButton(models.Model):
    CATAGORY_CHOICES = (
        ('AA', 'Angle'),
        ('BA', 'Big Angle'),
        ('BR', 'Big Round'),
        ('FR', 'French'),
        ('RR', 'Round'),
        ('SQ', 'Square'),
    )
    color = models.CharField(max_length=32)
    button = models.ImageField(upload_to="cuff_buttons/")
    catagory = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='RR')
    opened = models.BooleanField(default=False)

    def __str__(self):
        return self.color + " catagory: " + self.catagory + " opened: " + str(self.opened)

class Shirt(models.Model):
    base = models.ForeignKey(Base, related_name="base", on_delete=models.CASCADE)
    inner_collar = models.ForeignKey(InnerCollar, related_name="inner_collar", on_delete=models.CASCADE)
    outer_collar = models.ForeignKey(OuterCollar, related_name="outer_collar", on_delete=models.CASCADE)
    collar_base = models.ForeignKey(CollarBase, related_name="collar_base", on_delete=models.CASCADE)
    yoke = models.ForeignKey(Yoke, related_name="yoke", on_delete=models.CASCADE)
    outer_placket = models.ForeignKey(OuterPlacket, related_name="outer_placket", on_delete=models.CASCADE)
    inner_placket = models.ForeignKey(InnerPlacket, related_name="inner_placket", on_delete=models.CASCADE)
    outer_cuff = models.ForeignKey(OuterCuff, related_name="outer_cuff", on_delete=models.CASCADE)
    inner_cuff = models.ForeignKey(InnerCuff, related_name="inner_cuff", on_delete=models.CASCADE)
    pocket = models.ForeignKey(Pocket, related_name="left_pocket", on_delete=models.CASCADE)
    base_button = models.ForeignKey(BaseButton, related_name="base_button", on_delete=models.CASCADE)
    cuff_button = models.ForeignKey(CuffButton, related_name="cuff_button", on_delete=models.CASCADE)
    collar_button = models.ForeignKey(CollarButton, related_name="collar_button", on_delete=models.CASCADE)
    CATAGORY_CHOICES = (
        ('SP', 'Side Pleats'),
        ('BP', 'Box Pleats'),
        ('NN', 'None'),
    )
    shirt_back = models.CharField(max_length=2, choices=CATAGORY_CHOICES, default='NN')
    created_on = models.DateTimeField(_("Created On"), editable=False, auto_now_add=True)
    likes = models.IntegerField(default=0, editable=False)
    price = models.IntegerField(default=12, editable=False)
    sess_id = models.CharField(max_length=32, default="")

class Creator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shirt = models.ForeignKey(Shirt, on_delete=models.CASCADE)