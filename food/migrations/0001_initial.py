# Generated by Django 5.0.3 on 2024-04-03 02:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.TextField()),
                ('monday_open', models.TimeField(blank=True, null=True)),
                ('monday_close', models.TimeField(blank=True, null=True)),
                ('tuesday_open', models.TimeField(blank=True, null=True)),
                ('tuesday_close', models.TimeField(blank=True, null=True)),
                ('wednesday_open', models.TimeField(blank=True, null=True)),
                ('wednesday_close', models.TimeField(blank=True, null=True)),
                ('thursday_open', models.TimeField(blank=True, null=True)),
                ('thursday_close', models.TimeField(blank=True, null=True)),
                ('friday_open', models.TimeField(blank=True, null=True)),
                ('friday_close', models.TimeField(blank=True, null=True)),
                ('saturday_open', models.TimeField(blank=True, null=True)),
                ('saturday_close', models.TimeField(blank=True, null=True)),
                ('sunday_open', models.TimeField(blank=True, null=True)),
                ('sunday_close', models.TimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menu_items', to='food.restaurant')),
            ],
        ),
    ]
