from django.urls import path
from .views import DocumentProcessorView, DataValidatorView, CustomerServiceView

urlpatterns = [
    path('process-document/', DocumentProcessorView.as_view(), name='process-document'),
    path('validate-data/', DataValidatorView.as_view(), name='validate-data'),
    path('customer-service/', CustomerServiceView.as_view(), name='customer-service'),
]
