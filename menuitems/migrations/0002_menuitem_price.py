# Generated by Django 4.1.2 on 2022-10-11 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuitem',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=5, null=True),
        ),
    ]