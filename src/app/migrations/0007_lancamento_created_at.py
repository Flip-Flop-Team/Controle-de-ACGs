# Generated by Django 3.1.3 on 2020-11-26 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_curso_curriculos'),
    ]

    operations = [
        migrations.AddField(
            model_name='lancamento',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
