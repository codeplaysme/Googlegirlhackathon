import json
import openai
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os

openai.api_key = os.getenv('OPENAI_API_KEY')

class DocumentProcessorView(APIView):
    def post(self, request):
        try:
            document_text = request.data.get('document_text')
            if not document_text:
                return Response({'error': 'No document text provided'}, status=status.HTTP_400_BAD_REQUEST)

            # Process document using OpenAI
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "Extract key information from the following document. Return a JSON object with fields: type, date, amount, entities, and key_details."},
                    {"role": "user", "content": document_text}
                ]
            )
            
            processed_data = json.loads(response.choices[0].message.content)
            return Response({'data': processed_data})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class DataValidatorView(APIView):
    def post(self, request):
        try:
            data = request.data.get('data', {})
            schema = request.data.get('schema', {})
            
            validation_results = []
            for field, value in data.items():
                field_schema = schema.get(field, {})
                validation = {'field': field, 'isValid': True}
                
                # Validate format if specified
                if 'format' in field_schema:
                    import re
                    if not re.match(field_schema['format'], str(value)):
                        validation['isValid'] = False
                        validation['error'] = 'Invalid format'
                
                validation_results.append(validation)
            
            return Response({'validations': validation_results})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class CustomerServiceView(APIView):
    def post(self, request):
        try:
            message = request.data.get('customer_message')
            history = request.data.get('conversation_history', [])
            
            if not message:
                return Response({'error': 'No message provided'}, status=status.HTTP_400_BAD_REQUEST)

            # Generate response using OpenAI
            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are a helpful customer service AI."},
                    *[{"role": msg["role"], "content": msg["content"]} for msg in history],
                    {"role": "user", "content": message}
                ]
            )
            
            ai_response = response.choices[0].message.content
            return Response({
                'response': ai_response,
                'suggestions': []  # Add relevant suggestions if needed
            })
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
