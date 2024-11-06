# Start with an official Python image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Set the backend as the working directory (if that's where your code lives)
WORKDIR /app

# Expose the port that Gunicorn will use
EXPOSE 8000

# Command to run the application with Gunicorn
CMD ["gunicorn", "--chdir", "backend", "project4.wsgi", "--bind", "0.0.0.0:8000", "--log-file", "-"]
