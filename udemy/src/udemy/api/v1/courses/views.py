from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.v1.courses.serializers import CourseSerializer,CourseDetailSerializer,PurchaseSerializer, CategorySerializer
from courses.models import Course, Category, Purchase
from django.db.models import Q

from api.v1.courses.pagination import StandardResultSetPagination

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def courses(request):
    instances = Course.objects.filter()
    
    q = request.GET.get("q")
    if q:
        ids = q.split(",")
        instances = instances.filter(title__icontains=q)

    paginator = StandardResultSetPagination()
    paginated_result = paginator.paginate_queryset(instances,request)

    
    context = {
        "request" : request
    }
    serializer = CourseSerializer(paginated_result,many=True, context=context)
    response_data = {
        "status_code" : 6000,
        "count" : paginator.page.paginator.count,
        "links" : {
            "next" : paginator.get_next_link(),
            "previous" : paginator.get_previous_link()
        },
        "data" : serializer.data
    }
    return Response(response_data)



@api_view(["GET"])
@permission_classes([AllowAny])
def course(request,pk):
    if Course.objects.filter(pk=pk).exists():
        instance = Course.objects.get(pk=pk)
    
        context = {
            "request": request
        }
        serializer = CourseDetailSerializer(instance, context=context)
        response_data = {
           "status_code":6000,
           "data": serializer.data
        }
        return Response(response_data)
    else:
        response_data = {
           "status_code":6001,
           "message": "Cource not exist"
        }
        return Response(response_data)




@api_view(["GET"])
@permission_classes([IsAuthenticated])
def protected(request,pk):
    if Course.objects.filter(pk=pk).exists():
        instance = Course.objects.get(pk=pk)
    
        context = {
            "request": request
        }
        serializer = CourseDetailSerializer(instance, context=context)
        response_data = {
           "status_code":6000,
           "data": serializer.data
        }
        return Response(response_data)
    else:
        response_data = {
           "status_code":6001,
           "message": "Cource not exist"
        }
        return Response(response_data)



@api_view(["GET"])
@permission_classes([AllowAny])
def categories(request):
    instances = Category.objects.all()
    serializer = CategorySerializer(instances, many=True, context={'request': request})
    return Response({
        "status_code": 6000,
        "data": serializer.data
    })







@api_view(["POST"])
@permission_classes([IsAuthenticated])
def purchase_course(request, pk):
    try:
        course = Course.objects.get(pk=pk)
    except Course.DoesNotExist:
        return Response({
            "status_code": 6001,
            "message": "Course does not exist"
        }, status=404)

   
    if Purchase.objects.filter(user=request.user, course=course).exists():
        return Response({
            "status_code": 6001,
            "message": "You already purchased this course"
        }, status=400)

   
    purchase = Purchase.objects.create(user=request.user, course=course)

   
    serializer = PurchaseSerializer(purchase)

    return Response({
        "status_code": 6000,
        "message": "Course purchased successfully",
        "data": serializer.data
    }, status=201)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_learnings(request):
    user = request.user
    purchases = Purchase.objects.filter(user=user).select_related("course")
    serializer = PurchaseSerializer(purchases, many=True)
    return Response({
        "status_code": 6000,
        "data": serializer.data
    })