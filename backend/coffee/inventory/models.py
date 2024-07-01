from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
import secrets
import uuid

from django.db import IntegrityError
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, full_name, phone_number, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')
        if CustomUser.objects.filter(email=self.normalize_email(email)).exists():
            raise IntegrityError('A user with that email already exists.')
        if CustomUser.objects.filter(username=username).exists():
            raise IntegrityError('A user with that username already exists.')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            full_name=full_name,
            phone_number=phone_number,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, full_name, phone_number, password):
        user = self.create_user(
            email,
            password=password,
            username=username,
            full_name=full_name,
            phone_number=phone_number,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('USER', 'User'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)  
    username = models.CharField(max_length=255, unique=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.IntegerField()  # Consider changing to models.CharField if you need to store international numbers or leading zeros
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=5, choices=ROLE_CHOICES, default='USER')
    token = models.CharField(max_length=100, blank=True, editable=False)
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'full_name', 'phone_number']
   

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = secrets.token_urlsafe(48)
        super(CustomUser, self).save(*args, **kwargs)
    def __str__(self):
        return self.email









from django.conf import settings  # Use this to import settings

class Token(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='custom_auth_token'  # Unique related_name
    )
    token = models.CharField(max_length=100, editable=False, unique=True)

    
class Storage(models.Model):
    
    sugar = models.IntegerField(default=0)
    chocolate = models.IntegerField(default=0)
    coffee = models.IntegerField(default=0)
    flour = models.IntegerField(default=0)

    def __str__(self):
        return "Storage"

class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

from django.core.exceptions import ValidationError
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255,unique=True)
    sugar = models.IntegerField()
    chocolate = models.IntegerField()
    coffee = models.IntegerField()
    flour = models.IntegerField()
    vertical = models.BinaryField(max_length=10)
    price = models.IntegerField()
    image = models.ImageField(upload_to='product_images/')
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name
  




class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    # other fields...

    def update_price(self):
        total_price = sum(op.product.price * op.quantity for op in self.products.all())
        self.price = total_price
        self.save()

    def __str__(self):
        return f"Order {self.id} - Total: ${self.price}" 



class OrderProduct(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.ForeignKey(Order, related_name='products', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()


from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import OrderProduct, Order

@receiver([post_save, post_delete], sender=OrderProduct)
def update_order_price(sender, instance, **kwargs):
    instance.order.update_price()    