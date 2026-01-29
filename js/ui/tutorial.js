import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';
import { showConfirm } from './settings.js';

export const TUTORIALS = {
    BATTLE_DRAG: 'tutorial_battle_drag',
    LEVEL_UP: 'tutorial_levelup',
    LEVEL_UP_ACTION: 'tutorial_levelup_action',
    INSPECT: 'tutorial_inspect',
    BRAIN: 'tutorial_brain_ui',
    BRAIN_DRAG: 'tutorial_brain_drag'
};

export function showTutorialOverlay(targetElement, text, key, onComplete) {
    if(!targetElement || !targetElement.isConnected) return;
    
    // Check if already seen
    if(window.PLAYER && window.PLAYER[key]) return;

    // Check visibility (rudimentary)
    if(targetElement.offsetParent === null) return;

    const rect = targetElement.getBoundingClientRect();
    const handX = rect.left + rect.width/2;
    const handY = rect.top + rect.height/2;

    // Check if overlay already exists for THIS key
    let overlay = document.getElementById('tuto-overlay-' + key);
    if(overlay) {
        // Update position (Tracking)
        const hand = overlay.querySelector('.tuto-hand');
        if(hand) {
            hand.style.left = handX + 'px';
            hand.style.top = handY + 'px';
        }
        return;
    }

    // CLEANUP: Remove ANY other tutorial overlay to prevent stacking
    const existing = document.querySelectorAll('[id^="tuto-overlay-"]');
    existing.forEach(el => el.remove());

    // Create Overlay
    overlay = document.createElement('div');
    overlay.id = 'tuto-overlay-' + key;
    overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; pointer-events:none;";
    
    // Hand Cursor Animation (8-bit Pointer)
    const hand = document.createElement('div');
    hand.className = 'tuto-hand';
    hand.innerHTML = `<img src="${window.ICONS.pointer}" class="pixel-icon" style="width:64px; height:64px;">`;
    hand.style.cssText = `
        position:absolute; 
        left:${handX}px; 
        top:${handY}px; 
        animation: point 1s infinite alternate;
        filter: drop-shadow(2px 2px 0 black);
        pointer-events: none;
        z-index: 10000;
        transition: left 0.1s, top 0.1s;
    `;
    
    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.innerHTML = text;
    tooltip.className = "pixel-btn blue";
    tooltip.style.cssText = `
        position:absolute;
        left:50%; top:20%; transform:translateX(-50%);
        font-size:0.8rem; padding:15px; width:80%; max-width:300px;
        pointer-events:auto;
        display:flex; flex-direction:column; align-items:center; gap:10px;
    `;
    
    // Buttons Container
    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '10px';
    btnContainer.style.marginTop = '10px';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "OK";
    closeBtn.className = "pixel-btn green";
    closeBtn.style.margin = "0";
    closeBtn.onclick = () => {
        completeTutorial(key);
        document.body.removeChild(overlay);
        if(onComplete) onComplete();
    };
    btnContainer.appendChild(closeBtn);

    // Skip Button (Small)
    const skipBtn = document.createElement('button');
    skipBtn.innerHTML = "SKIP >>";
    skipBtn.className = "pixel-btn";
    skipBtn.style.cssText = "margin:0; background:#7f8c8d; font-size:0.6rem; padding:5px 10px;";
    skipBtn.onclick = () => {
        document.body.removeChild(overlay);
        // Show confirm
        if(window.showConfirm) {
            window.showConfirm("SKIP TUTORIAL?", window.t('tuto_skip_confirm'), () => {
                skipAllTutorials();
            });
        } else {
            skipAllTutorials();
        }
    };
    btnContainer.appendChild(skipBtn);

    tooltip.appendChild(btnContainer);

    overlay.appendChild(hand);
    overlay.appendChild(tooltip);
    
    // Style for pointer animation
    if(!document.getElementById('anim-point')) {
        const style = document.createElement('style');
        style.id = 'anim-point';
        style.innerHTML = `@keyframes point { from { transform: translateY(0) scale(1); } to { transform: translateY(10px) scale(0.9); } }`;
        document.head.appendChild(style);
    }

    document.body.appendChild(overlay);
}

export function completeTutorial(key) {
    if(window.PLAYER) {
        window.PLAYER[key] = true;
        saveData();
    }
    // Force remove overlay if it exists
    const overlay = document.getElementById('tuto-overlay-' + key);
    if(overlay) overlay.remove();
}

export function skipAllTutorials() {
    if(!window.PLAYER) return;
    Object.values(TUTORIALS).forEach(key => {
        window.PLAYER[key] = true;
    });
    // Also mark hardcoded string keys if any (legacy)
    window.PLAYER['tutorial_brain_drag'] = true;
    
    saveData();
    // Remove all overlays
    const existing = document.querySelectorAll('[id^="tuto-overlay-"]');
    existing.forEach(el => el.remove());
}
