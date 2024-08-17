from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import CustomUser
import json
from django.core.exceptions import ValidationError
from django.db import IntegrityError

import logging

logger = logging.getLogger(__name__)

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            
            # Check for required fields
            required_fields = ['username', 'full_name', 'email', 'phone_number', 'password', 'role']
            missing_fields = [field for field in required_fields if not data.get(field)]
            if missing_fields:
                return JsonResponse({
                    'error': f'Missing fields: {", ".join(missing_fields)}',
                    'status': 'required_fields_missing'
                }, status=400)
            
            user = CustomUser.objects.create(
                role=data['role'],
                username=data['username'],
                full_name=data['full_name'],
                email=data['email'],
                phone_number=data['phone_number'],
                password=make_password(data['password'])
            )
            user.save()  # This will generate a token due to the save method in the model

            return JsonResponse({
                'message': 'User created successfully!',
                'user': {
                    'role': user.role,
                    'username': user.username,
                    'email': user.email,
                    'full_name': user.full_name,
                    'token': user.token
                }
            }, status=201)
        except IntegrityError as e:
            logger.error("Integrity Error: %s", str(e))
            return JsonResponse({'error': str(e), 'status': 'integrity_error'}, status=401)
        except Exception as e:
            logger.error("Unexpected Error: %s", str(e))
            return JsonResponse({'error': str(e), 'status': 'unexpected_error'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method', 'status': 'method_not_allowed'}, status=405)
def get_user_info(request):
    users = CustomUser.objects.all()  # Fetches all users, consider filtering based on your needs
    data = list(users.values('id','role','username', 'email', 'full_name','phone_number'))  # Adjust the fields as per your model
    return JsonResponse({'users': data})






from django.contrib.auth import authenticate, get_user_model
from rest_framework.authtoken.models import Token  # Correct import

User = get_user_model()
@csrf_exempt

def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        identifier = data.get('identifier')  # User inputs either username or email here
        password = data.get('password')

        if not identifier or not password:
            return JsonResponse({'error': 'Both identifier and password are required.'}, status=400)

        user = authenticate(request, username=identifier, password=password)  # authenticate using custom backend
        if user:
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({
                    'message': 'Login successful',
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email,
                        'full_name': getattr(user, 'full_name', ''),
                        'role':user.role
                    },
                    'token': token.key
                }, status=200)
            else:
                return JsonResponse({'error': 'This account has been disabled'}, status=403)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)




from django.shortcuts import get_object_or_404

@csrf_exempt
def delete_user(request, user_id):
    if request.method == 'DELETE':
        user = get_object_or_404(CustomUser, pk=user_id)
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'}, status=200)
    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)







from rest_framework import generics, status

from .models import Product,Storage
from .serializers import ProductSerializer,StorageSerializer
from rest_framework.response import Response


class StorageDetailView(generics.RetrieveUpdateAPIView):
    queryset = Storage.objects.all()
    serializer_class = StorageSerializer
    # permission_classes = [IsAuthenticated]  # Assuming you are using token authentication

    def get_object(self):
        # Ensures only one storage instance is used and created if none exist with default values
        storage, created = Storage.objects.get_or_create(
            defaults={'sugar': 1000, 'chocolate': 1000, 'coffee': 1000, 'flour': 1000}
        )
        return storage

class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
   

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        except IntegrityError:
            return Response({'error': 'A product with this name already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    
from rest_framework import generics, status, viewsets, filters
from rest_framework.response import Response
from .models import Category, Product, Order
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny

from rest_framework.pagination import PageNumberPagination

class ProductPagination(PageNumberPagination):
    page_size_query_param = 'limit'
class ProductListCreate(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        except IntegrityError:
            return Response({'error': 'A product with this name already exists.'}, status=status.HTTP_400_BAD_REQUEST)

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category__name']




class CategoryList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class OrderListCreateView(generics.ListCreateAPIView):
    
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def put(self, request, *args, **kwargs):
        response = super().put(request, *args, **kwargs)
        if response.status_code == 200:
            order = self.get_object()
            order.update_price()
        return response

    def patch(self, request, *args, **kwargs):
        response = super().patch(request, *args, **kwargs)
        if response.status_code == 200:
            order = self.get_object()
            order.update_price()
        return response

    def delete(self, request, *args, **kwargs):
        order = self.get_object()
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





