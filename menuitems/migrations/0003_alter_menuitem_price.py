# Generated by Django 4.1.2 on 2022-10-12 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0002_menuitem_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='price',
            field=models.FloatField(null=True),
        ),
    ]