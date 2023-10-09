from typing import Any
from django.db.models import QuerySet
from rest_framework.viewsets import ModelViewSet
from rest_framework.request import Request

# models
from .models import Test
from .models import Animal

# serializers
from .serializers import TestSerializer
from .serializers import AnimalSerializer


class TestViewSet(ModelViewSet):

    serializer_class: type = TestSerializer
    queryset: QuerySet[Test] = Test.objects.all()


class AnimalViewSet(ModelViewSet):

    serializer_class: type = AnimalSerializer
    queryset: QuerySet[Animal] = Animal.objects.all().order_by("id")


    def create(self, request: Request, *args: Any, **kwargs: Any):
        return super().create(request, *args, **kwargs)
