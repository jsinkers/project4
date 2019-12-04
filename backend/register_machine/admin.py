from django.contrib import admin
from .models import Challenge, User, UserSolution, UserProgram

# Register your models here.
admin.site.register(Challenge)
admin.site.register(User)
admin.site.register(UserSolution)
admin.site.register(UserProgram)
