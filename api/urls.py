from django.urls import include, path

# urlpatterns = [
#     path('', include('menuitems.urls')),
# ]

urlpatterns = [
    path('menuitems/', include('menuitems.urls')),
    path('orders/', include('orders.urls'))
]
