# Generated by Django 2.1 on 2019-05-15 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_auto_20190515_2131'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='items',
            field=models.IntegerField(default=0),
        ),
    ]
