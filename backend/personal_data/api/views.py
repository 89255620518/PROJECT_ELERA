from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import viewsets
from rest_framework.views import APIView

from .serializers import PersonalDataSerializer, PersonalFullDataCreateSerializer, PersonalShortDataCreateSerializer
from ..models import PersonalData


class TestCSRFView(APIView):

    def get_csrf_token(request):
        referrer = request.META.get('HTTP_X_GET_TOKEN_CSRF_FOR_REACT')
        if not referrer or 'siyed9gp8qh934' != referrer:
            return JsonResponse({'error': 'Access denied'}, status=403)
        token = get_token(request)
        return JsonResponse({'csrfToken': token})

class DataApiView(viewsets.ModelViewSet):
    serializer_class = PersonalDataSerializer
    queryset = PersonalData.objects.all()
    http_method_names = ['get']


class PersonalDataCreateApiView(viewsets.ModelViewSet):
    serializer_class = PersonalFullDataCreateSerializer
    queryset = PersonalData.objects.all()
    http_method_names = ['get', 'post']


class PersonalDataShortCreateApiView(viewsets.ModelViewSet):
    serializer_class = PersonalShortDataCreateSerializer
    queryset = PersonalData.objects.all()
    http_method_names = ['get', 'post']
