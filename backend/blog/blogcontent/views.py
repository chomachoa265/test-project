from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Post, Author
import json
from blog.settings import MEDIA_ROOT
from PIL import Image
import os
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt, csrf_protect
from django.utils.decorators import method_decorator
from django.core.files import File
from django.core.files.base import ContentFile
import uuid
# Create your views here.

@ensure_csrf_cookie
def allpostAPI(request):
    print(request.META)
    posts=  Post.objects.all()
    data = []
    for post in posts:
        response = {}
        response['title'] = post.title
        response['author_name'] = post.author.name
        response['abstract'] = post.abstract
        data.append(response)
    return  HttpResponse(json.dumps(data), content_type="application/json")


def getImage(request, url):
    image_data = open(os.path.join(MEDIA_ROOT, url),"rb").read()
    content_type = None
    s = url.split(".")[-1]
    print(s)
    if s == 'svg':
        content_type = "image/svg+xml"
    elif s == 'png':
        content_type = "image/"+s
    elif s == 'jpg' or 'jpeg':
        content_type = "image/"+s
    print(content_type)
    if content_type:
        return HttpResponse(image_data, content_type=content_type)
    else:
        # error
        pass



@ensure_csrf_cookie
def uploadData(request):
    print(request.COOKIES)
    files = request.FILES['file']
    image = File(files)
    author = Author.objects.get(pk=1)
    post = Post(title=request.POST['title'], author=author , abstract=request.POST['abstract'], content=json.dumps(request.POST['content']))
    post.image.save("{0}.png".format(uuid.uuid4()), image)
    post.save()
    return HttpResponse()


def postAPI(request, pk):
    post = Post.objects.get(pk=pk)
    response = {}
    response['title']= post.title
    response['author_image'] = post.author.image.url
    response['cover_imageurl'] = post.image.url
    response['author_name' ]= post.author.name
    response['abstract'] = post.abstract
    response['content'] = json.loads(post.content)
    print(json.dumps(response))


    return HttpResponse(json.dumps(response), content_type="application/json")