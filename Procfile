run: python backend/manage.py collect
release: python backend/manage.py migrate
release: python backend/manage.py runscript import_challenges
web: gunicorn --chdir backend/ project4.wsgi --log-file -
