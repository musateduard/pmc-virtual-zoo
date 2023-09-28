# rest imports
from rest_framework.serializers import ModelSerializer

# models
from .models import Test
from .models import Animal

# types
from typing import Dict, List


class TestSerializer(ModelSerializer):

    class Meta:
        model: type = Test
        fields: List[str] = ["test_char", "test_int", "test_bool"]
        extra_kwargs = {}


class AnimalSerializer(ModelSerializer):

    class Meta:
        model: type = Animal
        fields: List[str] = ["name", "weight", "superpower", "extinct_since"]
        extra_kwargs: Dict[str, str] = {}
