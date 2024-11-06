# Register Machine

[registermachine.com](registermachine.com) 

This web app is an educational tool that introduces concepts
of computer programming and models of computation via the register machine.

__Built with Vue/Django/PostgreSQL__

![Running challenge tests on the register machine](docs/running_tests.gif)

I built this as a learning exercise in an area of personal interest as my first project with Vue but also to develop knowledge of Django and relational databases. The architecture is needlessly complicated for the current requirements as it's a learning exercise.

This was originally hosted on Heroku, but due to rising costs I have Dockerized it and now self-host it. The Heroku deployment instructions are still included below.

## What is a register machine?

The register machine is a simple model of computation, with a set of registers, and a program that manipulates the registers. With only simple instructions, the register machine is Turing complete, and can solve any computable problem.
This is based on Wang's register machine [1], as discussed in Ch. 24 of Dennett [2]. Content in the app and the register machine problems draw on Dennett's work.  

## What does it do?

The web app includes a brief __tutorial__, and a series of __challenges__
of increasing difficulty gradually introducing new concepts.  Challenges require you to write a program for the register machine that performs the required task. 
Challenges are completed by successfully passing the set of tests supplied.  

There's also a __playground__ where you can write your own programs and run them.

Challenges are specified in YAML files, and the app is designed to be easily extensible with new challenges.


## Register Machine Challenges

### Demo: Solving Challenge #2
Video walking through Challenge 2 

[![Register Machine Walkthrough](https://img.youtube.com/vi/9eTyqoDCcc4/0.jpg)](https://youtu.be/9eTyqoDCcc4)

N.B. dropdowns didn't record in this screen recording

### Writing challenges
Challenges are written in YAML format, placed in `<project_root>/backend/challenges`.

Challenge YAML files are named ```challenge_<id>.yml``` where
```id``` is the integer challenge ID.  
See for example [Challenge 1](https://github.com/jsinkers/register-machine/blob/master/backend/challenges/challenge_01.yml)

Each time the app is deployed it checks for updates to the challenges and updates
the database accordingly.

The challenge YAML file should contain info on the challenge description, hints, registers,
and tests.

Skeleton `challenge_<id>.yml`:
```yaml
---
id: <id>
title: <challenge title>
statement: <html statement in quotes>
program: <see below>
tests: <see below>
registers: <see below>
hint: <html hint in quotes>
```

### Representation of register machine programs

Register machine programs are a JSON array of steps.  
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

Tests are represented in YAML as:
```yaml
tests: 
- id: <test id> 
  description: <brief test description>
  status: null      # indicates whether test has been passed.  should be stored as null
  initRegVals:      # stores register values at start of test
    - id:           # register id
      value:        # value of register <id>
  expectedRegVals:  # stores expected register values once test complete
    - id:
      value:
  actualRegVals:    # actual register values once test complete
    - id:
      value:
```

### Representation of registers

On page load, the number of registers listed in the YAML register list will be 
added to the register machine, and displayed with the values specified in the Challenge
YAML:

```yaml
registers:
- id: <int register id>
  value: <int initial value of register>
```

### Updating challenges

In order to update challenges on the database, run:
`$ heroku run python backend/manage.py runscript import_challenges`

## Architecture

- __Note: the architecture is overly complex for the current requirements, as it was a learning exercise. I've included some comments on how this could be simplified__
- __PostgreSQL database__ stores challenges
  - challenges are written in YAML and loaded into the database on deployment, allowing for easy extensibility
  and updates
  - alternatively
- __Django back-end__ for API and models
  - endpoints for challenges
  - could be eliminated 
- __Vue front-end__ for user interface
  - the register machine programs run in the browser

- Local storage is used to retain user progress. I didn't want to create user accounts for this project.
- I used parts of [django-vue-template](https://github.com/gtalarico/django-vue-template) when setting up the project

### Simplifications

For the same feature set, the architecture could be simplified by removing the database and Django and a simply serving the static files for the Vue front-end. The challenges could be stored in JSON files in the Vue app.

## Development server - Running locally

From backend directory, Run django:
```python manage.py runserver```

From frontend directory, run Vue:
```npm run serve```

vue.config.js contains a proxy so that these do not clash.

## Deployment - Docker

- set up a `.env` file in the root directory per the `.env.example` file
- run `docker compose up --build -d`

### Details

- `gunicorn` is used to serve the Django API 
- `node` is used to build the Vue app and serve it with `nginx`
- `postgres` is used for the database

## Deployment - Heroku (Deprecated)

### Heroku Procfile

* Collects static files into one location
* Performs database migrations
* Updates challenges
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

PostgreSQL must be installed to run this locally

On Windows, run:
```heroku local web -f Procfile.windows```

## Ideas for further development

* __user accounts__ to allow permanent storage of solutions and playground programs
* __layout improvements__ for consistency and responsiveness
* __Vue tests__

## References

1. Wang, H., 1957: "A variation to Turing's Theory of Computing Machines." *Journal
of the Association for Computing Machinery*, pp. 63-92. 
2. Dennett, D., 2013, *Intuition pumps and other tools for thinking.*
