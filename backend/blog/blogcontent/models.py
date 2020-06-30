from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255, blank=False)
    image = models.FileField(upload_to="post/images/", blank=False, validators=[FileExtensionValidator([ 'svg'])])
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    abstract = models.TextField(blank=False)
    content = models.TextField(blank=False)
    pub_date = models.DateField(auto_now_add=True)
    # mod_date  = models.DateField()
    def __str__(self):
        return str({
            "title": self.title,
            "author":self.author,
            "cotent": self.content
        })


class Author(models.Model):
    image = models.FileField(upload_to="images/", default="'setting.MEDIA_ROOT/user.svg", validators=[FileExtensionValidator([ 'svg'])])
    name = models.CharField(max_length=255) 
    description = models.TextField() 

    def __str__(self):
        return self.name
    



class Comment(models.Model):
    content = models.TextField()

    def __str__(self):
        return self.content
    