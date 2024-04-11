from django.urls import path
from . import views
from .views import user_signup, user_login
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('restaurants/', views.RestaurantList.as_view(), name='restaurant-list'),
    path('restaurants/<int:pk>', views.RestaurantDetail.as_view(), name='restaurant_detail'),
    path('menuitems/', views.MenuItemList.as_view(), name="menuitem_list"),
    path('menuitems/<int:pk>', views.MenuItemDetail.as_view(), name="menuitem_detail"),  # Added missing comma here
    path('signup/', user_signup, name='signup'),
    path('login/', user_login, name='login'),
]

