from django.shortcuts import (
    render, get_object_or_404,
    HttpResponse, redirect,
    HttpResponseRedirect, reverse
)
from django.http import JsonResponse
from carts.models import Cart
from . models import (
    Pattern, Base, InnerCollar, OuterCollar,
    InnerCuff, OuterCuff, Yoke, Background,
    CollarBase, Shirt, Creator, BaseButton,
    CollarButton, CuffButton,
)

# Create your views here.
def design(request):
    background = Background.objects.first()
    pattern = Pattern.objects.get(name="Bp1")
    yoke = pattern.yoke.all().filter(opened=False).first()
    outer_placket = pattern.outer_placket.all().filter(opened=False).first()
    inner_collar = pattern.inner_collar.all().filter(catagory="RR", opened=False).first()
    outer_collar = pattern.outer_collar.all().filter(catagory="RR", opened=False).first()
    collar_base = pattern.collar_base.all().filter(opened=False).first()
    inner_cuff = pattern.inner_cuff.all().filter(catagory="RR", opened=False).first()
    outer_cuff = pattern.outer_cuff.all().filter(catagory="RR", opened=False).first()
    base_button = BaseButton.objects.get(color="b1")
    collar_button = CollarButton.objects.all().filter(color="b1", catagory="RR", opened=False).first()
    button_holes = CollarButton.objects.all().filter(color="b1", catagory="RR", opened=True).first()
    cuff_button = CuffButton.objects.all().filter(color="b1", catagory="RR", opened=False).first()
    cont = {
        "background": background,
        "base": pattern.base,
        "yoke": yoke,
        "outer_placket": outer_placket,
        "inner_placket": pattern.innerplacket,
        "outer_collar": outer_collar,
        "inner_collar": inner_collar,
        "collar_base": collar_base,
        "buttons": {
            "base_button": base_button,
            "collar_button": collar_button,
            "button_holes": button_holes,
            "cuff_button": cuff_button
        },
        "outer_cuff": outer_cuff,
        "inner_cuff": inner_cuff,
    }
    return render(request, 'shirts/shirtdesign.html', context=cont)

def edit_design(request, pk):
    background = Background.objects.first()
    shirt = Shirt.objects.all().filter(pk=pk).first()
    cont = {
        "background": background,
        "base": shirt.base,
        "yoke": shirt.yoke,
        "outer_placket": shirt.outer_placket,
        "inner_placket": shirt.inner_placket,
        "outer_collar": shirt.outer_collar,
        "inner_collar": shirt.inner_collar,
        "collar_base": shirt.collar_base,
        "outer_cuff": shirt.outer_cuff,
        "inner_cuff": shirt.inner_cuff,
    }
    return render(request, 'shirts/shirtdesign.html', context=cont)

def get_pattern(request):
    pattern = get_object_or_404(Pattern, name=(request.GET.get('fabric')))
    collar_base = pattern.collar_base.filter(opened=False).first()
    yoke = pattern.yoke.all().filter(opened=False).first()
    outer_placket = pattern.outer_placket.all().filter(opened=False).first()
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
        "left_collar_base": collar_base.l_base.url,
        "right_collar_base": collar_base.r_base.url,
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

