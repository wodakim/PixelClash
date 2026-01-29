import { SKINS } from '../data/skins.js';
import { AUDIO } from '../engine/audio.js';
import { saveData } from '../core/storage.js';
import { showNotif } from './notifications.js';
import { startSkinRoulette } from './roulette.js';

export function openGachaDraw() {
    if(!window.PLAYER) return;
    if(window.PLAYER.gems < 10) { showNotif("ARÈNES", "Pas assez de gemmes !"); return; }
    window.PLAYER.gems -= 10;
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startSkinRoulette();
}

export function renderSkins() {
    const l = document.getElementById('skin-list');
    if(!l) return;
    l.innerHTML = '';
    if(!window.PLAYER) return;
    
    Object.keys(SKINS).forEach(key => {
        if(window.PLAYER.unlockedSkins.includes(key)) {
            const isActive = window.PLAYER.currentSkin === key;
            const d = document.createElement('div');
            d.className = 'skin-item ' + (isActive?'active':'');
            const icon = `<div style="width:20px; height:20px; background:${SKINS[key].bg}; border:1px solid white;"></div>`;
            d.innerHTML = `${icon} <span style="flex:1;">${SKINS[key].name}</span> ${isActive ? `<img src="${ICONS.check}" class="pixel-icon">` : ''}`;
            d.onclick = () => {
                window.PLAYER.currentSkin = key;
                if(AUDIO.isOn) AUDIO.playSFX('spawn');
                saveData();
                if(window.updateMetaUI) window.updateMetaUI();
            };
            l.appendChild(d);
        }
    });
}

window.openGachaDraw = openGachaDraw;
export function closeSkinModal() { document.getElementById('skin-modal').style.display='none'; };
window.closeSkinModal = closeSkinModal;
