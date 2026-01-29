import os
import re

def main():
    files = []
    for root, dirs, filenames in os.walk('js'):
        for f in filenames:
            if f.endswith('.js') and 'pixel_clash_offline' not in f:
                files.append(os.path.join(root, f))
    
    for path in files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # FIX 1: Replace `src=`${ICONS.xxx}`` with `src="${ICONS.xxx}"`
        # Regex explanation:
        # src=`\${ICONS\.([a-zA-Z0-9_]+)}`
        # Replace with src="${ICONS.\1}"
        
        # We need to handle cases where backticks might be used correctly elsewhere, but here the pattern is specific to the bad replacement.
        # The bad pattern looks like: src=`${ICONS.key}`
        
        # Note: In JS template literals, nesting backticks requires escaping, but here we just want the HTML attribute to have double quotes.
        # So: src="${ICONS.key}" is valid inside `...`
        
        content = re.sub(r'src=`\$\{ICONS\.([a-zA-Z0-9_]+)\}`', r'src="${ICONS.\1}"', content)
        
        # FIX 2: Check for other places where ICONS are used in attributes without quotes or with wrong quotes
        # Pattern: <img src=${ICONS.xxx} (missing quotes entirely, which is valid HTML5 but risky if URL has spaces - dataURLs don't usually, but good practice)
        # OR: <img src='${ICONS.xxx}' (single quotes inside backticks is fine: `<img src='${...}'>`)
        
        # Let's fix the specific `src=` pattern first.
        
        if content != original:
            print(f"Fixing attributes in {path}...")
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    main()
