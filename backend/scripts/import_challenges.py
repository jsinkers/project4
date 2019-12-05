import glob
import os

from django.conf import settings
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
    for challenge in challenges:
        sync_challenge = Challenge(**challenge)
        print(f"Syncing {sync_challenge} with database ...")
        sync_challenge.save()


def run():
    root_dir = settings.BASE_DIR
    import_dir = os.path.join(root_dir, "backend", "challenges")
    file_pattern = "challenge_*.yml"
    import_files = os.path.files = glob.glob(os.path.join(import_dir, file_pattern))
    challenges = load_challenges(import_files)
    sync_challenge_db(challenges)