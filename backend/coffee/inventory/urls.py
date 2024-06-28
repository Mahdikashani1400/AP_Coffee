# inventory/urls.py
from .views import register_user,get_user_info,login_user
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet,ProductListCreate, ProductDetail
from .views import ProductViewSet, CategoryList, CategoryDetail,ProductListCreate, ProductDetail
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('users/', get_user_info, name='get_user_info'),
    path('login/', login_user, name='login_user'),
    path('products/', ProductListCreate.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



