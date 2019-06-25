from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django import forms

class UserLoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

    username = forms.CharField(widget=forms.TextInput(
        attrs={
            'class': 'form-control mb-4',
            'placeholder': 'Email',
        }
    ))
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={
            'class': 'form-control mb-4',
            'placeholder': 'Password',
        }
    ))

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        fields = ('first_name', 'last_name', 'email', 'age', 'height', 'avatar', 'password1', 'password2')
        model = get_user_model()
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'First Name',
                                                                'class': 'form-control',
                                                                }))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Last Name',
                                                                'class': 'form-control',
                                                                }))
    email = forms.CharField(widget=forms.EmailInput(attrs={'placeholder': 'Email',
                                                                'class': 'form-control mb-4',
                                                                }))
    age = forms.IntegerField(widget=forms.NumberInput(attrs={'placeholder': 'Age',
                                                                'class': 'form-control',
                                                                }))
    height = forms.IntegerField(widget=forms.NumberInput(attrs={'placeholder': 'Height(cm)',
                                                                'class': 'form-control',
                                                                }))
    avatar = forms.ImageField(widget=forms.FileInput(attrs={'placeholder': 'Avatar',
                                                                'class': 'form-control  mb-4',
                                                                }))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password',
                                                                'class': 'form-control mb-4',
                                                                }))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password',
                                                                'class': 'form-control mb-4',
                                                                }))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password2'].label = "Confirm Password"