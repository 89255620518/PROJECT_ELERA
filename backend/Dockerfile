# Базовый образ Python
FROM python:3.9-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Рабочая директория
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копирование всего проекта
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]