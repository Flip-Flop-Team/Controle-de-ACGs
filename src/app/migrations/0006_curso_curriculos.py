# Generated by Django 3.1.3 on 2020-11-26 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_remove_curso_curriculos'),
    ]

    operations = [
        migrations.AddField(
            model_name='curso',
            name='curriculos',
            field=models.ManyToManyField(blank=True, to='app.Curriculo'),
        ),
    ]
