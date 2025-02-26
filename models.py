from django.db import models
from django.utils import timezone

class ProcessedDocument(models.Model):
    document_type = models.CharField(max_length=100)
    processed_date = models.DateTimeField(default=timezone.now)
    extracted_data = models.JSONField()
    raw_text = models.TextField()
    confidence_score = models.FloatField(default=0.0)
    metadata = models.JSONField(default=dict)
    
    class Meta:
        db_table = 'processed_documents'

class Conversation(models.Model):
    session_id = models.CharField(max_length=100)
    customer_message = models.TextField()
    ai_response = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)
    context = models.JSONField(default=dict)
    sentiment = models.CharField(max_length=50, null=True)
    tags = models.JSONField(default=list)  # Store tags as JSON array

    class Meta:
        db_table = 'conversations'

class ValidationRule(models.Model):
    field_name = models.CharField(max_length=100)
    rule_type = models.CharField(max_length=50)
    pattern = models.CharField(max_length=255, null=True)
    min_value = models.FloatField(null=True)
    max_value = models.FloatField(null=True)
    required = models.BooleanField(default=True)
    custom_validation = models.JSONField(null=True)
    error_message = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'validation_rules'

class KnowledgeBase(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=100)
    tags = models.JSONField(default=list)  # Store tags as JSON array
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    metadata = models.JSONField(default=dict)

    class Meta:
        db_table = 'knowledge_base'

class AuditLog(models.Model):
    action_type = models.CharField(max_length=50)
    entity_type = models.CharField(max_length=50)
    entity_id = models.CharField(max_length=24)
    changes = models.JSONField()
    user_id = models.CharField(max_length=24, null=True)
    timestamp = models.DateTimeField(default=timezone.now)
    ip_address = models.CharField(max_length=50, null=True)
    
    class Meta:
        db_table = 'audit_logs'
