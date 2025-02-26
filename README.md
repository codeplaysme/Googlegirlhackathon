# Googlegirlhackathon

## Overview
This project is an intelligent process automation platform that leverages AI to streamline business operations. It automates repetitive tasks like data entry, document processing, and customer service interactions using modern AI/ML technologies.

## Features
- **Data Entry Automation**: Automatically process and validate CSV data uploads
- **Document Processing**: AI-powered document classification and information extraction
- **Customer Service Bot**: Intelligent chatbot with sentiment analysis for customer queries
- **RESTful API**: Well-documented API endpoints for seamless integration

## Tech Stack
### Frontend
- TypeScript
- JavaScript
- React.js

### Backend
- Python
- Flask/Django


1. Install PostgreSQL:
   - For Ubuntu: `sudo apt-get install postgresql postgresql-contrib`
   - For Mac: `brew install postgresql`
   - For Windows: Download and install from PostgreSQL website

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install requirements:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
Create a .env file with:
```
DJANGO_SECRET_KEY=your-secret-key
OPENAI_API_KEY=your-openai-key
DB_NAME=automation_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```

5. Create PostgreSQL database:
```bash
# Log into PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE automation_db;

# Create migrations and apply them
python manage.py makemigrations
python manage.py migrate
```

6. Start the development server:
```bash
python manage.py runserver
```

## Database Schema

Here's the SQL code to create the tables (though Django will handle this automatically):

```sql
-- Create processed_documents table
CREATE TABLE processed_documents (
    id SERIAL PRIMARY KEY,
    document_type VARCHAR(100) NOT NULL,
    processed_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    extracted_data JSONB NOT NULL,
    raw_text TEXT NOT NULL,
    confidence_score FLOAT DEFAULT 0.0,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create conversations table
CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(100) NOT NULL,
    customer_message TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    context JSONB DEFAULT '{}'::jsonb,
    sentiment VARCHAR(50),
    tags JSONB DEFAULT '[]'::jsonb
);

-- Create validation_rules table
CREATE TABLE validation_rules (
    id SERIAL PRIMARY KEY,
    field_name VARCHAR(100) NOT NULL,
    rule_type VARCHAR(50) NOT NULL,
    pattern VARCHAR(255),
    min_value FLOAT,
    max_value FLOAT,
    required BOOLEAN DEFAULT TRUE,
    custom_validation JSONB,
    error_message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create knowledge_base table
CREATE TABLE knowledge_base (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    tags JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create audit_logs table
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    action_type VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(24) NOT NULL,
    changes JSONB NOT NULL,
    user_id VARCHAR(24),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(50)
);

-- Create indexes for better performance
CREATE INDEX idx_processed_documents_type ON processed_documents(document_type);
CREATE INDEX idx_conversations_session ON conversations(session_id);
CREATE INDEX idx_validation_rules_field ON validation_rules(field_name);
CREATE INDEX idx_knowledge_base_category ON knowledge_base(category);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
```

## API Endpoints

- POST /api/process-document/
- POST /api/validate-data/
- POST /api/customer-service/

## Usage

See the API documentation for detailed usage instructions.
