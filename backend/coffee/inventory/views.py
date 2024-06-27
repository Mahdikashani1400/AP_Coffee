from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import CustomUser
import json
from django.core.exceptions import ValidationError
from django.db import IntegrityError

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user = CustomUser.objects.create(
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
                    'username': user.username,
                    'email': user.email,
                    'full_name': user.full_name,
                    'token': user.token
                }
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)


def get_user_info(request):
    users = CustomUser.objects.all()  # Fetches all users, consider filtering based on your needs
    data = list(users.values('username', 'email', 'full_name','phone_number'))  # Adjust the fields as per your model
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

        # Try to authenticate the user with either username or email
        user = authenticate(username=identifier, password=password)
        if user is not None:
            if user.is_active:
                # Retrieve or create a token for the authenticated user using DRF's Token model
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({
                    'message': 'Login successful',
                    'user': {
                        'username': user.username,
                        'email': user.email,
                        'full_name': getattr(user, 'full_name', ''),  # Use getattr for safety
                    },
                    'token': token.key  # Return the token key
                }, status=200)
            else:
                return JsonResponse({'error': 'This account has been disabled'}, status=403)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid HTTP method'}, status=405)









from rest_framework import generics, status

from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self, request, *args, **kwargs):
        try:
            return super().post(request, *args, **kwargs)
        except IntegrityError:
            return Response({'error': 'A product with this name already exists.'},
                            status=status.HTTP_400_BAD_REQUEST)

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


from rest_framework import viewsets, filters
from .models import Product
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category__name']


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


from .models import Category
from .serializers import CategorySerializer
from rest_framework import generics

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


