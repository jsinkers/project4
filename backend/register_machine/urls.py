from django.urls import path
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('api/challenge/<int:challenge_id>', views.challenge, name='challenge'),
    path('api/progress/', views.challenge_list),
    path("health/", views.health_check, name="health_check"),
]

urlpatterns = format_suffix_patterns(urlpatterns)