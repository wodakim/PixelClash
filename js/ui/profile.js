import { saveData } from '../core/storage.js';
import { showNotif } from './notifications.js';
import { SPRITE_CACHE } from '../engine/sprites.js';
import { t } from '../core/utils.js';
import { AUDIO } from '../engine/audio.js';

export function initProfile() {
    renderProfileDrawer();
    checkPostTutorialProfile();
}

export function checkPostTutorialProfile() {
    // If tutorial is complete but nickname is still default "Player", open drawer
    if(window.PLAYER.tutorial_complete && window.PLAYER.nickname === 'Player') {
        setTimeout(() => {
            openProfileDrawer();
            showNotif("PROFIL", "Créez votre Pseudo !");
        }, 1000);
    }
}

export function openProfileDrawer() {
    const drawer = document.getElementById('profile-drawer');
    const toggle = document.getElementById('profile-toggle');
    const overlay = document.getElementById('profile-overlay');
    if(drawer) {
        if(drawer.classList.contains('open')) {
            closeProfileDrawer();
            return;
        }
        drawer.classList.add('open');
        if(overlay) overlay.style.display = 'block';
        if(toggle) {
            // Move ribbon with drawer
            const w = drawer.getBoundingClientRect().width;
            toggle.style.transform = `translateX(-${w}px)`;
        }
        updateProfileUI();
    }
}
window.openProfileDrawer = openProfileDrawer;

export function closeProfileDrawer() {
    const drawer = document.getElementById('profile-drawer');
    const toggle = document.getElementById('profile-toggle');
    const overlay = document.getElementById('profile-overlay');
    if(drawer) {
        drawer.classList.remove('open');
        if(overlay) overlay.style.display = 'none';
        if(toggle) toggle.style.transform = 'translateX(0)';
    }
}
window.closeProfileDrawer = closeProfileDrawer;

export function updateProfileUI() {
    const p = window.PLAYER;
    
    // Nickname
    const nickInput = document.getElementById('profile-nick-input');
    if(nickInput) nickInput.value = p.nickname;
    
    // Price Button
    const btnNick = document.getElementById('btn-change-nick');
    if(btnNick) {
        if(p.free_nick_change) {
            btnNick.innerHTML = "GRATUIT";
            btnNick.className = "pixel-btn green";
        } else {
            btnNick.innerHTML = `<img src="${ICONS.gem}" class="pixel-icon"> 50`;
            btnNick.className = "pixel-btn purple";
        }
    }

    // Avatar Preview
    const avatarCanvas = document.getElementById('profile-avatar-preview');
    if(avatarCanvas) {
        const ctx = avatarCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0,0,64,64);
        const s = SPRITE_CACHE[p.avatar] || SPRITE_CACHE['knight'];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 64, 64);
    }
    
    // Country
    const flagDisplay = document.getElementById('profile-flag-display');
    if(flagDisplay) flagDisplay.innerHTML = p.country;
}

export function changeNickname() {
    const nickInput = document.getElementById('profile-nick-input');
    const newNick = nickInput.value.trim();
    
    if(newNick.length < 3 || newNick.length > 12) {
        showNotif("ERREUR", "3 à 12 caractères !");
        return;
    }
    
    if(newNick === window.PLAYER.nickname) return;

    if(window.PLAYER.free_nick_change) {
        window.PLAYER.nickname = newNick;
        window.PLAYER.free_nick_change = false;
        saveData();
        updateProfileUI();
        showNotif("SUCCÈS", "Pseudo modifié !");
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
    } else {
        if(window.PLAYER.gems >= 50) {
            window.PLAYER.gems -= 50;
            window.PLAYER.nickname = newNick;
            saveData();
            updateProfileUI();
            if(window.updateMetaUI) window.updateMetaUI(); // Update gems
            showNotif("SUCCÈS", "Pseudo modifié !");
            if(AUDIO.isOn) AUDIO.playSFX('spawn');
        } else {
            showNotif("ERREUR", "Pas assez de gemmes !");
        }
    }
}
window.changeNickname = changeNickname;

export function setCountry(flag) {
    // Flag is now HTML string with img tag
    window.PLAYER.country = flag;
    saveData();
    updateProfileUI();
}
window.setCountry = setCountry;

