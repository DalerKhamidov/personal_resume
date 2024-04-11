from django.shortcuts import render
from django.http import HttpResponse

def load_base(request):
    return render(request, 'base.html')
