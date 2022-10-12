from django.urls import path
from .views import OrderListCreateApiView

# urlpatterns = [
#     path('orders/', OrderListApiView.as_view())
# ]

urlpatterns = [
    path('', OrderListCreateApiView.as_view())
]
