# Generated by Django 4.2.8 on 2024-04-19 10:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Статус',
                'verbose_name_plural': 'Статусы',
                'db_table': 'status',
            },
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Название')),
                ('result', models.DecimalField(blank=True, decimal_places=2, max_digits=3, null=True, verbose_name='Оригинальность')),
                ('time_created', models.DateTimeField(auto_now_add=True, verbose_name='Дата и время загрузки документа')),
                ('data', models.FileField(upload_to='data_pdf', verbose_name='документ')),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='documents.status')),
            ],
            options={
                'verbose_name': 'Документ',
                'verbose_name_plural': 'Документы',
                'db_table': 'Document',
            },
        ),
    ]
