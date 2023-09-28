# viewsets
from .views import TestViewSet, AnimalViewSet

# types
from typing import List
from django.urls import URLResolver
from rest_framework.routers import DefaultRouter


router: DefaultRouter = DefaultRouter(trailing_slash=True)

router.register(r"test", TestViewSet)
router.register(r"animal", AnimalViewSet)

urlpatterns: List[URLResolver] = router.urls