def get_outer_collar_design(request):
    fabric = request.GET.get('fabric')
    icollar_pattern = get_object_or_404(Pattern, name=request.GET.get('icollar_pattern'))
    catagory = request.GET.get('catagory')
    pattern = get_object_or_404(Pattern, name=fabric)
    collar_base = pattern.collar_base.filter(opened=False).first()
    outer_collar = pattern.outer_collar.all().filter(catagory=catagory, opened=False).first()
    inner_collar = icollar_pattern.inner_collar.all().filter(catagory=catagory, opened=False).first()
    if catagory == "PH":
        button_holes = CollarButton.objects.all().filter(color=request.GET.get('button'), catagory=catagory, opened=False).first()
    else:
        button_holes = CollarButton.objects.all().filter(color="b1", catagory="RR", opened=True).first()
    if catagory not in ["DB", "RB"]:
        catagory = "RR"
    collar_button = CollarButton.objects.all().filter(color=request.GET.get('button'), catagory=catagory, opened=False).first()
    data = {
        "left_collar_base": collar_base.l_base.url,
        "right_collar_base": collar_base.r_base.url,
        "upper_collar": outer_collar.upper.url,
        "outer_right_collar": outer_collar.outer_r.url,
        "outer_left_collar": outer_collar.outer_l.url,
        "outer_collar_pattern": outer_collar.pattern.name,
        "inner_collar": inner_collar.inner.url,
        "button": collar_button.button.url,
        "button_holes": button_holes.button.url,
        "collar_catagory": catagory
    }
    return JsonResponse(data)

def get_outer_collar_pattern(request):
    fabric = request.GET.get('fabric')
    catagory = request.GET.get('catagory')
    pattern = get_object_or_404(Pattern, name=fabric)
    collar_base = pattern.collar_base.filter(opened=False).first()
    outer_collar = pattern.outer_collar.all().filter(catagory=catagory, opened=False).first()
    data = {
        "left_collar_base": collar_base.l_base.url,
        "right_collar_base": collar_base.r_base.url,
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
    collar_base = pattern.collar_base.filter(opened=True).first()
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
    catagory = request.GET.get('collar_catagory')
    if catagory not in ["DB", "RB"]:
        catagory = "RR"
    button_holes = CollarButton.objects.all().filter(color="b1", catagory="RR", opened=True).first()
    collar_button = CollarButton.objects.all().filter(color=request.GET.get('button'), catagory=catagory, opened=True).first()
    data = {
        "left_collar_base": collar_base.l_base.url,
        "right_collar_base": collar_base.r_base.url,
        "yoke_top": yoke.top.url,
        "yoke_bottom": yoke.bottom.url,
        "outer_placket": outer_placket.outer.url,
        "inner_collar": inner_collar.inner.url,
        "upper_collar": outer_collar.upper.url,
        "collar_button": collar_button.button.url,
        "button_holes": button_holes.button.url,
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
    cuff_button = CuffButton.objects.all().filter(color=request.GET.get('button_color'), catagory=request.GET.get('catagory'), opened=True).first()
    data = {
        "inner_cuff": inner_cuff.inner.url,
        "outer_top_cuff": outer_top_cuff.top.url,
        "outer_bottom_cuff": outer_bottom_cuff.bottom.url,
        "cuff_button": cuff_button.button.url,
    }
    return JsonResponse(data)


def get_outer_cuff_pattern(request):
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

def get_outer_cuff_design(request):
    ocuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('outer_cuff_pattern')))
    icuff_pattern = get_object_or_404(Pattern, name=(request.GET.get('inner_cuff_pattern')))
    catagory = request.GET.get('catagory')
    outer_cuff = ocuff_pattern.outer_cuff.all().filter(catagory=catagory, opened=False).first()
    inner_cuff = icuff_pattern.inner_cuff.all().filter(catagory=catagory, opened=False).first()
    cuff_button = CuffButton.objects.all().filter(color=request.GET.get('button_color'), catagory=request.GET.get('catagory'), opened=False).first()
    data = {
        "outer_top_cuff": outer_cuff.top.url,
        "outer_bottom_cuff": outer_cuff.bottom.url,
        "inner_cuff": inner_cuff.inner.url,
        "cuff_button": cuff_button.button.url,
        "cuff_design": catagory,
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

def get_pocket(request):
    base_pattern = get_object_or_404(Pattern, name=(request.GET.get('pattern')))
    visible = request.GET.get('visible')
    print("\n", base_pattern, "\n")
    print("\n", visible, "\n")
    pocket = base_pattern.pocket.all().filter(visible=visible).first()
    data = {
        "pocket": pocket.pocket.url,
        "visible": visible,
    }
    return JsonResponse(data)