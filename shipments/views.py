from django.shortcuts import render
from . models import Address
from payment.views import payment_process
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def create_or_update_address(request):
    if request.method == 'POST':
        address = Address.objects.all().filter(user=request.user).first()
        first_name = request.POST.get('FirstName')
        last_name = request.POST.get('LastName')
        address_line1 = request.POST.get('AddressL1')
        address_line2 = request.POST.get('AddressL2')
        state_province = request.POST.get('StateProvince')
        city = request.POST.get('City')
        zipcode = request.POST.get('Zipcode')
        contact_no = request.POST.get('PhoneNumber')
        email = request.POST.get('Email')
        if address:
            address.first_name = first_name
            address.last_name = last_name
            address.address_line1 = address_line1
            address.address_line2 = address_line2
            address.state_province = state_province
            address.city = city
            address.zipcode = zipcode
            address.contact_no = contact_no
            address.email = email
            address.save()
        else:
            address = Address.objects.create(
                first_name = first_name,
                last_name = last_name,
                address_line1 = address_line1,
                address_line2 = address_line2,
                state_province = state_province,
                city = city,
                zipcode = zipcode,
                contact_no = contact_no,
                email = email,
                user = request.user,
            )
    else:
        address = Address.objects.all().filter(user=request.user).first()
    return address

@login_required
def get_payment_address(request):
    address = create_or_update_address(request)
    form = payment_process(request)
    return render(request, 'shipments/addresspayment.html', {'address':address, 'form':form})

@login_required
def get_address(request):
    address = create_or_update_address(request)
    return render(request, 'shipments/address.html', {'address':address})
