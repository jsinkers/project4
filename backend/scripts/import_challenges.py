import csv
import glob
import json
import os

from django.conf import settings
#settings.configure()

from dotenv import load_dotenv
import yaml

from register_machine.models import Challenge

def load_challenges(files):
    """ load yaml challenges files from file list files """
    challenges = []
    for import_file in files:
        print(f"Importing {import_file}")
        with open(import_file) as yaml_file:
            challenge = yaml.safe_load(yaml_file)
            challenges.append(challenge)

    return challenges


def sync_challenge_db(challenges):
    """ sync the challenges to the database by creating instances and committing them to the database """
    # Check for environment variables
    #if not os.getenv("DATABASE_URL"):
    #    raise RuntimeError("DATABASE_URL is not set")

    for challenge in challenges:
        sync_challenge = Challenge(**challenge)
        print(f"Syncing {sync_challenge} with database ...")
        sync_challenge.save()
        """print(sync_challenge.id)
        print(sync_challenge.title)
        print(sync_challenge.statement)
        print(sync_challenge.program)
        print(sync_challenge.registers)
        print(sync_challenge.tests)
        print(sync_challenge.hint)"""


def run():
    root_dir = settings.BASE_DIR
    #load_dotenv(dotenv_path=os.path.join(root_dir, ".env.local"))
    import_dir = os.path.join(root_dir, "backend", "challenges")
    file_pattern = "challenge_*.yml"
    import_files = os.path.files = glob.glob(os.path.join(import_dir, file_pattern))
    print(import_files)
    challenges = load_challenges(import_files)
    sync_challenge_db(challenges)

    # with open("challenges.json", "w") as f:
    #    json.dump(challenges, f)
