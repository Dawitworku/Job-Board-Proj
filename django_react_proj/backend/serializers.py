from rest_framework import serializers
from.models import *

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    class Meta:
        model = Department
        fields = ('id', 'name', 'company')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    class Meta:
        model = Company
        fields = ('id','name', 'phone', 'city')

class RoleSerializer(serializers.HyperlinkedModelSerializer):
    # tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    # def roleObject(self, request, id=None):
    #     Role.objects.get(id=id)
    class Meta:
        model = Role
        fields = ('id','title', 'description', 'department')

class CandidateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id', 'first_name', 'last_name', 'email', 'role', 'interviews_had')
