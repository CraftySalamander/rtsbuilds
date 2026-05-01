import json
import argparse
import re
from pathlib import Path


def log_error(message: str) -> None:
    print(f"[ERROR] {message}")


def log_warning(message: str) -> None:
    print(f"[WARNING] {message}")


def log_info(message: str) -> None:
    print(f"[INFO] {message}")


def remove_build_order(game: str, remove_entries: list[str]) -> None:
    """
    Remove specified build orders from the JS file and their corresponding JSON files.

    Args:
        game: Game acronym (e.g., 'wc3', 'aoe2').
        remove_entries: List of entries to remove in the format "game|build_name".
    """
    # Filter entries for the specified game
    game_entries = [entry for entry in remove_entries if entry.split('|')[0] == game]
    if not game_entries:
        return

    # Paths
    js_file = Path(__file__).parent / f"docs/builds/{game}_builds.js"
    json_dir = Path(__file__).parent / f"docs/api/builds/{game}"

    # Load existing build orders from the JS file
    if not js_file.exists():
        log_warning(f"JS file for {game} does not exist. Skipping removal.")
        return

    try:
        with open(js_file, 'r') as f:
            content = f.read()
            match = re.search(r'const\s+{0}_build_orders\s*=\s*(\[.*?\])\s*;'.format(game), content, re.DOTALL)
            if not match:
                log_warning(f"No build orders array found in {js_file}. Skipping removal.")
                return
            json_str = match.group(1)
            json_str = re.sub(r'/\*.*?\*/', '', json_str, flags=re.DOTALL)
            json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
            json_str = re.sub(r',\s*\n\s*]', ']', json_str)
            build_orders = json.loads(json_str)
    except json.JSONDecodeError as e:
        log_error(f"Failed to parse {js_file}: {e}")
        return
    except Exception as e:
        log_error(f"Error reading {js_file}: {e}")
        return

    # Extract build names to remove (case-insensitive)
    build_names_to_remove = [entry.split('|')[1].lower() for entry in game_entries]

    # Filter out entries to remove
    updated_build_orders = [
        entry for entry in build_orders if entry.get('name', '').lower() not in build_names_to_remove
    ]

    # Remove corresponding JSON files
    for entry in game_entries:
        build_name = entry.split('|')[1]
        normalized_name = re.sub(r'[^a-zA-Z0-9]', '', build_name.lower())
        json_file = json_dir / f"{normalized_name}.json"
        if json_file.exists():
            json_file.unlink()
            log_info(f"Removed JSON file: {json_file}")

    # Update the JS file
    with open(js_file, 'w') as f:
        f.write(f"const {game}_build_orders = [\n")
        for i, entry in enumerate(updated_build_orders):
            json_entry = json.dumps(entry, indent=2)
            if i < len(updated_build_orders) - 1:
                f.write(f"  {json_entry},\n")
            else:
                f.write(f"  {json_entry}\n")
        f.write("];\n")

    log_info(f"Removed {len(build_orders) - len(updated_build_orders)} entries from {js_file}.")


