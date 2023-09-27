# rest imports
from rest_framework.serializers import ModelSerializer

# models
from .models import TestModel

# types
from typing import Dict, List


class TestSerializer(ModelSerializer):

    model: type = TestModel
    fields: List[str] = ["test_char", "test_int", "test_bool"]
    extra_kwargs: Dict[str, str] = {}
