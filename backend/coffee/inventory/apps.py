from django.apps import AppConfig


class InventoryConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'inventory'




class YourAppConfig(AppConfig):
    name = 'your_app'
    def ready(self):
        import inventory.signals  
