# Generated by Django 2.1 on 2019-06-22 09:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shirts', '0040_shirt_pocket'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shirt',
            name='pocket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='left_pocket', to='shirts.Pocket'),
        ),
    ]
