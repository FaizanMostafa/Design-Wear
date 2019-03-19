# Generated by Django 2.1 on 2019-03-17 05:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shirts', '0013_outercollar'),
    ]

    operations = [
        migrations.CreateModel(
            name='InnerCollar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inner', models.ImageField(upload_to='inner_collars/', verbose_name='Inner Collar')),
                ('upper', models.ImageField(upload_to='upper_collars/', verbose_name='Upper Collar')),
                ('catagory', models.CharField(choices=[('RR', 'Regular'), ('BR', 'Big Round'), ('CA', 'Cut Away'), ('DB', 'Dual Button'), ('PH', 'Pin Hole'), ('SW', 'Semi Wide'), ('RB', 'Round Button Down'), ('SP', 'Short Point'), ('SS', 'Stand'), ('WS', 'Wide Spread')], default='RR', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='InnerCuff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inner', models.ImageField(upload_to='inner_cuffs/', verbose_name='Inner Cuff')),
                ('inner_opened', models.ImageField(upload_to='inner_cuffs_opened/', verbose_name='Inner Cuff Opened')),
                ('catagory', models.CharField(choices=[('AA', 'Angle'), ('BA', 'Big Angle'), ('BR', 'Big Round'), ('FR', 'French'), ('RR', 'Round'), ('SQ', 'Square')], default='RR', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='InnerPlacket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inner_placket', models.ImageField(upload_to='inner_plackets/', verbose_name='Inner Placket')),
            ],
        ),
        migrations.CreateModel(
            name='OuterCuff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('outer_top', models.ImageField(upload_to='outer_top_cuffs/', verbose_name='Outer Top Cuff')),
                ('outer_top_opened', models.ImageField(upload_to='outer_top_opened_cuffs/', verbose_name='Outer Top Opened Cuff')),
                ('outer_bottom', models.ImageField(upload_to='outer_bottom_cuffs/', verbose_name='Outer Bottom Cuff')),
                ('catagory', models.CharField(choices=[('AA', 'Angle'), ('BA', 'Big Angle'), ('BR', 'Big Round'), ('FR', 'French'), ('RR', 'Round'), ('SQ', 'Square')], default='RR', max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='OuterPlacket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('outer_placket', models.ImageField(upload_to='outer_plackets/', verbose_name='Outer Placket')),
                ('opened', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Yoke',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('yoke_bottom', models.ImageField(upload_to='neck_bottoms/', verbose_name='Bottom Yoke')),
                ('yoke_top', models.ImageField(upload_to='neck_tops/', verbose_name='Top Yoke')),
                ('opened', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='collar',
            name='pattern',
        ),
        migrations.RemoveField(
            model_name='cuff',
            name='pattern',
        ),
        migrations.AlterModelOptions(
            name='base',
            options={},
        ),
        migrations.AlterModelOptions(
            name='pattern',
            options={},
        ),
        migrations.RemoveField(
            model_name='base',
            name='l_collar_base',
        ),
        migrations.RemoveField(
            model_name='base',
            name='placket',
        ),
        migrations.RemoveField(
            model_name='base',
            name='r_collar_base',
        ),
        migrations.RemoveField(
            model_name='base',
            name='yoke_bottom',
        ),
        migrations.RemoveField(
            model_name='base',
            name='yoke_top',
        ),
        migrations.AlterField(
            model_name='outercollar',
            name='catagory',
            field=models.CharField(choices=[('RR', 'Regular'), ('BR', 'Big Round'), ('CA', 'Cut Away'), ('DB', 'Dual Button'), ('PH', 'Pin Hole'), ('SW', 'Semi Wide'), ('RB', 'Round Button Down'), ('SP', 'Short Point'), ('SS', 'Stand'), ('WS', 'Wide Spread')], default='RR', max_length=2),
        ),
        migrations.DeleteModel(
            name='Collar',
        ),
        migrations.DeleteModel(
            name='Cuff',
        ),
        migrations.AddField(
            model_name='yoke',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='yoke', to='shirts.Pattern'),
        ),
        migrations.AddField(
            model_name='outerplacket',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='outer_placket', to='shirts.Pattern'),
        ),
        migrations.AddField(
            model_name='outercuff',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='outer_cuff', to='shirts.Pattern'),
        ),
        migrations.AddField(
            model_name='innerplacket',
            name='pattern',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='shirts.Pattern'),
        ),
        migrations.AddField(
            model_name='innercuff',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='inner_cuff', to='shirts.Pattern'),
        ),
        migrations.AddField(
            model_name='innercollar',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='collar', to='shirts.Pattern'),
        ),
    ]
