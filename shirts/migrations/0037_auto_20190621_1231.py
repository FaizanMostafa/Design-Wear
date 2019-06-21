# Generated by Django 2.1 on 2019-06-21 07:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shirts', '0036_pocket'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pocket',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pocket', to='shirts.Pattern'),
        ),
    ]