from django.contrib import admin
from blogcontent.models import Post, Author
# Register your models here.

class PostInline(admin.TabularInline):
    model = Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display= ('pk', 'title', 'author','abstract', 'content', 'pub_date', 'image')
    list_filter = ('author',)
    fields= [
        'title',
        'abstract', 
        'author', 
        'content',
        'image',
        ]


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    inlines=[PostInline]
