from django.shortcuts import render
from documents.models import Document
# Create your views here.
def cabinet(request):
    documents= Document.objects.all()
    context = {
        
        'documents': documents
    }
    return render(request, 'documents/cab.html', context)

def results(request):
    return render(request, 'documents/results-cab.html')
