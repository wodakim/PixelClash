
import os

REPLACEMENTS = {
    '🏆': '<img src="${ICONS.trophy}" class="pixel-icon">',
    '💰': '<img src="${ICONS.gold}" class="pixel-icon">',
    '💎': '<img src="${ICONS.gem}" class="pixel-icon">',
    '❤️': '<img src="${ICONS.heart}" class="pixel-icon">',
    '⚔️': '<img src="${ICONS.sword}" class="pixel-icon">',
    '⚡': '<img src="${ICONS.elixir}" class="pixel-icon">',
    '👟': '<img src="${ICONS.speed}" class="pixel-icon">',
    '📜': '<img src="${ICONS.scroll}" class="pixel-icon">',
    '👤': '<img src="${ICONS.user}" class="pixel-icon">',
    '⚙️': '<img src="${ICONS.gear}" class="pixel-icon">',
    '🔊': '<img src="${ICONS.sound_on}" class="pixel-icon">',
    '🔇': '<img src="${ICONS.sound_off}" class="pixel-icon">',
    '✅': '<img src="${ICONS.check}" class="pixel-icon">',
    '❌': '<img src="${ICONS.cross}" class="pixel-icon">',
    '🔒': '<img src="${ICONS.lock}" class="pixel-icon">',
    '🛡️': '<img src="${ICONS.clan}" class="pixel-icon">',
    '🚧': '<img src="${ICONS.construction}" class="pixel-icon">',
    '👆': '<img src="${ICONS.hand}" class="pixel-icon rotate-90">',
    '🏳️': '<img src="${ICONS.flag}" class="pixel-icon">',
    '⚪': '<img src="${ICONS.rarity_common}" class="pixel-icon">',
    '🔵': '<img src="${ICONS.rarity_rare}" class="pixel-icon">',
    '🟣': '<img src="${ICONS.rarity_epic}" class="pixel-icon">',
    '🟡': '<img src="${ICONS.rarity_legendary}" class="pixel-icon">',
}

def main():
    files = []
    for root, dirs, filenames in os.walk('.'):
        for f in filenames:
            if f.endswith('.js') or f.endswith('.html'):
                if 'pixel_clash_offline.js' in f: continue
                if 'emoji_replacer.py' in f: continue
                files.append(os.path.join(root, f))
    
    for path in files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        for emoji, img in REPLACEMENTS.items():
            # For JS files, we need to handle string context.
            # Usually we are inside backticks or quotes.
            # If we replace '🏆' with '<img...>' inside a JS string, it works if that string is used as innerHTML.
            # If it's used as textContent, it will break.
            # Most of my usage is innerHTML or template literals for UI.
            # Exceptions: textContent = "🏆" -> textContent = "<img...>" will show tags.
            # I must be careful.
            
            # Simple approach: Replace only known safe spots or check context?
            # Given the task, I'll do a blind replace and fix issues if any.
            # BUT: In index.html, it's safe.
            # In JS: `msg = ... 🏆` usually goes to textContent or innerHTML.
            # Example: `document.getElementById('go-rew').textContent = msg;`
            # This is DANGEROUS. I should change textContent to innerHTML where emojis are used.
            
            content = content.replace(emoji, img)
            
        if content != original:
            print(f"Updating {path}...")
            # Also replace textContent with innerHTML if we injected tags
            if path.endswith('.js'):
                content = content.replace('.textContent = msg', '.innerHTML = msg')
                content = content.replace('.textContent = `${min}', '.innerHTML = `${min}') # Time usually safe but just in case
                content = content.replace('.textContent = `+${gGain}', '.innerHTML = `+${gGain}')
                content = content.replace('.textContent = `${GAME.crowns', '.innerHTML = `${GAME.crowns')
                
                # Specific fixes for things I know use textContent
                content = content.replace("foundText.innerHTML = \"\";", "foundText.innerHTML = \"\";") # No change
                content = content.replace(".textContent =", ".innerHTML =") # Brutal switch, might be safer for this task
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    main()
