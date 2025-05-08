# Базовый образ Python
FROM python:3.9-slim

# Установка необходимых системных пакетов
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Рабочая директория
WORKDIR /app

# Копирование файла зависимостей
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копирование всего проекта
COPY . .

# Команда для запуска приложения с помощью gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "real_estate_app.wsgi:application"]
