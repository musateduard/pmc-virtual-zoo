from django.db.models import QuerySet
from rest_framework.viewsets import ModelViewSet

# models
from .models import Test
from .models import Animal

# serializers
from .serializers import TestSerializer
from .serializers import AnimalSerializer


class TestViewSet(ModelViewSet):

    serializer_class: type = TestSerializer
    queryset: QuerySet = Test.objects.all()


class AnimalViewSet(ModelViewSet):

    serializer_class: type = AnimalSerializer
    queryset: QuerySet = Animal.objects.all()
