from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    multiple_answer = models.BooleanField(default=False)
    category = models.CharField(
        max_length=40,
        choices=(
            ("math", "Mathematics"),
            ("history", "History"),
            ("literature", "Literature"),
            ("art", "Arts and Crafts"),
            ("geography", "Geography"),
            ("human", "Humans and Life"),
            ("animal", "Animals"),
            ("plant", "Plants"),
            ("it", "Informatics"),
            ("programming", "Programming")
        )
    )
    def __str__(self):
        return self.question_text


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)
    def __str__(self):
        return self.answer_text
