from rest_framework import serializers

from .models import Challenge


class ChallengeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Challenge
        fields = ['title', 'statement', 'program', 'registers', 'tests', 'hint']


class ChallengeListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Challenge
        fields = ['id', 'title']
