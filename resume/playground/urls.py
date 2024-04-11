from django.urls import path

from . import views

#URLConf
urlpatterns = [
    path('base/', views.load_base)
]