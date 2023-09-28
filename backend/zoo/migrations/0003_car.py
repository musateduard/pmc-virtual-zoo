# Generated by Django 4.2.5 on 2023-09-28 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zoo', '0002_delete_car'),
    ]

    operations = [
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
    ]