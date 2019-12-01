from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets


# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))

#def index(request):
#    data = {
#        'register_machine': "working"
#    }
#    return JsonResponse(data)


def challenge(request, challenge_id):
    data = {
        'problem': {"title": 'Example: Add',
                    "statement": "`<p>In this example, we have a program that performs addition on the numbers in register 1 and register 2, storing the result in register 2.</p>" +
                                 "<p>Check out the values in Register 1 and Register 2.  What result do you expect?</p>" +
                                 "<p>When you're ready, click Run.</p>`"
                    },
        'program': [{"id": 1, "instruction": 'deb', "register": 1, "goTo": 2, "branchTo": 3, "editable": False,
                     "editMode": False},
                    {"id": 2, "instruction": 'inc', "register": 2, "goTo": 1, "branchTo": None, "editable": False,
                     "editMode": False},
                    {"id": 3, "instruction": 'end', "register": None, "goTo": None, "branchTo": None, "editable": True,
                     "editMode": False}],
        'tests': [{'id': 1,
                   'description': '5+7=12',
                   'status': None,
                   'initRegVals': [{'id': 1, 'value': 5}, {'id': 2, 'value': 7}],
                   'expectedRegVals': [{'id': 2, 'value': 12}],
                   'actualRegVals': [{'id': 2, 'value': None}]},
                  {'id': 2,
                   'description': '10+3=13',
                   'status': None,
                   'initRegVals': [{'id': 1, 'value': 10}, {'id': 2, 'value': 3}],
                   'expectedRegVals': [{'id': 2, 'value': 13}],
                   'actualRegVals': [{'id': 2, 'value': None}]}],
        'registers': [{'id': 1, 'value': 5},
                      {'id': 2, 'value': 7},
                      {'id': 3, 'value': 0},
                      {'id': 4, 'value': 0}],
    }
    return JsonResponse(data)
