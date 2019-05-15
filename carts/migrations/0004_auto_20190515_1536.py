# Generated by Django 2.1 on 2019-05-15 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0003_item'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='total_price',
        ),
        migrations.AddField(
            model_name='cart',
            name='grand_total',
            field=models.IntegerField(default=0, verbose_name='Grand Total Price'),
        ),
        migrations.AddField(
            model_name='cart',
            name='shipping',
            field=models.IntegerField(default=4, verbose_name='Shipping Charges'),
        ),
        migrations.AddField(
            model_name='cart',
            name='sub_total',
            field=models.IntegerField(default=0, verbose_name='Sub Total Price'),
        ),
    ]
