from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from . models import Pattern, Base, Collar

# Create your views here.
def design(request):
    pattern = Pattern.objects.get(name="p1")
    collar = pattern.collar.all().filter(catagory="RR").first()
    cuff = pattern.cuff.all().filter(catagory="RR").first()
    print(collar)
    cont = {
        "base": pattern.base,
        "collar": collar,
        "cuff": cuff,
    }
    return render(request, 'shirts/shirtdesign.html', context=cont)

def get_pattern(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    collar = pattern.collar.all().filter(catagory="RR").first()
    cuff = pattern.cuff.all().filter(catagory="RR").first()
    data = {
        "left_shoulder": pattern.base.l_shoulder.url,
        "right_shoulder": pattern.base.r_shoulder.url,
        "left_front": pattern.base.l_front.url,
        "right_front": pattern.base.r_front.url,
        "left_collar_base": pattern.base.l_collar_base.url,
        "right_collar_base": pattern.base.r_collar_base.url,
        "yoke_top": pattern.base.yoke_top.url,
        "yoke_bottom": pattern.base.yoke_bottom.url,
        "placket": pattern.base.placket.url,
        "inner_collar": collar.inner.url,
        "upper_collar": collar.upper.url,
        "outer_right_collar": collar.outer_r.url,
        "outer_left_collar": collar.outer_l.url,
        "inner_cuff": cuff.inner.url,
        "outer_top_cuff": cuff.outer_top.url,
        "outer_bottom_cuff": cuff.outer_bottom.url,
    }
    return JsonResponse(data)