from django.urls import path
from . import views


urlpatterns = [
    path('', views.allpostAPI, name='allpostAPI' ),
    path('<int:pk>' ,views.postAPI, name="postAPI"),
    path('images/<str:url>' , views.getImage, name="imageAPI"),
    path('upload', views.uploadData, name="uploadAPI"),
]
