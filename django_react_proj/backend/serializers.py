from rest_framework import serializers
from.models import *

class DepartmentSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    class Meta:
        model = Department
        fields = ('id', 'name', 'company', 'tracks')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    class Meta:
        model = Company
        fields = ('name', 'phone', 'city', 'tracks')
