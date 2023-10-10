from .common import *


DEBUG = False

ALLOWED_HOSTS = [
    "localhost",
    "backend.local",
]

DATABASES = {
    'default': {
        "ENGINE": "django.db.backends.postgresql",
        "OPTIONS": {
            "service": "pmc_zoo_docker",
            "passfile": "/run/secrets/.pgpass"
        }
    }
}
