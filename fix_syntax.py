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
        
        # 1. Fix template literals used inside double/single quotes.
        # Pattern: " ... ${ICONS.xxx} ... " -> ` ... ${ICONS.xxx} ... `
        # We need to be careful not to break existing backticks.
        
        # Regex to find strings containing ${ICONS.
        # This is hard to regex perfectly, but we can look for specific patterns introduced by the replacer.
        # The replacer put: '<img src="${ICONS.xxx}" class="pixel-icon">'
        
        # Case A: Inside double quotes: " ... <img ...> ... "
        # Solution: Change wrapping quotes to backticks if we see ${ICONS.
        
        def replacer(match):
            s = match.group(0)
            if '${ICONS.' in s and not s.startswith('`'):
                # Strip outer quotes
                inner = s[1:-1]
                # If inner had backticks, escape them? Unlikely from emoji replacer.
                # If inner had ${}, it's now active.
                return '`' + inner + '`'
            return s

        # Match single or double quoted strings
        # simple regex, might miss complex cases but good for the generated mess
        content = re.sub(r'\"[^\"]*\$\{ICONS\.[^\"]*\"', replacer, content)
        content = re.sub(r"\'[^\']*\$\{ICONS\.[^\']*\'", replacer, content)
        
        # 2. Fix nested quotes in the image tag itself if any
        # The replacer inserted: <img src="${ICONS.xxx}" class="pixel-icon">
        # If this was inside a string using ", it became " ... <img src="${ICONS.xxx}" ... " -> Syntax Error
        # The `replacer` function above converts the outer " to `.
        # So ` ... <img src="${ICONS.xxx}" ... ` is valid JS template literal.
        # The double quotes inside the img tag ("${ICONS...}" and "pixel-icon") are fine inside backticks.
        
        # 3. Check for .innerHTML assignment vs .textContent
        # The python script did this: content.replace('.textContent =', '.innerHTML =')
        # We should verify this didn't break things.
        
        if content != original:
            print(f"Fixing syntax in {path}...")
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    main()
