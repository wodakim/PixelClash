from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000")

        # Wait for app to load
        page.wait_for_selector("#meta-view")

        # Helper to close notifications
        def close_notif():
            try:
                if page.locator("#notification-overlay").is_visible():
                    print("Closing notification...")
                    page.locator("#notification-overlay button").click()
                    time.sleep(0.5)
            except:
                pass

        close_notif()

        # 1. Open Settings
        print("Opening Settings...")
        page.click("#btn-settings-toggle")
        page.wait_for_selector("#settings-modal", state="visible")

        # 2. Switch to Polish
        print("Switching to Polish...")
        page.click("#btn-lang-pl")
        time.sleep(0.5)

        # Close Settings
        page.locator("#settings-modal button").last.click()
        time.sleep(0.5)

        close_notif()

        # 3. Go to Skins
        print("Navigating to Skins...")
        page.click(".nav-btn[data-target='tab-skins']")
        time.sleep(0.5)

        close_notif()

        # Debug: Evaluate t('cat_units')
        print("Evaluating t('cat_units')...")
        try:
            val = page.evaluate("window.t('cat_units')")
            print(f"t('cat_units') = {val}")

            lang_val = page.evaluate("window.LANG")
            print(f"window.LANG = {lang_val}")

            texts_val = page.evaluate("window.TEXTS && window.TEXTS.pl && window.TEXTS.pl.cat_units")
            print(f"TEXTS.pl.cat_units = {texts_val}")

        except Exception as e:
            print(f"Evaluation failed: {e}")

        # 4. Open Units Book
        print("Opening Units Book...")
        # Try finding by the value returned by t()
        book_name = "JEDNOSTKI"
        if page.get_by_text(book_name).is_visible():
             page.get_by_text(book_name).click()
        else:
             print(f"Button with text '{book_name}' not found. Clicking 'CAT_UNITS' if present.")
             if page.get_by_text("CAT_UNITS").is_visible():
                 page.get_by_text("CAT_UNITS").click()

        page.wait_for_selector("#book-overlay", state="visible")

        # 5. Screenshot Units List
        print("Screenshotting Units List...")
        time.sleep(1)
        page.screenshot(path="verification/units_list_pl.png")

        # Check for specific names in Polish
        content = page.content()
        if "Pixie Łuk" in content:
            print("SUCCESS: Found 'Pixie Łuk'")
        else:
            print("FAILED: 'Pixie Łuk' not found.")

        if "Mini P.E.K.K.A" in content:
            print("FAILED: Found 'Mini P.E.K.K.A'")
        else:
            print("SUCCESS: 'Mini P.E.K.K.A' not found")

        browser.close()

if __name__ == "__main__":
    run()
