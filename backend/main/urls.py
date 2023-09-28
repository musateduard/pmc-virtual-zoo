from django.contrib import admin
from django.urls import URLResolver, include, path

# types
from typing import List


urlpatterns: List[URLResolver] = [
    path('admin/', admin.site.urls),
    path("", include("zoo.urls"))]
