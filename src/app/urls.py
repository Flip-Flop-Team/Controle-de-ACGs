from django.urls import path, include
from rest_framework.routers import DefaultRouter
from controle_acg.utils import genericViewSet
from .models import *
from app import views

router = DefaultRouter()

router.register('professor', genericViewSet(Professor))
router.register('aluno', genericViewSet(Aluno))
router.register('atividade', genericViewSet(Atividade))
router.register('curriculo', genericViewSet(Curriculo))
router.register('curso', genericViewSet(Curso))
router.register('curso-curriculo', genericViewSet(CursoCurriculo))
router.register('lancamento', genericViewSet(Lancamento))
router.register('professor-curso', genericViewSet(ProfessorCurso))
router.register('regra', genericViewSet(Regra))

urlpatterns = [
    path('register-user/', views.registerUser, name='register_user'),
]

urlpatterns += router.urls
