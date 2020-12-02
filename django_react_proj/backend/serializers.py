from rest_framework import serializers
from.models import *

class CompanySerializer(serializers.ModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    class Meta:
        model = Company
        fields = ('id','name', 'phone', 'city')

class DepartmentSerializer(serializers.ModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    company = CompanySerializer()

    class Meta:
        model = Department
        fields = ('id', 'name', 'company')

class RoleSerializer(serializers.ModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    # def roleObject(self, request, id=None):
    #     Role.objects.get(id=id)
    # department = DepartmentObjectSerializer()
    department = DepartmentSerializer()
    
    class Meta:
        model = Role
        fields = ("id","title", "description", "department")


class CandidateSerializer(serializers.HyperlinkedModelSerializer):
    role = RoleSerializer()
    
    class Meta:
        model = Candidate
        fields = ('id', 'first_name', 'last_name', 'email', 'role', 'interviews_had')

# class CompanyObjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Company
#         fields = ('id', 'name', 'phone', 'city')

# class RoleObjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Role
#         fields = ('id', 'title', 'description', 'department')

# class DepartmentObjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Department
#         fields = ('id', 'name', 'company')