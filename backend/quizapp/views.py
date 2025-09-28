from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404
from django.template import loader
from .models import Question


def home(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "quizapp/home.html", context)


def solve(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "quizapp/solve.html", {"question": question})


def results(request, question_id):
    return HttpResponse("You're looking at the results of question %s." % question_id)
