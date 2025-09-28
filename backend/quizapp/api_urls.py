from django.urls import path
from . import api_views

urlpatterns = [
    path("questions/", api_views.question_list),
    path("questions/<int:pk>/", api_views.question_detail),
    path("questions/<int:pk>/submit/", api_views.submit_answer),
]