from django.shortcuts import render

def home(request):
    request.method == "GET"
    return render(request, "index.html")