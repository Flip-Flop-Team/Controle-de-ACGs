from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from app.models import Curso

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # The default result (access/refresh tokens)
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        if hasattr(self.user, 'aluno'):
            data.update({'tipo': 'aluno', 'id': self.user.id, 'aluno': self.user.aluno.id})
        elif hasattr(self.user, 'professor'):
            data.update({'tipo': 'professor', 'id': self.user.id, 'professor': self.user.professor.id})
        else:
            data.update({'tipo': 'error'})
        # and everything else you want to send in the response
        return data

class CursoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Curso
        fields = '__all__'