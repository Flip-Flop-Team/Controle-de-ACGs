from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
ALLOWED_HOSTS = ['*']

INSTALLED_APPS += []

MIDDLEWARE += []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'X1cQFAj9X5PG54p4zaPX',
        'HOST': '191.252.192.173',
        'PORT': '54321',
    }
}

STATIC_ROOT = 'https://statics.vp6.com.br/'
STATIC_URL = 'https://statics.vp6.com.br/'
