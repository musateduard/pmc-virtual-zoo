import os

from django.core.wsgi import get_wsgi_application
from django.core.handlers.wsgi import WSGIHandler

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main.settings.production')

application: WSGIHandler = get_wsgi_application()
