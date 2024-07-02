# inventory/urls.py
from .views import register_user,get_user_info,login_user,delete_user
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet,ProductListCreate, ProductDetail
from .views import ProductViewSet, CategoryList, CategoryDetail,ProductListCreate, ProductDetail,StorageDetailView
from django.conf import settings
from django.conf.urls.static import static
from .views import OrderListCreateView, OrderDetailView
# from .views import AdminRegistrationAPIView, AdminLoginAPIView
urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('users/', get_user_info, name='get_user_info'),
    path('user/delete/<uuid:user_id>/', delete_user, name='delete-user'),
    path('login/', login_user, name='login_user'),
    path('products/', ProductListCreate.as_view(), name='product-list'),
    path('products/<uuid:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<uuid:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('orders/', OrderListCreateView.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('storage/', StorageDetailView.as_view(), name='storage-detail'),
    # path('admin/register/', AdminRegistrationAPIView.as_view(), name='admin-register'),
    # path('admin/login/', AdminLoginAPIView.as_view(), name='admin-login'),
       
]




if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



