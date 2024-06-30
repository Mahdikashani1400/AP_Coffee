# signals.py

from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.apps import AppConfig
from .models import Storage

class InventoryConfig(AppConfig):

    def ready(self):
        from . import signals

@receiver(post_migrate)
def create_default_storage(sender, **kwargs):
    if not Storage.objects.exists():
        Storage.objects.create(sugar=1000, chocolate=1000, coffee=1000, flour=1000)
