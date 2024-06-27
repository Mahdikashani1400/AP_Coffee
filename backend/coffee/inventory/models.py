from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
import secrets
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, full_name, phone_number, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')

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
    username = models.CharField(max_length=255, unique=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.IntegerField()  # Consider changing to models.CharField if you need to store international numbers or leading zeros
    password = models.CharField(max_length=255)
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
import uuid

class Token(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='custom_auth_token'  # Unique related_name
    )
    token = models.CharField(max_length=100, editable=False, unique=True)

    


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
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
