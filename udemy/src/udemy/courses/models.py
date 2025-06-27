from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_student = models.BooleanField(default=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'            
    REQUIRED_FIELDS = ['username'] 
    def __str__(self):
        return self.username
    

class Course(models.Model):
    title = models.CharField(max_length=175)
    featured_image = models.ImageField(upload_to="courses/images/")
    description = models.TextField()
    author_name =  models.CharField()
    rating = models.FloatField()
    price = models.CharField(max_length=50)
    category = models.ForeignKey("courses.Category", on_delete=models.CASCADE)

    class Meta:
        db_table = "courses_course"

    def __str__(self):
        return self.title 


class Category(models.Model):

    title = models.CharField(max_length=175)
    image = models.ImageField(upload_to="categories/images/",default='default.jpg')

    class Meta:
        db_table = "courses_category"
        verbose_name_plural = "categories"

    def __str__(self):
        return self.title 




class Purchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  
    course = models.ForeignKey("courses.Course", on_delete=models.CASCADE)
    purchased = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "courses_purchase"


    def __str__(self):
        return str(self.id)



class CourseContent(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="contents")
    day = models.CharField(max_length=50)
    level = models.CharField(max_length=50, default="Beginner")
    title = models.CharField(max_length=175)
    lectures = models.IntegerField()
    duration = models.CharField(max_length=50)

    class Meta:
        db_table = "courses_content"

    def __str__(self):
        return self.title
