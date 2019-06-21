from paypal.standard.forms import PayPalPaymentsForm
from django.utils.html import format_html

class ExtPayPalPaymentsForm(PayPalPaymentsForm):
    def render(self):
        form_open  = u'''<form action="%s" id="PayPalForm" method="post">''' % (self.get_endpoint())
        form_close = u'</form>'
        # format html as you need
        submit_elm = u'''<button type="submit" style="background: #ffc33a;" class="btn my-4 btn-block" type="submit">Pay with <img id="pypl-logo" src="https://www.paypalobjects.com/images/shared/paypal-logo-129x32.svg"></button>'''
        return format_html(form_open+self.as_p()+submit_elm+form_close)