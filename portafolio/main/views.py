from django.shortcuts import render, redirect

request_flush_required = True

def home(request):
    global request_flush_required
    if request_flush_required == True:
        request.session.flush()
        print("--- Session Flush ---")
        request_flush_required = False
    if "section" not in request.session:
        request.session["section"] = "home"

    section = request.session["section"]
    print(section)

    if request.method == "POST":
        section = request.POST.get("action", "home")
        request.session["section"] = section
        return redirect("home")
    
    return render(request, "index.html", {"section": section})
