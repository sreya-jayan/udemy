import requests
import json

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
import re
from django.contrib.auth import authenticate

from django.contrib.auth import get_user_model
User = get_user_model()


@api_view(["POST"])
@permission_classes([AllowAny])
def create(request):
    email = request.data.get('email')
    name = request.data.get('name')
    password = request.data.get('password')

    if not email or not name:
        return Response({
            "status_code": 6002,
              "message": "Email and name are required."
        }, status=400)

    if User.objects.filter(username=email).exists():
        return Response({
            "status_code": 6001, 
            "message": "This account already exists."
        })

    try:
        user = User.objects.create_user(
            username=email,
            email=email,
            first_name=name,
            password=password  
        )
        return Response({
            "status_code": 6000, 
            "message": "Account created successfully."
        })
    except:
        return Response({
            "status_code": 6003,
            "message": "Something went wrong. Please try again."
        }, status=500)


@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({
            "status_code": 6002,
            "message": "Email and password are required."
        }, status=400)

    user = authenticate(username=email, password=password)

    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            "status_code": 6000,
            "message": "Login successful.",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        })
    else:
        return Response({
            "status_code": 6001,
            "message": "Invalid credentials."
        }, status=401)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    return Response({
        "id": user.id,
        "email": user.email,
        "name": user.first_name,
    })