from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets
from .serializers import ChallengeSerializer, ChallengeListSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Challenge


# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))


@api_view(['GET'])
def challenge(request, challenge_id):
    """ Return challenge data """
    if request.method == 'GET':
        challenge = Challenge.objects.get(id=challenge_id)
        serializer = ChallengeSerializer(challenge)
        return Response(serializer.data)


@api_view(['GET'])
def challenge_list(request):
    """ Return challenge list
    TODO: detailing user's completion of the task """
    if request.method == "GET":
        challenge_list = Challenge.objects.all().order_by("id")
        serializer = ChallengeListSerializer(challenge_list, many=True)
        return Response(serializer.data)

