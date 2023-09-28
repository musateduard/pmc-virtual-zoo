# Generated by Django 4.2.5 on 2023-09-28 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('weight', models.IntegerField()),
                ('superpower', models.CharField(max_length=255)),
                ('extinct_since', models.CharField(default='unknown', max_length=255)),
            ],
            options={
                'db_table': 'animal',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'car',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_char', models.CharField(max_length=255)),
                ('test_int', models.IntegerField()),
                ('test_bool', models.BooleanField(default=False)),
                ('test_date', models.DateField(auto_now=True)),
                ('new_field', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'test',
                'managed': True,
            },
        ),
    ]
