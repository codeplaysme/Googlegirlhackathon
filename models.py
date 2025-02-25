from django.db import models

class ProcessedDocument(models.Model):
    document_type = models.CharField(max_length=100)
    processed_date = models.DateTimeField(auto_now_add=True)
    extracted_data = models.JSONField()

class Conversation(models.Model):
    customer_message = models.TextField()
    ai_response = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
