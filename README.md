# Register Machine

Now running on heroku at:
https://register-machine.herokuapp.com/
Old: front-end build
https://jsinkers.github.io/register-machine

A web app based on Django intended as an educational tool to introduce concepts
of computer programming, based on Wang's register machine [1], as discussed in
Ch. 24 of Dennett [2].  Text and the register machine problems draw on 
Dennett's work.    

## Representation 

### Representation of register machine programs

Register machine programs are a JSON array of steps.  For convenience this is
input as a YAML file.

```yaml
program:
- id: <int>                     # program step id
  instruction: <inc|deb|end>    # instruction for this step: increment, decrement/branch, or end
  register: <int>               # register ID to apply inc/dec to
  goTo: <int>                   # go-to step ID
  branchTo: <int>               # branch-to step ID (for decrement/branch)
  editable: <true|false>        # indicates whether this step is editable in the UI
  editMode: <true|false>        # flag to toggle edit mode on the step in the UI
```
         
### Representation of register machine program tests

JSON objects
```
tests = { { name: <string>,
  register_start_values: { <id>: <value>, ... }
  register_end_values: { <id>: <value>, ... }
}, { } }
```

## References

1. Wang, H., 1957: "A variation to Turing's Theroy of Computing Machines." *Journal
of the Association for Computing Machinery*, pp. 63-92. 
2. Dennett, D., 2013, *Intuition pumps and other tools for thinking.*


## Architecture

Django back-end for API, models, and to serve the built Vue files
Vue front-end
Used parts of https://github.com/gtalarico/django-vue-template

## Development server

From backend directory, Run django:
```python manage.py runserver```

From frontend directory, run Vue:
```npm run serve```

vue.config.js contains a proxy so that these do not clash.

## Deployment

### Heroku Procfile
* Collects static files into one location
* Performs database migrations
* Serves webapp

### Heroku setup

Heroku will build the Vue frontend with npm, and also install python dependencies.  

```bash
$ heroku apps:create register-machine
$ heroku git:remote -a register-machine
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/python
$ heroku config:set DJANGO_SECRET_KEY='enter_secret_key'
$ heroku addons:create papertrail
$ git push heroku
```

Create superuser
```bash
$ heroku run python backend/manage.py createsuperuser
```

### Running heroku app locally

PostgreSQL must be installed

On Windows, run:
```heroku local web -f Procfile.windows```

## Challenges

### Writing challenges
Challenges are written in YAML format, in `<project_root>/backend/challenges`.

### Updating challenges
In order to update challenges on the database, run:
`$ heroku run python backend/manage.py runscript import_challenges`

