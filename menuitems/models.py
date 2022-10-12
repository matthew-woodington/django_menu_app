from unicodedata import decimal
from django.db import models

# Create your models here.


class MenuItem(models.Model):
    name = models.CharField(max_length=225)
    description = models.CharField(max_length=225)
    price = models.FloatField(null=True)
    type = models.CharField(max_length=255)
    image = models.ImageField(upload_to="menuitems", null=True)

    def __str__(self):
        return self.name
