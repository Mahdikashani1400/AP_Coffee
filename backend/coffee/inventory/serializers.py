from rest_framework import serializers
from .models import Product, Category
from .models import Order, OrderProduct



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    category = CategorySerializer(read_only=True)

    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )

    class Meta:
        model = Product
        fields = '__all__'


    def get_image_url(self, obj):
        if obj.image and hasattr(obj.image, 'url'):
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None    
    

from .models import Storage

class StorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Storage
        fields = '__all__'

class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ['product', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'created_at', 'price', 'products']

    def create(self, validated_data):
        products_data = validated_data.pop('products')
        order = Order.objects.create(**validated_data)
        for product_data in products_data:
            OrderProduct.objects.create(order=order, **product_data)
        return order  
    






# from rest_framework import serializers
# from django.contrib.auth import get_user_model

# # Assuming Admin is the custom user model you have defined
# Admin = get_user_model()

# class AdminSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Admin
#         fields = ('email', 'username', 'password')
#         extra_kwargs = {
#             'password': {'write_only': True}
#         }

#     def create(self, validated_data):
#         # Create a new admin user instance using the create_user method
#         return Admin.objects.create_user(**validated_data)

#     def update(self, instance, validated_data):
#         # Update admin user instance
#         instance.email = validated_data.get('email', instance.email)
#         instance.username = validated_data.get('username', instance.username)
#         password = validated_data.get('password', None)
#         if password:
#             instance.set_password(password)
#         instance.save()
#         return instance
