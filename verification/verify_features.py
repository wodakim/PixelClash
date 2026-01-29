from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Navigate to the game
        page.goto("http://localhost:8000")
        
        page.wait_for_load_state("networkidle")
        time.sleep(2)
        
        # 1. Verify Quest Button
        print("Checking Quest Button...")
        page.wait_for_selector("#btn-quests")
        page.screenshot(path="verification/ui_home_quests.png")
        print("Home screenshot saved.")
        
        # Click Quest Button
        page.click("#btn-quests")
        time.sleep(1)
        page.screenshot(path="verification/ui_quest_modal.png")
        print("Quest modal screenshot saved.")
        
        # Close modal
        page.click("#quest-modal button")
        time.sleep(0.5)

        # 2. Verify Shop IAP
        print("Checking Shop IAP...")
        page.click('.nav-btn[data-target="tab-shop"]')
        time.sleep(1)
        page.screenshot(path="verification/ui_shop_iap.png")
        print("Shop screenshot saved.")

        # 3. Verify Ads in Game
        print("Checking Game Ads...")
        # Start battle to see game view
        # We need to click "COMBAT !" on home first
        page.click('.nav-btn[data-target="tab-home"]')
        time.sleep(0.5)
        page.click('#btn-battle-start')
        
        # Wait for matchmaking (fake delay 3.5s)
        time.sleep(5) 
        
        # Now in game view
        page.screenshot(path="verification/ui_game_ads.png")
        print("Game ads screenshot saved.")
        
        browser.close()

if __name__ == "__main__":
    run()
