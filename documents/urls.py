from django.urls import path

from documents import views

app_name = 'documents'

urlpatterns = [
    path('cabinet/', views.cabinet, name = 'cabinet'),
    path ('results/', views.results, name= 'results' ),
]
