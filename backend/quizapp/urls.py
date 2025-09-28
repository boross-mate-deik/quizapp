from django.urls import path

from . import views

app_name = "quizapp"
urlpatterns = [
    path("", views.home, name="home"),
    path("<int:question_id>/", views.solve, name="solve"),
    path("<int:question_id>/answer/", views.answer, name="answer"),
    path("<int:question_id>/results/", views.results, name="results"),
]