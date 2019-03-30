from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from . models import Pattern, Base, InnerCollar, OuterCollar, InnerCuff, OuterCuff, Yoke, Background

# Create your views here.
def design(request):
    background = Background.objects.first()
    pattern = Pattern.objects.get(name="Bp1")
    yoke = pattern.yoke.all().filter(opened=False).first()
    outer_placket = pattern.outer_placket.all().filter(opened=False).first()
    inner_collar = pattern.inner_collar.all().filter(catagory="RR", opened=False).first()
    outer_collar = pattern.outer_collar.all().filter(catagory="RR", opened=False).first()
    inner_cuff = pattern.inner_cuff.all().filter(catagory="RR", opened=False).first()
    outer_cuff = pattern.outer_cuff.all().filter(catagory="RR", opened=False).first()
    cont = {
        "background": background,
        "base": pattern.base,
        "yoke": yoke,
        "outer_placket": outer_placket,
        "inner_placket": pattern.innerplacket,
        "outer_collar": outer_collar,
        "inner_collar": inner_collar,
        "outer_cuff": outer_cuff,
        "inner_cuff": inner_cuff,
    }
    return render(request, 'shirts/shirtdesign.html', context=cont)

def get_pattern(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    yoke = pattern.yoke.all().filter(opened=False).first()
    outer_placket = pattern.outer_placket.all().filter(opened=False).first()
    if (
        request.GET.get('inner_collar_pattern') == "Bp1" and
        request.GET.get('outer_collar_pattern') == "Bp1"
    ):
        icollar_pattern = pattern
        ocollar_pattern = pattern
        icuff_pattern = pattern
        ocuff_pattern = pattern
    else:
        icollar_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_collar_pattern')))
        ocollar_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_collar_pattern')))
        icuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_cuff_pattern')))
        ocuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_cuff_pattern')))
    inner_collar = icollar_pattern.inner_collar.all().filter(catagory=(request.GET.get('collar_catagory')), opened=False).first()
    outer_collar = ocollar_pattern.outer_collar.all().filter(catagory=(request.GET.get('collar_catagory')), opened=False).first()
    inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=(request.GET.get('cuff_catagory')), opened=False).first()
    outer_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=(request.GET.get('cuff_catagory')), opened=False).first()
    data = {
        "left_shoulder": pattern.base.l_shoulder.url,
        "right_shoulder": pattern.base.r_shoulder.url,
        "left_front": pattern.base.l_front.url,
        "right_front": pattern.base.r_front.url,
        "left_collar_base": outer_collar.l_base.url,
        "right_collar_base": outer_collar.r_base.url,
        "yoke_top": yoke.top.url,
        "yoke_bottom": yoke.bottom.url,
        "outer_placket": outer_placket.outer.url,
        "inner_placket": pattern.innerplacket.inner.url,
        "inner_collar": inner_collar.inner.url,
        "upper_collar": outer_collar.upper.url,
        "outer_right_collar": outer_collar.outer_r.url,
        "outer_left_collar": outer_collar.outer_l.url,
        "inner_cuff": inner_cuff.inner.url,
        "outer_top_cuff": outer_cuff.top.url,
        "outer_bottom_cuff": outer_cuff.bottom.url,
        "base_pattern": pattern.name,
        "inner_collar_pattern": icollar_pattern.name,
        "outer_collar_pattern": ocollar_pattern.name,
        "inner_cuff_pattern": icuff_pattern.name,
        "outer_cuff_pattern": ocuff_pattern.name,
    }
    return JsonResponse(data)

