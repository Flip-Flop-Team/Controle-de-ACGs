from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # The default result (access/refresh tokens)
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        if hasattr(self.user, 'aluno'):
            data.update({'tipo': 'aluno'})
        elif hasattr(self.user, 'professor'):
            data.update({'tipo': 'professor'})
        else:
            data.update({'tipo': 'error'})
        # and everything else you want to send in the response
        return data