def update_build_orders(game: str, input_path: str, update: bool = True):
    """
    Update the JS file containing the build orders for a specific game and generate individual JSON files.

    Args:
        game          Acronym of the game: 'aoe2', 'aoe4', 'aom', 'sc2', 'wc3'.
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
        log_error(f"Invalid game '{game}'. Valid options are: {', '.join(game_field_mapping.keys())}")
        return

    # Define the input path
    input_path = Path(input_path)

    # Create the output file path for the JS file
    output_file = Path(__file__).parent / f"docs/builds/{game}_builds.js"

    # Create the output directory path for the JSON files
    json_output_dir = Path(__file__).parent / f"docs/api/builds/{game}"

    # Ensure the output directories exist
    output_file.parent.mkdir(parents=True, exist_ok=True)
    json_output_dir.mkdir(parents=True, exist_ok=True)

    # Load existing build orders if the output file exists and update is True
    existing_build_orders = []
    if update and output_file.exists():
        try:
            with open(output_file, 'r') as f:
                content = f.read()
                match = re.search(r'const\s+{0}_build_orders\s*=\s*(\[.*?\])\s*;'.format(game), content, re.DOTALL)
                if match:
                    json_str = match.group(1)
                    json_str = re.sub(r'/\*.*?\*/', '', json_str, flags=re.DOTALL)
                    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
                    json_str = re.sub(r',\s*\n\s*]', ']', json_str)
                    existing_build_orders = json.loads(json_str)
        except json.JSONDecodeError as e:
            log_warning(f"Could not parse existing build orders in {output_file}: {e}")
            log_info("Starting with an empty list of build orders.")
        except Exception as e:
            log_error(f"Error reading existing build orders: {e}")
            return

    # Initialize the list to hold build orders
    builds = existing_build_orders.copy()

    # List to keep track of normalized file names
    normalized_file_names = set()

    # Check if input_path is a file or directory
    if input_path.is_file() and input_path.suffix == '.json':
        json_files = [input_path]
    elif input_path.is_dir():
        json_files = list(input_path.rglob('*.json'))
    else:
        log_error(f"Input path '{input_path}' is neither a valid file nor directory.")
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
                log_warning(f"Missing fields '{', '.join(missing_fields)}' in file {json_file}. Skipping this file.")
                continue

            # Create a new entry for builds.js
            faction = data[game_field_mapping[game]['faction']]

            entry = {
                'name': data['name'],
                'faction': faction,
                'author': data.get('author', 'Unknown'),
                'content': data,
            }

            if game in ['sc2', 'wc3']:
                opponent_faction = data[game_field_mapping[game]['opponent_faction']]
                entry['opponent_faction'] = opponent_faction

            # Check for duplicate entries based on name (case-insensitive)
            if any(existing_entry['name'].lower() == entry['name'].lower() for existing_entry in builds):
                log_warning(f"An entry with the name '{entry['name']}' already exists. Skipping this file.")
                continue

            # Normalize the file name (replace non-alphanumeric with underscores)
            json_file_name = re.sub(r'[^a-zA-Z0-9]', '_', entry['name'].lower())

            # Check if the normalized file name already exists
            if json_file_name in normalized_file_names:
                log_warning(f"A file with the normalized name '{json_file_name}' already exists. Skipping this file.")
                continue

            builds.append(entry)
            normalized_file_names.add(json_file_name)

            # Generate individual JSON file for the build order
            json_file_path = json_output_dir / f"{json_file_name}.json"
            with open(json_file_path, 'w') as json_out_file:
                json.dump(entry['content'], json_out_file, indent=2)
            log_info(f"Generated JSON file: {json_file_path}")

        except Exception as e:
            log_error(f"Error processing file {json_file}: {e}")
            continue

    # Write the JavaScript file with the build orders
    with open(output_file, 'w') as f:
        f.write(f"const {game}_build_orders = [\n")
        for i, entry in enumerate(builds):
            json_entry = json.dumps(entry, indent=2)
            if i < len(builds) - 1:
                f.write(f"  {json_entry},\n")
            else:
                f.write(f"  {json_entry}\n")
        f.write("];\n")
    log_info(f"Updated {output_file} with {len(builds)} build orders.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Generate, update, or remove build orders for RTS games.')
    parser.add_argument('-g', '--game', type=str, help='Game acronym (aoe2, aoe4, aom, sc2, wc3)')
    parser.add_argument(
        '-i',
        '--input',
        type=str,
        help='Input BO JSON file or folder to process (containing the BO files).',
    )
    parser.add_argument(
        '--no-update',
        action='store_false',
        dest='update',
        help='Overwrite existing entries instead of updating them (default: update existing entries).',
    )
    parser.add_argument(
        '-r',
        '--remove',
        type=str,
        default='',
        help='Remove specific build orders. Format: "game|build_name;game|build_name". Example: "wc3|Undead_Bloody_Beginner_DK_Fiends;aoe2|19 Pop Feudal Drush"',
    )
    args = parser.parse_args()

    # Validate mutual exclusivity of -g/-i and -r
    if args.remove and (args.game or args.input):
        log_error("Cannot use -r (remove) with -g (game) or -i (input). Use either add/update or remove, not both.")
        exit(1)

    if not args.remove and not (args.game and args.input):
        log_error("Either -r (remove) or both -g (game) and -i (input) must be provided.")
        exit(1)

    # Process removals
    if args.remove:
        remove_entries = args.remove.split(';')
        for entry in remove_entries:
            if '|' not in entry:
                log_error(f"Invalid removal entry format: '{entry}'. Expected 'game|build_name'.")
                continue
            game, _ = entry.split('|', 1)
            remove_build_order(game, [entry])

    # Process updates/additions
    if args.game and args.input:
        update_build_orders(args.game, args.input, args.update)
