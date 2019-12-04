from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField


class Challenge(models.Model):
    """ register machine problems for users to solve """
    title = models.CharField(max_length=30)
    statement = models.TextField()
    program = JSONField()
    registers = JSONField()
    tests = JSONField()
    hint = models.TextField()


class UserProgram(models.Model):
    """ users' register machine playground saved programs """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    updated = models.DateTimeField()
    title = models.CharField(max_length=30)
    notes = models.TextField()
    program = JSONField()


class UserSolution(models.Model):
    """ users' individual solutions to a register machine problem """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    program = JSONField()
    updated = models.DateTimeField()
    solved = models.BooleanField()
