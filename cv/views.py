from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.views import View
from mimetypes import guess_extension, guess_type
import magic,mimetypes
from django.http import HttpResponseRedirect, HttpResponse
from portfolio import settings
import uuid, base64, os

class Portfolio(View):
    def get(self,request):
            return render(request, 'portfolio/home.html', {
    })

def uploadFile(request):
    cat_=""
    raw_file=request.FILES['upload-file']
    file_extn=str(raw_file).split('.')[-1]
    
    if file_extn == 'jpg' or file_extn == 'jpeg' or file_extn == 'png' or file_extn == 'gif':
        cat_="images"
    
    elif file_extn == "csv" or file_extn == "xlsx" or file_extn == "xls":
        cat_="csv"
    
    elif file_extn =="pdf":
        cat_="pdf"
    else:
        cat_="other"
         
    file_id=save_files(raw_file,file_extn,cat_)
    location=settings.MEDIA[0]
    current_path=str(location)+'/'+cat_+'/'+str(file_id)+'.'+file_extn
    encoded64=encoder(current_path)
    codeStr=str(encoded64)[:-1].replace("b'","")
    os.remove(current_path)
    return HttpResponse(codeStr)
    
    
def encoder(file_path):
    with open(file_path, 'rb') as data:
        encoded = base64.b64encode(data.read())
        return encoded
    
def save_files(filename,extn,cat_):
    uuidName = uuid.uuid4()
    location=settings.MEDIA[0]
    current_path=str(location)+'/'+cat_+'/'+str(uuidName)+'.'+extn
    with open(current_path, 'wb+') as save_folder:
        for chunk in filename.chunks():
            save_folder.write(chunk) 
    return uuidName
            
def base64Encoder(request):
    return render(request,'portfolio/base64Encoder.html',{ 
        'encoded_text':'hello' 
})
    
def base64Decoder(request):
        return render(request,'portfolio/base64Decoder.html',{ 
})

@csrf_exempt
def downloadFile(request):
    encrypt_path=""
    uuid_N=''
    extension=''
    fileName=""
    if request.method =='POST':
        base64_source=request.POST["coded-text"]
        base64_source = base64_source.encode('utf-8')
        try:
            fileName=request.POST['fileExt-name']
        except:
            fileName=""
            
        location=settings.MEDIA[0]
        decoded = base64.b64decode(base64_source)
        mime_type = magic.from_buffer(decoded, mime=True)
        if mime_type == 'image/png':
            extension='.png'
        
        if mime_type == 'image/jpeg':
            extension='.jpeg'
            
        if mime_type == 'image/jpg':
            extension='.jpg'
            
        if mime_type == 'image/gif':
            extension='.gif'
        
        if mime_type == 'application/vnd.ms-excel':
            extension='.xls'
        
        if mime_type == 'text/html':
            extension='.html'
        
        if mime_type == 'text/x-asm':
            extension='.css'
            
        if mime_type == 'video/mp4':
            extension='.mp4'
        
        if mime_type == 'application/pdf':
            extension='.pdf'
        
        if mime_type == 'text/plain':
            extension=".txt"
            
            encrypt_path=str(location)+'/other/hello'+extension
            with open(encrypt_path, 'wb') as data:
                data.write(decoded)
                data.close()
            with open(encrypt_path, 'r') as data:
                try:
                    lstDa=data.read().split('{')
                    if len(lstDa) >= 2:
                        extension='.json'
                        os.remove(encrypt_path)
                    else:
                        extension=".txt"
                        os.remove(encrypt_path)
                except:
                    extension=".txt"
                    os.remove(encrypt_path)
                data.close()
                        
        if fileName=="":
            uuid_N = str(uuid.uuid4().hex)
            fileName=uuid_N
                
        encrypt_path=str(location)+'/other/'+fileName+extension
        with open(encrypt_path, 'wb') as data:
            data.write(decoded)
            data.close()
        if os.path.exists(encrypt_path):
            with open(encrypt_path, 'rb') as data:
                response = HttpResponse(data.read(), content_type="application/octet-stream")
                response['Content-Disposition'] = 'attachment; filename='+fileName+extension
                return response

def base64EncoderRedirect(request):
    hello="yes ! please"
    return HttpResponse(hello)