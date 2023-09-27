from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash=True)

urlpatterns = [path(r"", include(router.urls))]
