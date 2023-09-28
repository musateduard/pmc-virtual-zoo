# rest imports
from rest_framework.serializers import ModelSerializer

# models
from .models import Test
from .models import Animal

# types
from typing import Dict


class TestSerializer(ModelSerializer):

    class Meta:
        model: type = Test
        fields: str = "__all__"
        extra_kwargs: Dict[str, str] = {}


class AnimalSerializer(ModelSerializer):

    class Meta:
        model: type = Animal
        fields: str = "__all__"
        extra_kwargs: Dict[str, str] = {}