def get_outer_collar(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    outer_collar = pattern.outer_collar.all().filter(catagory=(request.GET.get('catagory')), opened=False).first()
    data = {
        "left_collar_base": outer_collar.l_base.url,
        "right_collar_base": outer_collar.r_base.url,
        "upper_collar": outer_collar.upper.url,
        "outer_right_collar": outer_collar.outer_r.url,
        "outer_left_collar": outer_collar.outer_l.url,
        "outer_collar_pattern": outer_collar.pattern.name,
    }
    return JsonResponse(data)

def get_inner_collar(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    inner_collar = pattern.inner_collar.all().filter(catagory=(request.GET.get('catagory')), opened=False).first()
    data = {
        "inner_collar": inner_collar.inner.url,
        "inner_collar_pattern": inner_collar.pattern.name,
    }
    return JsonResponse(data)

def get_inner_placket(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    inner_placket = pattern.innerplacket
    data = {
        "inner_placket": inner_placket.inner.url,
        "inner_placket_pattern": inner_placket.pattern.name,
    }
    return JsonResponse(data)

def get_outer_placket(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    yoke = pattern.yoke.all().filter(opened=True).first()
    if request.GET.get('inner_collar_pattern') == "Bp1" and request.GET.get('outer_collar_pattern') == "Bp1":
        icollar_pattern = pattern
        ocollar_pattern = pattern
    else:
        icollar_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_collar_pattern')))
        ocollar_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_collar_pattern')))
    inner_collar = icollar_pattern.inner_collar.all().filter(catagory=(request.GET.get('collar_catagory')), opened=True).first()
    outer_collar = ocollar_pattern.outer_collar.all().filter(catagory=(request.GET.get('collar_catagory')), opened=True).first()
    outer_placket = pattern.outer_placket.all().filter(opened=True).first()
    data = {
        "left_collar_base": outer_collar.l_base.url,
        "right_collar_base": outer_collar.r_base.url,
        "yoke_top": yoke.top.url,
        "yoke_bottom": yoke.bottom.url,
        "outer_placket": outer_placket.outer.url,
        "inner_collar": inner_collar.inner.url,
        "upper_collar": outer_collar.upper.url,
        "outer_right_collar": outer_collar.outer_r.url,
        "outer_left_collar": outer_collar.outer_l.url,
    }
    return JsonResponse(data)

def get_outer_folded_cuff(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('base_pattern')))
    if request.GET.get('inner_cuff_pattern') == "Bp1" and request.GET.get('outer_cuff_pattern') == "Bp1":
        icuff_pattern = pattern
        ocuff_pattern = pattern
    else:
        icuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_cuff_pattern')))
        ocuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_cuff_pattern')))
    inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=True).first()
    outer_top_cuff = icuff_pattern.outer_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=True).first()
    outer_bottom_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=True).first()
    data = {
        "inner_cuff": inner_cuff.inner.url,
        "outer_top_cuff": outer_top_cuff.top.url,
        "outer_bottom_cuff": outer_bottom_cuff.bottom.url,
    }
    return JsonResponse(data)


def get_outer_cuff(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('base_pattern')))
    if request.GET.get('outer_cuff_pattern') == "Bp1":
        ocuff_pattern = pattern
    else:
        ocuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_cuff_pattern')))
    outer_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=False).first()
    data = {
        "outer_top_cuff": outer_cuff.top.url,
        "outer_bottom_cuff": outer_cuff.bottom.url,
        "outer_cuff_pattern": ocuff_pattern.name,
    }
    return JsonResponse(data)


def get_inner_opened_cuff(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('base_pattern')))
    if request.GET.get('inner_cuff_pattern') == "Bp1":
        icuff_pattern = pattern
    else:
        icuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_cuff_pattern')))
    inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=True).first()
    outer_top_cuff = icuff_pattern.outer_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=True).first()
    data = {
        "inner_cuff": inner_cuff.inner.url,
        "outer_top_cuff": outer_top_cuff.top.url,
        "inner_cuff_pattern": icuff_pattern.name,
    }
    return JsonResponse(data)

def get_inner_closed_cuff(request):
    icuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_cuff_pattern')))
    inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=(request.GET.get('catagory')), opened=False).first()
    data = {
        "inner_cuff": inner_cuff.inner.url,
    }
    return JsonResponse(data)