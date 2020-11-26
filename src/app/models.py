from django.db import models
from django.contrib.auth.models import User


class Professor(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    nome = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)

    class Meta:
        db_table = 'tbl_professores'

class Aluno(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    nome = models.CharField(max_length=100)
    matricula = models.CharField(max_length=100)
    curso = models.ForeignKey('Curso', models.DO_NOTHING)
    curriculo = models.ForeignKey('Curriculo', models.DO_NOTHING, null=True, blank=True)

    class Meta:
        db_table = 'tbl_alunos'

class Atividade(models.Model):
    limite_hora = models.IntegerField()
    nome = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'tbl_atividades'

class Curriculo(models.Model):
    carga_horaria = models.IntegerField()
    codigo = models.CharField(max_length=100)
    cursos = models.ManyToManyField('Curso')
    
    class Meta:
        db_table = 'tbl_curriculos'

class Curso(models.Model):
    nome = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)
    curriculos = models.ManyToManyField('Curriculo', through=Curriculo.cursos.through, blank=True)
    
    class Meta:
        db_table = 'tbl_cursos'

class Lancamento(models.Model):
    aprovado = models.BooleanField(null=True, blank=True)
    data_inicio = models.DateField()
    data_fim = models.DateField()
    arquivo = models.CharField(max_length=100)
    carga_horaria_real = models.IntegerField()
    carga_horaria_acg = models.IntegerField()
    descricao = models.CharField(max_length=500)
    aluno = models.ForeignKey('Aluno', models.DO_NOTHING)
    regra = models.ForeignKey('Regra', models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    comentario = models.CharField(max_length=500, null=True, blank=True)
    
    class Meta:
        db_table = 'tbl_lancamentos'

class ProfessorCurso(models.Model):
    professor = models.ForeignKey('Professor', models.DO_NOTHING)
    curso = models.ForeignKey('Curso', models.DO_NOTHING)
    
    class Meta:
        db_table = 'tbl_cursos_professores'

class Regra(models.Model):
    ehHora = models.BooleanField()
    limite_hora_lancamento = models.IntegerField()
    hora_acg = models.IntegerField()
    hora_praticada = models.IntegerField()
    descricao = models.CharField(max_length=500)
    atividade = models.ForeignKey('Atividade', models.DO_NOTHING)
    curriculo = models.ForeignKey('Curriculo', models.DO_NOTHING)
    nome = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'tbl_regras'