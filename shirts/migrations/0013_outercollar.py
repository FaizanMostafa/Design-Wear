# Generated by Django 2.1 on 2019-03-16 10:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shirts', '0012_cuff'),
    ]

    operations = [
        migrations.CreateModel(
            name='OuterCollar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upper', models.ImageField(upload_to='outer_collars/upper_collars/', verbose_name='Upper Collar')),
                ('outer_r', models.ImageField(upload_to='outer_collars/outer_right_collars/', verbose_name='Outer Right Collar')),
                ('outer_l', models.ImageField(upload_to='outer_collars/outer_left_collars/', verbose_name='Outer Left Collar')),
                ('l_collar_base', models.ImageField(upload_to='outer_collars/left_collor_bases/', verbose_name='Left Collar Base')),
                ('r_collar_base', models.ImageField(upload_to='outer_collars/right_color_bases/', verbose_name='Right Collar Base')),
                ('catagory', models.CharField(choices=[('RR', 'Regular'), ('BR', 'Big Round'), ('CA', 'Cut Away'), ('DB', 'Dual Button'), ('PH', 'Pin Hole'), ('SW', 'Semi Wide'), ('RB', 'Round Button Down'), ('SP', 'Short Point'), ('SS', 'Stand'), ('WS', 'Wide Spread')], max_length=2)),
                ('pattern', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='outer_collar', to='shirts.Pattern')),
            ],
        ),
    ]