from django.db.models import F
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.urls import reverse
from .models import Question, Answer


def home(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "quizapp/home.html", context)


def solve(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request,
                  "quizapp/solve.html",
                  {
                      "question": question,
                      "multiple_answer": question.multiple_answer,
                  })

def answer(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    selected_ids = request.POST.getlist("answer")

    if not selected_ids:
        return render(
            request,
            "quizapp/solve.html",
            {
                "question": question,
                "multiple_answer": question.multiple_answer,
                "error_message": "You didn't select any answers.",
            },
        )

    request.session["selected_answers"] = selected_ids

    return HttpResponseRedirect(reverse("quizapp:results", args=(question.id,)))


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    selected_ids = request.session.get("selected_answers", [])
    selected_ids = [int(x) for x in selected_ids]
    answers = question.answer_set.all()
    return render(request,
                  "quizapp/results.html",
                  {
                      "question": question,
                      "answers": answers,
                      "selected_ids": selected_ids,
                  })
