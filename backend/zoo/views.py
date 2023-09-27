from typing import List
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response


class TestViweSet(ModelViewSet):

    allowed_methods: List[str] = ["GET"]
