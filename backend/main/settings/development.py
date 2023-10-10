import os
from .common import *


DEBUG = True

ALLOWED_HOSTS = [
    "localhost",
    "pmc-backend",
    "host.docker.internal",
]

CORS_ALLOW_ALL_ORIGINS = True

DATABASES = {
    'default': {
        "ENGINE": "django.db.backends.postgresql",
        "OPTIONS": {
            "service": "pmc_zoo_host",
            "passfile": f"{os.environ['HOME']}/.pgpass"
        }
    }
}
