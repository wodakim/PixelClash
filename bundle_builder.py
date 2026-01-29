import os

ORDERED_FILES = [
    'js/data/config.js',
    'js/data/texts.js',
    'js/data/sprites_data.js',
    'js/data/cards.js',
    'js/data/modules.js',
    'js/data/skins.js',
    'js/data/skins_16bit.js',
    'js/engine/audio.js',
    'js/core/state.js',
    'js/core/utils.js',
    'js/engine/sprites.js',
    'js/core/storage.js',
    'js/ui/icons.js',
    'js/ui/notifications.js',
    'js/ui/tutorial.js',
    'js/system/leaderboard.js',
    'js/system/time.js',
    'js/system/background.js',
    'js/system/quests.js',
    'js/system/main.js',
    'js/ui/settings.js',
    'js/ui/deck.js',
    'js/game/brain.js',
    'js/ui/roulette.js',
    'js/ui/skins.js',
    'js/ui/collection.js',
    'js/ui/shop.js',
    'js/ui/leaderboard_ui.js',
    'js/ui/profile.js',
    'js/ui/meta.js',
    'js/ui/navigation.js',
    'js/game/kingdom.js',
    'js/game/battle.js',
    'js/window_expose.js',
    'js/main.js'
]

OUTPUT_FILE = 'js/pixel_clash_offline.js'

def process_content(content, filename):
    lines = content.split('\n')
    processed_lines = []
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('import '):
            continue
        if stripped.startswith('export '):
            if 'default' in stripped:
                print(f"WARNING: 'export default' found in {filename}.")
            if stripped.startswith('export {') or stripped.startswith('export  {'):
                continue
            line = line.replace('export ', '', 1)
        processed_lines.append(line)
    
    return '\n'.join(processed_lines)

def main():
    full_bundle = "// PIXEL CLASH OFFLINE BUNDLE\n// Auto-generated to fix CORS issues on file:// protocol\n\n"
    for filepath in ORDERED_FILES:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        processed = process_content(content, filepath)
        full_bundle += f"\n// --- START OF {filepath} ---\n{processed}\n// --- END OF {filepath} ---\n"
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(full_bundle)
    print(f"Bundle created at {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
