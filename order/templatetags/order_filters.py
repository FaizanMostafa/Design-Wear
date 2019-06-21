from django import template

register = template.Library()

@register.filter(name="order_abbr")
def order_abbr(value):
    if value == 'PND':
        return 'PENDING'
    elif value == 'CNF':
        return 'CONFIRMED'
    elif value == 'INP':
        return 'IN PROGRESS'
    elif value == 'DSP':
        return 'DISPACHED'
    else:
        return 'COMPLETED'