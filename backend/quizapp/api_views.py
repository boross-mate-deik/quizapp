from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Question, Answer
from .serializers import QuestionSerializer


@api_view(['GET'])
def question_list(request):
    questions = Question.objects.all()
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def question_detail(request, pk):
    try:
        question = Question.objects.get(pk=pk)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = QuestionSerializer(question)
    return Response(serializer.data)


@api_view(['POST'])
def submit_answer(request, pk):
    try:
        question = Question.objects.get(pk=pk)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    selected_ids = request.data.get('answers', [])
    selected_answers = Answer.objects.filter(pk__in=selected_ids, question=question)

    correct_answers = question.answer_set.filter(is_correct=True)
    correct_ids = set(a.id for a in correct_answers)
    selected_ids_set = set(int(i) for i in selected_ids)

    result = {
        "correct": correct_ids == selected_ids_set,
        "correct_answers": list(correct_ids),
        "selected_answers": selected_ids,
    }
    return Response(result)