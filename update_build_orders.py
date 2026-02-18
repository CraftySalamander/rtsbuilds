# Update the JS file containing the build orders for a specific game.

import json
import argparse
import re
from pathlib import Path


def update_build_orders(game: str, input_path: str, update: bool = True):
    """
    Update the JS file containing the build orders for a specific game.

    game          Acronym of the game: 'aoe2', 'aoe4', 'aom', 'sc2', 'wc3'
    input_path    Input BO JSON file or folder to process (containing the BO files).
    update        True to update the file without removing existing entries.
    """

    # Define the mapping of fields for each game
    game_field_mapping = {
        'aoe2': {'faction': 'civilization'},
        'aoe4': {'faction': 'civilization'},
        'aom': {'faction': 'major_god'},
        'sc2': {'faction': 'race', 'opponent_faction': 'opponent_race'},
        'wc3': {'faction': 'race', 'opponent_faction': 'opponent_race'},
    }

    # Check if the game is valid
    if game not in game_field_mapping:
        print(f"Error: Invalid game '{game}'. Valid options are: {', '.join(game_field_mapping.keys())}")
        return

    # Define the input path
    input_path = Path(input_path)

    # Create the output file path
    output_file = Path(__file__).parent / f"docs/builds/{game}_builds.js"

    # Ensure the output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Load existing build orders if the output file exists and update is True
    existing_build_orders = []
    if update and output_file.exists():
        try:
            # Read the existing JavaScript file to extract build orders
            with open(output_file, 'r') as f:
                content = f.read()
                # Use regex to extract the JSON array from the JavaScript file
                match = re.search(r'const\s+{0}_build_orders\s*=\s*(\[.*?\])\s*;'.format(game), content, re.DOTALL)
                if match:
                    json_str = match.group(1)
                    # Clean the JSON string
                    json_str = re.sub(r'/\*.*?\*/', '', json_str, flags=re.DOTALL)  # Remove multi-line comments
                    # Remove trailing commas from objects and arrays
                    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
                    # Remove trailing commas from array elements
                    json_str = re.sub(r',\s*\n\s*]', ']', json_str)
                    existing_build_orders = json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Warning: Could not parse existing build orders: {e}")
            print("Starting with an empty list of build orders.")
        except Exception as e:
            print(f"Error reading existing build orders: {e}")
            return

    # Initialize the list to hold build orders
    builds = existing_build_orders.copy()

    # Check if input_path is a file or directory
    if input_path.is_file() and input_path.suffix == '.json':
        json_files = [input_path]
    elif input_path.is_dir():
        json_files = list(input_path.rglob('*.json'))
    else:
        print(f"Error: Input path '{input_path}' is neither a valid file nor directory.")
        return

    # Iterate over all JSON files
    for json_file in json_files:
        if json_file.name == f"{game}_builds.js":
            continue

        try:
            with open(json_file, 'r') as f:
                data = json.load(f)

            # Check for required fields
            required_fields = ['name', game_field_mapping[game]['faction']]
            if game in ['sc2', 'wc3']:
                required_fields.append(game_field_mapping[game]['opponent_faction'])

            missing_fields = [field for field in required_fields if field not in data]
            if missing_fields:
                print(f"Warning: Missing fields '{', '.join(missing_fields)}' in file {json_file}. Skipping this file.")
                continue

            # Create a new entry for builds.js
            faction = data[game_field_mapping[game]['faction']]

            entry = {
                'name': data['name'],
                'faction': faction,
                'author': data['author'] if 'author' in data else 'Unknown',
                'content': data,
            }

            if game in ['sc2', 'wc3']:
                opponent_faction = data[game_field_mapping[game]['opponent_faction']]
                entry['opponent_faction'] = opponent_faction

            # Check for duplicate entries based on name (case-insensitive)
            if any(existing_entry['name'].lower() == entry['name'].lower() for existing_entry in builds):
                print(f"Warning: An entry with the name '{entry['name']}' already exists. Skipping this file.")
                continue

            builds.append(entry)

        except Exception as e:
            print(f"Error processing file {json_file}: {e}")
            continue

    # Write the JavaScript file with the build orders
    with open(output_file, 'w') as f:
        f.write(f"const {game}_build_orders = [\n")
        for i, entry in enumerate(builds):
            # Don't add comma for the last entry
            json_entry = json.dumps(entry, indent=2)
            if i < len(builds) - 1:
                f.write(f"  {json_entry},\n")
            else:
                f.write(f"  {json_entry}\n")
        f.write("];\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate build orders JavaScript file from JSON files.')
    parser.add_argument('-g', '--game', type=str, required=True, help='Game acronym (aoe2, aoe4, aom, sc2, wc3)')
    parser.add_argument(
        '-i',
        '--input',
        type=str,
        required=True,
        help='Input BO JSON file or folder to process (containing the BO files).',
    )
    parser.add_argument(
        '-u', '--update', action='store_false', help='Update the file without removing existing entries'
    )
    args = parser.parse_args()

    update_build_orders(args.game, args.input, args.update)
