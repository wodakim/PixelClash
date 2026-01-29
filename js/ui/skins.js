import { SKINS } from '../data/skins.js';
import { SKINS_16BIT_DATA } from '../data/skins_16bit.js';
import { AUDIO } from '../engine/audio.js';
import { saveData } from '../core/storage.js';
import { showNotif } from './notifications.js';
import { startSkinRoulette, start16BitRoulette } from './roulette.js';

export function openGachaDraw() {
    if(!window.PLAYER) return;
    if(window.PLAYER.gems < 10) { showNotif("ARÈNES", "Pas assez de gemmes !"); return; }
    window.PLAYER.gems -= 10;
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startSkinRoulette();
}

export function open16BitGacha() {
    if(!window.PLAYER) return;
    if(window.PLAYER.gems < 50) { showNotif("EVOLUTION", "Pas assez de gemmes !"); return; }
    window.PLAYER.gems -= 50;
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    start16BitRoulette();
}
window.open16BitGacha = open16BitGacha;

export function renderSkins() {
    const l = document.getElementById('skin-list');
    if(!l) return;
    l.innerHTML = '';
    if(!window.PLAYER) return;
    
    // Container for Books
    const shelf = document.createElement('div');
    shelf.className = 'bookshelf';
    shelf.style.cssText = "display:flex; flex-wrap:wrap; gap:15px; justify-content:center; padding:10px;";

    const books = [
        { id: 'arena', name: "ARÈNE", icon: 'book' },
        { id: 'units', name: "UNITÉS", icon: 'book' },
        { id: 'ui',    name: "INTERFACE",    icon: 'book' },
        { id: 'deck',  name: "DECK",  icon: 'book' }
    ];

    books.forEach(b => {
        const div = document.createElement('div');
        div.className = 'pixel-btn';
        div.style.cssText = "display:flex; flex-direction:column; align-items:center; width:80px; height:80px; justify-content:center; padding:0;";
        div.innerHTML = `
            <img src="${window.ICONS[b.icon]}" class="pixel-icon" style="width:32px; height:32px;">
            <span style="font-size:0.6rem; margin-top:5px;">${b.name}</span>
        `;
        div.onclick = () => openBook(b.id);
        shelf.appendChild(div);
    });

    l.appendChild(shelf);

    // Roulette Buttons Container
    const btnContainer = document.createElement('div');
    btnContainer.style.cssText = "display:flex; flex-direction:column; gap:10px; margin-top:20px; width:100%; align-items:center;";

    // Old Roulette (8-bit Arena)
    const oldBtn = document.createElement('button');
    oldBtn.className = 'pixel-btn blue';
    oldBtn.innerHTML = `ARÈNE 8-BIT (10 <img src="${window.ICONS.gem}" class="pixel-icon">)`;
    oldBtn.onclick = openGachaDraw;
    btnContainer.appendChild(oldBtn);

    // New Roulette (16-bit)
    const newBtn = document.createElement('button');
    newBtn.className = 'pixel-btn purple';
    newBtn.innerHTML = `EVOLUTION 16-BIT (50 <img src="${window.ICONS.gem}" class="pixel-icon">)`;
    newBtn.onclick = open16BitGacha;
    btnContainer.appendChild(newBtn);

    l.appendChild(btnContainer);
}

