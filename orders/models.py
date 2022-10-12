from django.db import models


class Order(models.Model):
    customer = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    order = models.JSONField(null=True)

    def __str__(self):
        return self.customer
