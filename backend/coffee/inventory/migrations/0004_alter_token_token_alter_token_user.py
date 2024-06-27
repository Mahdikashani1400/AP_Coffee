# Generated by Django 5.0.6 on 2024-06-26 10:33

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0003_customuser_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='token',
            field=models.CharField(editable=False, max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='token',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='custom_auth_token', to=settings.AUTH_USER_MODEL),
        ),
    ]