function openBook(category) {
    let overlay = document.getElementById('book-overlay');
    if(!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'book-overlay';
        overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:2000; display:flex; justify-content:center; align-items:center;";
        overlay.onclick = (e) => { if(e.target === overlay) closeBook(); };
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'flex';

    const content = document.createElement('div');
    content.className = 'book-content';
    content.style.cssText = "width:300px; max-height:80%; background:#8d6e63; border:4px solid #5d4037; padding:10px; overflow-y:auto; position:relative; box-shadow: 0 0 10px #000; color:white; font-family:'Press Start 2P', monospace;";

    // Close Btn
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = `<img src="${window.ICONS.cross}" class="pixel-icon">`;
    closeBtn.style.cssText = "position:absolute; top:5px; right:5px; cursor:pointer; z-index:10;";
    closeBtn.onclick = closeBook;
    content.appendChild(closeBtn);

    const title = document.createElement('div');
    title.textContent = category.toUpperCase();
    title.style.cssText = "text-align:center; margin-bottom:15px; text-decoration:underline;";
    content.appendChild(title);

    const list = document.createElement('div');
    list.style.cssText = "display:flex; flex-direction:column; gap:8px;";

    // 1. ARENA BOOK
    if(category === 'arena') {
        // 8-Bit Header
        const h8 = document.createElement('div'); h8.innerHTML = "--- 8-BIT ---"; h8.style.textAlign='center'; list.appendChild(h8);

        Object.keys(SKINS).forEach(key => {
            if(window.PLAYER.unlockedSkins.includes(key)) {
                const isActive = window.PLAYER.currentSkin === key;
                const d = createItemRow(SKINS[key].name, isActive, () => {
                    window.PLAYER.currentSkin = key;
                    refreshBook(category);
                }, SKINS[key].bg);
                list.appendChild(d);
            }
        });

        // 16-Bit Header
        const h16 = document.createElement('div'); h16.innerHTML = "--- 16-BIT ---"; h16.style.textAlign='center'; h16.style.marginTop='10px'; list.appendChild(h16);

        Object.keys(SKINS_16BIT_DATA.arena).forEach(key => {
            const unlocked = window.PLAYER.unlocked_16bit.includes(key);
            if(unlocked) {
                const isActive = window.PLAYER.active_16bit.arena === key;
                const d = createItemRow(SKINS_16BIT_DATA.arena[key].name, isActive, () => {
                    // Toggle
                    if(window.PLAYER.active_16bit.arena === key) window.PLAYER.active_16bit.arena = null;
                    else window.PLAYER.active_16bit.arena = key;
                    refreshBook(category);
                }, SKINS_16BIT_DATA.arena[key].bg);
                list.appendChild(d);
            }
        });
    }

    // 2. UNITS BOOK
    else if(category === 'units') {
        Object.keys(SKINS_16BIT_DATA.units).forEach(key => {
            const unlocked = window.PLAYER.unlocked_16bit.includes(key);
            if(unlocked) {
                const isActive = window.PLAYER.active_16bit.units.includes(key);
                const d = createItemRow(SKINS_16BIT_DATA.units[key].name, isActive, () => {
                    const idx = window.PLAYER.active_16bit.units.indexOf(key);
                    if(idx >= 0) window.PLAYER.active_16bit.units.splice(idx, 1);
                    else window.PLAYER.active_16bit.units.push(key);
                    refreshBook(category);
                });
                list.appendChild(d);
            }
        });
    }

    // 3. UI BOOK
    else if(category === 'ui') {
        Object.keys(SKINS_16BIT_DATA.ui).forEach(key => {
            const unlocked = window.PLAYER.unlocked_16bit.includes(key);
            if(unlocked) {
                const isSelected = window.PLAYER.active_16bit.ui === key;

                const d = createItemRow(SKINS_16BIT_DATA.ui[key].name, isSelected, () => {
                    if(window.PLAYER.active_16bit.ui === key) window.PLAYER.active_16bit.ui = false;
                    else window.PLAYER.active_16bit.ui = key;
                    refreshBook(category);
                });
                list.appendChild(d);
            }
        });
    }

    // 4. DECK BOOK
    else if(category === 'deck') {
        Object.keys(SKINS_16BIT_DATA.deck).forEach(key => {
            const unlocked = window.PLAYER.unlocked_16bit.includes(key);
            if(unlocked) {
                const isSelected = window.PLAYER.active_16bit.deck === key;
                const d = createItemRow(SKINS_16BIT_DATA.deck[key].name, isSelected, () => {
                    if(window.PLAYER.active_16bit.deck === key) window.PLAYER.active_16bit.deck = false;
                    else window.PLAYER.active_16bit.deck = key;
                    refreshBook(category);
                });
                list.appendChild(d);
            }
        });
    }

    content.appendChild(list);
    overlay.innerHTML = '';
    overlay.appendChild(content);
}

function createItemRow(name, isActive, onClick, color=null) {
    const d = document.createElement('div');
    d.className = 'skin-item ' + (isActive?'active':'');
    d.style.cssText = "display:flex; align-items:center; background:rgba(0,0,0,0.3); padding:5px; border:1px solid #5d4037; cursor:pointer;";
    if(isActive) d.style.background = 'rgba(255,255,255,0.2)';

    let icon = '';
    if(color) {
         icon = `<div style="width:20px; height:20px; background:${color}; border:1px solid white; margin-right:10px;"></div>`;
    } else {
         icon = `<div style="width:20px; height:20px; border:1px solid white; margin-right:10px; display:flex; align-items:center; justify-content:center;">?</div>`;
    }

    d.innerHTML = `${icon} <span style="flex:1;">${name}</span> ${isActive ? `<img src="${window.ICONS.check}" class="pixel-icon">` : ''}`;
    d.onclick = () => {
        onClick();
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
        saveData();
    };
    return d;
}

function refreshBook(category) {
    openBook(category); // Re-render
}

function closeBook() {
    const o = document.getElementById('book-overlay');
    if(o) o.style.display = 'none';
}

export function closeSkinModal() { document.getElementById('skin-modal').style.display='none'; };
window.closeSkinModal = closeSkinModal;
