from rest_framework.decorators import api_view
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from app.models import Professor, Aluno, Curso
from rest_framework.decorators import authentication_classes, permission_classes


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def registerUser(request):
    print(request.body)
    body = json.loads(request.body)
    required_fields = ['email', 'password', 'type']
    professor_required_fields = ['nome', 'codigo']
    aluno_required_fields = ['nome', 'matricula', 'curso']

    # Verify fields sended
    if not set(required_fields).issubset(list(body.keys())):
        return JsonResponse({'error': True, 'message': 'Faltam campos no cadastro'}, json_dumps_params={'ensure_ascii': False})
    if body['type'] == 'professor':
        tipo = 'professor'
        if not set(professor_required_fields).issubset(list(body.keys())):
            return JsonResponse({'error': True, 'message': 'Faltam campos no cadastro'}, json_dumps_params={'ensure_ascii': False})
    elif body['type'] == 'aluno':
        tipo = 'aluno'
        if not set(aluno_required_fields).issubset(list(body.keys())):
            return JsonResponse({'error': True, 'message': 'Faltam campos no cadastro'}, json_dumps_params={'ensure_ascii': False})
    else:
        return JsonResponse({'error': True, 'message': 'Tipo inválido'}, json_dumps_params={'ensure_ascii': False})

    #User
    user = User(email=body['email'], username=body['email'])
    user.set_password(body['password'])
    user.save()

    try:
        # Professor
        if tipo == 'professor':
            professor = Professor(nome=body['nome'], user=user, codigo=body['codigo'])
            professor.save()
        
        # Aluno
        if tipo == 'aluno':
            try:
                curso = Curso.objects.get(pk=body['curso'])
            except Exception as err:
                user.delete()
                return JsonResponse({'error': True, 'message': 'Curso inválido'}, json_dumps_params={'ensure_ascii': False})
            aluno = Aluno(nome=body['nome'], user=user, matricula=body['matricula'], curso=curso)
            aluno.save()
    except Exception as err:
        user.delete()
        return JsonResponse({'error': True, 'message': str(err)})

    return JsonResponse({'error': False, 'message': 'Sucesso'}, json_dumps_params={'ensure_ascii': False})

