from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    title = models.CharField(max_length=40, null=True, blank=True)
    company = models.ForeignKey(Company, related_name='has_employees', on_delete=models.CASCADE, null=True, blank=True)
    department = models.ForeignKey(Department, related_name='has_employees', on_delete=models.CASCADE, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    reports_to = models.CharField(max_length=40, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Company(models.Model):
    name = models.CharField(max_length=40)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Department(models.Model):
    name = models.CharField(max_length=40)
    company = models.ForeignKey(Company, related_name='has_departments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Role(models.Model):
    title = models.CharField(max_length=40)
    description = models.TextField()
    department = models.ForeignKey(Department, related_name='has_roles', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Candidate(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    role = models.ForeignKey(Role, related_name="candidates_for", on_delete=models.CASCADE)
    interviews_had = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
# Create your models here.
