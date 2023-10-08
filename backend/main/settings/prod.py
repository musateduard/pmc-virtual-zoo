from .common import *


DEBUG = False

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
            "service": "pmc_zoo_docker",
            "passfile": "/run/secrets/.pgpass"
        }
    }
}
