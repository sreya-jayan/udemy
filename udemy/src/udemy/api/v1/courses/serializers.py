from rest_framework.serializers import ModelSerializer
from courses.models import Course,Purchase,Category,Purchase,User,CourseContent
from rest_framework import serializers



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class CourseSerializer(ModelSerializer):
    class Meta:
        fields = ("id","title","featured_image","description","author_name","rating","price")
        model = Course








class CourseContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseContent
        fields = ['day', 'level', 'title', 'lectures', 'duration']





class CourseDetailSerializer(ModelSerializer):
    category = serializers.SerializerMethodField()
    contents = CourseContentSerializer(many=True, read_only=True)
    class Meta:
        fields = ("id","title","featured_image","description","rating","price","category","author_name","contents")
        model = Course

    def get_category(self, instance):
        return instance.category.title
 




class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "title", "image")






class PurchaseSerializer(ModelSerializer):
    course = CourseSerializer(read_only=True)
    
    class Meta:
        model = Purchase
        fields = ['id', 'course']

   