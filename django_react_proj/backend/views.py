from django.shortcuts import render, redirect, HttpResponse
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.

def index(request):
    return HttpResponse("Checking")
    # return render(request, "/frontend/client/src//index.js")

class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class CompanyView(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

class RoleView(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()

class CandidateView(viewsets.ModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()