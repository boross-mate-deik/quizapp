from django.contrib import admin

from .models import Question, Answer


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 4


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Question Information", {"fields": ["question_text", "multiple_answer", "category"]}),
        ("Date information", {"fields": ["pub_date"]})
    ]
    inlines = [AnswerInline]
    list_display = ["question_text", "multiple_answer", "category", "pub_date"]
    list_filter = ["multiple_answer", "category"]
    search_fields = ["question_text"]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)
