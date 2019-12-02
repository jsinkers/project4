run: python backend/manage.py collect
run: python backend/manage.py migrate
web: gunicorn --chdir backend/ project4.wsgi --log-file -
