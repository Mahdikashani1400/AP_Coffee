# Generated by Django 5.0.6 on 2024-07-03 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0012_remove_category_sales'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='sales',
            field=models.JSONField(default=dict),
        ),
    ]
