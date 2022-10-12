from rest_framework import generics
from .models import Order
from .serializers import OrderSerializer


class OrderListCreateApiView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
