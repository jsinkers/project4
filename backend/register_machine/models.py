from django.db import models
from django.contrib.auth.models import User
#from django.contrib.postgres.fields import JSONField

'''
class RMProblem(models.Model):
    """ register machine problems for users to solve """
    statement = models.TextField()
    hint = models.TextField()
    init_rm_steps = JSONField()
    tests = JSONField()


class UserRMProbSoln(models.Model):
    """ users' individual solutions to a register machine problem """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rm_steps = JSONField()
    solved = models.BooleanField(default=False)


class RMPlayground(models.Model):
    """ users' register machine playground saved programs """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    notes = models.TextField()
    rm_steps = JSONField()
'''
