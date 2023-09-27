# django imports
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# viewsets
from .views import TestViewSet


router = DefaultRouter(trailing_slash=True)
router.register(r"", TestViewSet, basename="base name")

urlpatterns = [path(r"", include(router.urls))]
