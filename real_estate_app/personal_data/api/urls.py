from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import DataApiView, PersonalDataCreateApiView, PersonalDataShortCreateApiView, TestCSRFView

router = DefaultRouter()

router.register(r'personal_data', DataApiView, basename='personal_data')
router.register(r'personal_data_full_create', PersonalDataCreateApiView, basename='personal_data_full_create')
router.register(r'personal_data_short_create', PersonalDataShortCreateApiView, basename='personal_data_short_create')

urlpatterns = [
    path('get-csrf-token/', TestCSRFView.get_csrf_token, name='get-csrf-token'),
    path('', include(router.urls))
]