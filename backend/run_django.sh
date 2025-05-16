#!/bin/bash
source /var/www/PROJECT_ELERA/backend/venv/bin/activate
gunicorn --bind 0.0.0.0:8000 real_estate_app.wsgi:application 
