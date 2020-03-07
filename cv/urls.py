from django.conf.urls import url
from cv.views import Portfolio
from cv import views as viewer

urlpatterns = [
        # url(r'^base/', views.intro, name="load topics in user section"),
        url(r'^home/', Portfolio.as_view(), name="load home page of portfolio"),
        url(r'^apps/base64-encoder/',viewer.base64Encoder, name="webApp base64-encoder"),
        url(r'^apps/base64-decoder/',viewer.base64Decoder, name="webApp base64-decoder"),
        url(r'^apps/base64-decoder/',viewer.base64Decoder, name="webApp base64-decoder"),
        url(r'^user/upload-file/',viewer.uploadFile, name="upload any file"),
        url(r'^user/download-file/',viewer.downloadFile, name="download any file"),
        url(r'^reset_all/',viewer.base64EncoderRedirect, name="reset_all"),
]
