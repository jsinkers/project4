from django.urls import path

from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('api/challenge/<int:challenge_id>', views.challenge, name='challenge')
]
