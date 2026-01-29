import { saveData } from '../core/storage.js';
import { AUDIO } from '../engine/audio.js';
import { LANG, setLang } from '../core/state.js';
import { t } from '../core/utils.js';
import { TUTORIALS } from './tutorial.js';

export function toggleSettings() {
    const el = document.getElementById('settings-modal');

    // Inject Restart Tutorial Button if missing
    if(!document.getElementById('btn-restart-tuto')) {
        const btn = document.createElement('button');
        btn.id = 'btn-restart-tuto';
        btn.className = 'pixel-btn';
        btn.style.cssText = "width:100%; margin:10px 0; background:#e67e22;";
        // btn.setAttribute('data-lang', 'restart_tuto'); 
        // We set text content directly with translation to be safe, or use attribute if system supports it dynamic
        btn.textContent = t('restart_tuto'); 
        btn.onclick = confirmRestartTutorial;
        
        // Insert before Close button (last child usually) or Reset Data
        const container = el.children[0];
        // Find Reset Data button to insert before, or just before last child (Close)
        // Let's insert before the "FERMER" button which is likely the last one
        const closeBtn = container.lastElementChild;
        container.insertBefore(btn, closeBtn);
    }
    
    // Update label just in case lang changed
    const btn = document.getElementById('btn-restart-tuto');
    if(btn) btn.textContent = t('restart_tuto');

    el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
}

export function switchLanguage() {
    const newLang = (LANG === 'fr') ? 'en' : 'fr';
    setLang(newLang);
    if(window.PLAYER) window.PLAYER.settings.lang = newLang;
    
    // Call global update
    if(window.updateAllText) window.updateAllText();
    saveData();
}

export function toggleDayNight() {
    if(window.PLAYER) {
        window.PLAYER.settings.theme = (window.PLAYER.settings.theme === 'dark') ? 'light' : 'dark';
        applyTheme();
        if(window.updateButtonLabels) window.updateButtonLabels();
        saveData();
    }
}

export function applyTheme() {
    if(!window.PLAYER) return;
    if(window.PLAYER.settings.theme === 'light') document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
}

export function showConfirm(title, message, onYes) {
    const el = document.getElementById('confirm-modal');
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    
    const btnYes = document.getElementById('btn-confirm-yes');
    const btnNo = document.getElementById('btn-confirm-no');
    
    // Clean up old listeners
    const newYes = btnYes.cloneNode(true);
    const newNo = btnNo.cloneNode(true);
    btnYes.parentNode.replaceChild(newYes, btnYes);
    btnNo.parentNode.replaceChild(newNo, btnNo);
    
    newYes.onclick = () => {
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
        el.style.display = 'none';
        if(onYes) onYes();
    };
    
    newNo.onclick = () => {
        if(AUDIO.isOn) AUDIO.playSFX('hit');
        el.style.display = 'none';
    };
    
    el.style.display = 'flex';
    if(AUDIO.isOn) AUDIO.playSFX('spawn');
}

export function confirmReset() {
    showConfirm("ATTENTION", t('reset_data') + " ?", () => {
        localStorage.removeItem('pixel_clash_launch_v1');
        location.reload();
    });
}

export function confirmRestartTutorial() {
    showConfirm("TUTORIAL", t('tuto_restart_confirm'), () => {
         Object.values(TUTORIALS).forEach(k => {
             if(window.PLAYER) window.PLAYER[k] = false;
         });
         saveData();
         location.reload();
    });
}

window.toggleSettings = toggleSettings;
window.switchLanguage = switchLanguage;
window.toggleDayNight = toggleDayNight;
window.confirmReset = confirmReset;
window.showConfirm = showConfirm;
window.confirmRestartTutorial = confirmRestartTutorial;
