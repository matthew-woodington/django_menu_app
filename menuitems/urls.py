from django.urls import path
from .views import MenuItemListApiView

# urlpatterns = [
#     path('menuitems/', MenuItemListApiView.as_view())
# ]

urlpatterns = [
    path('', MenuItemListApiView.as_view())
]
