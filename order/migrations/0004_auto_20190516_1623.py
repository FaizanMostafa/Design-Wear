# Generated by Django 2.1 on 2019-05-16 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_order_items'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('PND', 'PENDING'), ('CNF', 'CONFIRMED'), ('INP', 'IN PROGRESS'), ('DSP', 'DISPACHED'), ('CMP', 'COMPLETED')], default='PND', max_length=3),
        ),
    ]
