from django.shortcuts import render
from . models import Pattern, Base, Collar

# Create your views here.
def design(request):
    pattern = Pattern.objects.get(name="p1")
    collar = pattern.collar.all().filter(catagory="RR").first()
    print(collar)
    cont = {
        "base": pattern.base,
        "collar": collar,
    }
    return render(request, 'shirts/shirtdesign.html', context=cont)