# Generated by Django 3.0.7 on 2020-06-13 09:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogcontent', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='mod_date',
        ),
        migrations.RemoveField(
            model_name='post',
            name='pub_date',
        ),
    ]