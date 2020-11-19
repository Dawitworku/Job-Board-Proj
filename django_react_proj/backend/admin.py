from django.contrib import admin
from .models import *

admin.site.register(Company)
admin.site.register(Department)
admin.site.register(User)
admin.site.register(Role)
admin.site.register(Candidate)

# Register your models here.
