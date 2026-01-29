from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Load the page
        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")
        
        # Wait for page load (bundle execution)
        page.wait_for_timeout(2000)
        
        # Trigger a dummy tutorial overlay on an existing element (e.g., DECK button)
        # We also check if the Arrow is White (via screenshot inspection later)
        page.evaluate("""
            const target = document.querySelector('[data-target="tab-deck"]');
            window.showTutorialOverlay(target, "TEST TUTORIAL ARROW", "test_key");
        """)
        
        page.wait_for_timeout(1000)
        
        # Take screenshot
        page.screenshot(path="verification/tutorial_check.png")
        
        browser.close()

if __name__ == "__main__":
    run()
