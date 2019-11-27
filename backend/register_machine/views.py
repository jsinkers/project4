from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    data = {
        'test': 1,
        'testing': 2,
        'reallyTesting': 3,
    }
    return JsonResponse(data)


def challenge(request, challenge_id):
    data = {
        'challenge_id': challenge_id
    }
    return JsonResponse(data)
