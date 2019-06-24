from django.shortcuts import render
from shirts.models import Shirt, Creator
from carts.models import Cart
from shirts.models import Shirt, Background

# Create your views here.

def index(request):
    shirts = Shirt.objects.order_by('-created_on')[:4]
    background = Background.objects.all().first()
    if request.user.is_authenticated and 'id' in request.session:
        print("outer")
        shirt = Shirt.objects.all().filter(sess_id=request.session['id']).first()
        if shirt and request.session['id'] == shirt.sess_id:
            print("inner")
            creator = Creator.objects.all().filter(user=request.user).first()
            if creator:
                cart = creator.cart
            else:
                cart = Cart.objects.create(
                    user = request.user,
                    total_price = 1500,
                )
            Creator.objects.create(
                user = request.user,
                shirt = shirt,
                cart = cart,
            )
            del request.session['id']
    return render(request, 'pages/index.html', context={"shirts":shirts, "background": background.background})


def about(request):
    return render(request, 'pages/about.html')