export function setAvatar(key) {
    window.PLAYER.avatar = key;
    saveData();
    updateProfileUI();
}
window.setAvatar = setAvatar;

function renderProfileDrawer() {
    // Check if drawer exists, if not create it
    if(document.getElementById('profile-drawer')) return;

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.id = 'profile-overlay';
    overlay.onclick = closeProfileDrawer;
    document.body.appendChild(overlay);

    const drawer = document.createElement('div');
    drawer.id = 'profile-drawer';
    
    drawer.innerHTML = `
        <div class="profile-content">
            <h2 style="color:#f1c40f; text-align:center; margin-top:0;">MON PROFIL</h2>
            
            <!-- AVATAR SECTION -->
            <div style="display:flex; flex-direction:column; align-items:center; margin-bottom:20px;">
                <canvas id="profile-avatar-preview" width="64" height="64" style="border:4px solid white; background:#222; margin-bottom:10px; transform:scale(1.5);"></canvas>
                <div style="font-size:0.6rem; color:#aaa;">AVATAR</div>
                <div id="avatar-selector" style="display:flex; gap:5px; margin-top:10px; overflow-x:auto; width:100%; padding-bottom:10px;">
                    <!-- Auto-filled -->
                </div>
            </div>

            <!-- NICKNAME SECTION -->
            <div style="background:rgba(0,0,0,0.3); padding:10px; border:2px solid #555; margin-bottom:20px;">
                <label style="font-size:0.6rem; color:#aaa;">PSEUDO</label>
                <div style="display:flex; gap:10px; margin-top:5px;">
                    <input type="text" id="profile-nick-input" style="width: 100%; flex:1; background:#222; border:2px solid #fff; color:white; padding:5px; font-family:inherit;" maxlength="12">
                </div>
                <button id="btn-change-nick" onclick="changeNickname()" style="width:100%; margin-top:10px; font-size:0.7rem; padding:10px;">GRATUIT</button>
            </div>

            <!-- COUNTRY SECTION -->
            <div style="background:rgba(0,0,0,0.3); padding:10px; border:2px solid #555;">
                <label style="font-size:0.6rem; color:#aaa;">PAYS</label>
                <div style="font-size:2rem; text-align:center; margin:10px;" id="profile-flag-display"><img src="${ICONS.flag}" class="pixel-icon"></div>
                <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:5px; max-height:150px; overflow-y:auto;">
                    ${getFlagOptions()}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(drawer);
    
    // Fill avatars
    const avatarContainer = drawer.querySelector('#avatar-selector');
    // Add default unit icons
    ['knight', 'archer', 'giant', 'skeleton', 'wizard', 'witch'].forEach(key => {
        const btn = document.createElement('div');
        btn.style.cssText = "width:40px; height:40px; border:2px solid #555; background:#222; flex-shrink:0; cursor:pointer; display:flex; justify-content:center; align-items:center;";
        const c = document.createElement('canvas'); c.width=32; c.height=32;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        // Wait for sprites to load? They should be loaded by now if initProfile is called in initApp
        setTimeout(() => {
             const s = SPRITE_CACHE[key];
             if(s) ctx.drawImage(s,0,0,s.width, s.height, 0,0,32,32);
        }, 100);
        btn.appendChild(c);
        btn.onclick = () => setAvatar(key);
        avatarContainer.appendChild(btn);
    });
}

function getFlagOptions() {
    // For now, replacing flags with generic icon + code is complex without more assets. 
    // I will use the generic flag icon + text code to adhere to "No Emoji" strictly.
    const flags = ['FR','US','GB','DE','ES','IT','BR','JP','KR','CN','RU','CA','AU','IN','EU'];
    return flags.map(f => {
        const html = `<img src="${ICONS.flag}" class="pixel-icon"> ${f}`;
        // Note: passing HTML string to setCountry needs to be handled carefully in updateProfileUI
        // But setCountry just stores string.
        // We need to pass the HTML string in the onclick using template literal carefully.
        // Escaping quote for onclick:
        const safeHtml = `<img src='${ICONS.flag}' class='pixel-icon'> ${f}`;
        return `<button onclick="setCountry(\`${safeHtml}\`)" style="font-size:0.8rem; background:none; border:none; cursor:pointer; color:white;">${safeHtml}</button>`;
    }).join('');
}
