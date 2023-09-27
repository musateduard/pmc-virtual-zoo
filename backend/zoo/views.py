# django imports
from django.db.models import QuerySet

# rest framework imports
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

# models
from .models import TestModel

# serializers
from .serializers import TestSerializer

# types
from typing import List


class TestViewSet(ModelViewSet):

    serializer_class: type = TestSerializer
    allowed_methods: List[str] = ["GET"]


    def get_queryset(self):
        """method that returns query set"""
        return TestModel.objects.all()


    def list(self, request, *args, **kwargs):
        """get method for all table entries"""

        queryset: QuerySet = self.get_queryset()
        serializer: TestSerializer = TestSerializer(queryset, many=True)

        return Response(serializer.data)
