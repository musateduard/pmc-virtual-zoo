# django imports
from django.urls import URLResolver, path, include
from rest_framework.routers import DefaultRouter

# viewsets
from .views import TestViewSet

# types
from typing import List


router: DefaultRouter = DefaultRouter(trailing_slash=True)
router.register(r"", TestViewSet, basename="base name")

urlpatterns: List[URLResolver] = [path(r"", include(router.urls))]
