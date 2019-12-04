from django.contrib import admin
from .models import Challenge, User, UserSolution, UserProgram

# Register your models here.
admin.register(Challenge)
admin.register(User)
admin.register(UserSolution)
admin.register(UserProgram)
