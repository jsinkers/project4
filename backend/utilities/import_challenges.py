import csv
import glob
import os

#from sqlalchemy import create_engine
#from sqlalchemy.orm import scoped_session, sessionmaker
from backend.register_machine.models import Challenge
from dotenv import load_dotenv
import yaml

root_dir = os.path.dirname(os.getcwd())
import_dir = os.path.join(root_dir, "challenges")
file_pattern = "challenge_*.yml"
import_files = os.path.files = glob.glob(os.path.join(import_dir, file_pattern))
load_dotenv(dotenv_path=os.path.join(root_dir, ".env.local"))

# Check for environment variables
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

#engine = create_engine(os.getenv("DATABASE_URL"))
#db = scoped_session(sessionmaker(bind=engine))

for import_file in import_files:
    with open(import_file) as yaml_file:
        challenge = yaml.load(yaml_file)
        #print(challenge)
        new_chall = Challenge(challenge)
        new_chall.save()
