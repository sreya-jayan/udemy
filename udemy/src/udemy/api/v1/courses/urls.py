from django.urls import path
from api.v1.courses import views

urlpatterns = [
    path('', views.courses),
    path('view/<int:pk>/', views.course),
    path('protected/<int:pk>',views.protected),
   
   
    path('categories/', views.categories),
    path('purchase/<int:pk>/', views.purchase_course),
    path('learnings/', views.my_learnings),
    
]
