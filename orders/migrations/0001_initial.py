# Generated by Django 4.1.2 on 2022-10-12 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=255)),
                ('order', models.JSONField(null=True)),
            ],
        ),
    ]
