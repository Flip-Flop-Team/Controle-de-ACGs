from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.viewsets import ModelViewSet
from app.api.serializers import CursoSerializer
from app.models import Curso


class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer

class CursoViewSet(ModelViewSet):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()
    pagination_class = None
    
    def get_permissions(self):
        class Permission:
            def has_permission(self, a):
                return True
            def has_object_permission(self, a, b):
                return True
        return (Permission,)
