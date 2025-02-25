# Googlegirlhackathon

# Backend

This is a Django-based backend for the automation features. It provides API endpoints for document processing, data validation, and customer service.

## Setup Instructions

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install requirements:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
Create a .env file with:
```
DJANGO_SECRET_KEY=your-secret-key
OPENAI_API_KEY=your-openai-key
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Start the development server:
```bash
python manage.py runserver
```

## API Endpoints

- POST /api/process-document/
- POST /api/validate-data/
- POST /api/customer-service/

## Usage

See the API documentation for detailed usage instructions.
