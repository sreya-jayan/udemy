from django.contrib import admin
from courses.models import Course,Category,Purchase,User,CourseContent


admin.site.register(Course)
admin.site.register(Category)
admin.site.register(Purchase)
admin.site.register(User)
admin.site.register(CourseContent)