# Generated by Django 2.1 on 2019-03-17 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shirts', '0018_auto_20190317_1854'),
    ]

    operations = [
        migrations.CreateModel(
            name='Background',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('background', models.ImageField(upload_to='bg_shirt_base/', verbose_name='Background Shirt Base')),
            ],
        ),
    ]
