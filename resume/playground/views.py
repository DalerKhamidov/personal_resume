from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def say_hello(request):
    return Response({'message': 'Hello, world!'})