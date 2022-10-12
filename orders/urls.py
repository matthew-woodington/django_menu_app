from django.urls import path
from .views import OrderListApiView

# urlpatterns = [
#     path('orders/', OrderListApiView.as_view())
# ]

urlpatterns = [
    path('', OrderListApiView.as_view())
]
