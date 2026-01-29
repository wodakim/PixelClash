import { AUDIO } from '../engine/audio.js';
import { CARDS, RARITY_INFOS } from '../data/cards.js';
import { MODULES } from '../data/modules.js';
import { SKINS } from '../data/skins.js';
import { SKINS_16BIT_DATA } from '../data/16bit/main.js';
import { SPRITE_CACHE } from '../engine/sprites.js';
import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';
import { addCard } from '../core/state.js';
import { showNotif } from './notifications.js';

export function startModuleRoulette() {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = "MODULES...";

    const pool = Object.keys(MODULES);
    if(pool.length === 0) pool.push('block_v1');

    const winnerKey = pool[Math.floor(Math.random() * pool.length)];
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90;

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : pool[Math.floor(Math.random() * pool.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', MODULES[key].rarity || 'common');
        
        const m = MODULES[key];
        const preview = document.createElement('div');
        const miniSize = 8;
        preview.style.cssText = `position:relative; width:${m.shape[0].length * miniSize}px; height:${m.shape.length * miniSize}px;`;
        
        for(let r=0; r<m.shape.length; r++) {
            for(let c=0; c<m.shape[0].length; c++) {
                if(m.shape[r][c] === 1) {
                     const b = document.createElement('div');
                     b.style.cssText = `position:absolute; left:${c*miniSize}px; top:${r*miniSize}px; width:${miniSize}px; height:${miniSize}px; background:${m.color}; border:1px solid #fff;`;
                     preview.appendChild(b);
                }
            }
        }
        cardDiv.appendChild(preview);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight;
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showModuleRouletteResult(winnerKey);
    }, 5500);
}

function showModuleRouletteResult(key) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    window.PLAYER.modules.push(key);
    title.innerHTML = `<span style="color:#2ecc71">NOUVEAU MODULE !</span>`;
    spawnConfetti(window.innerWidth/2, window.innerHeight/2);
    if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));

    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    const m = MODULES[key];
    document.getElementById('roulette-name').textContent = t(key+'_name');
    document.getElementById('roulette-rarity').textContent = m.rarity.toUpperCase();
    document.getElementById('roulette-rarity').style.color = RARITY_INFOS[m.rarity] ? RARITY_INFOS[m.rarity].color : '#fff';

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    
    const miniSize = 12;
    const rows = m.shape.length;
    const cols = m.shape[0].length;
    const offX = (64 - (cols*miniSize))/2;
    const offY = (64 - (rows*miniSize))/2;
    
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(m.shape[r][c] === 1) {
                ctx.fillStyle = m.color;
                ctx.fillRect(offX + c*miniSize, offY + r*miniSize, miniSize-1, miniSize-1);
            }
        }
    }

    const btn = document.querySelector('#roulette-result .pixel-btn');
    btn.textContent = t('awesome');
    btn.onclick = closeRoulette;
}

export function startRoulette(isTutorial = false, isDefeat = false) {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = isDefeat ? "CONSOLATION..." : t('summoning');

    const pool = [];
    Object.keys(CARDS).forEach(k => {
        const r = CARDS[k].rarity;
        if(isTutorial && (r === 'legendary' || r === 'epic')) return;
        if(isDefeat && r !== 'common') return;
        const prob = RARITY_INFOS[r].prob;
        for(let i=0; i<prob; i++) pool.push(k);
    });

    if(pool.length === 0) pool.push('archer');

    const winnerKey = pool[Math.floor(Math.random() * pool.length)];
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90;

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : pool[Math.floor(Math.random() * pool.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', CARDS[key].rarity);
        const img = document.createElement('canvas');
        img.width = 48; img.height = 48;
        const ctx = img.getContext('2d');
        const s = SPRITE_CACHE[key];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 48, 48);
        cardDiv.appendChild(img);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight;
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showRouletteResult(winnerKey, isTutorial);
    }, 5500);
}

function showRouletteResult(key, isTutorial) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    const isNew = window.addCard(key, 1);
    
    if(isNew) {
        title.innerHTML = `<span style="color:#2ecc71">${t('awesome')}</span>`;
        spawnConfetti(window.innerWidth/2, window.innerHeight/2);
        if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));
    } else {
        title.innerHTML = `DOUBLON (+1)`;
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    }

    if(isTutorial) {
        window.PLAYER.tutorial_complete = true;
        title.innerHTML = `<span style="color:#2ecc71">CADEAU !</span>`;
    }

    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    document.getElementById('roulette-name').textContent = t(key+'_name');
    const rData = CARDS[key];
    document.getElementById('roulette-rarity').textContent = rData.rarity.toUpperCase();
    document.getElementById('roulette-rarity').style.color = RARITY_INFOS[rData.rarity].color;

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    const s = SPRITE_CACHE[key];
    if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 64, 64);

    if(rData.rarity === 'legendary') {
        if(AUDIO.isOn) AUDIO.playSFX('legendary');
        c.style.animation = 'pop 0.5s infinite alternate';
    } else { c.style.animation = 'none'; }

    const btn = document.querySelector('#roulette-result .pixel-btn');
    if(window.PLAYER.pending_roulette) {
        btn.textContent = "ENCORE UNE !";
    } else {
        btn.textContent = t('awesome');
    }
    btn.onclick = closeRoulette;
}

export function closeRoulette() {
    if(window.PLAYER.pending_roulette) {
        window.PLAYER.pending_roulette = false;
        saveData();
        startRoulette();
        return;
    }
    document.getElementById('roulette-modal').style.display='none';
}

export function startSkinRoulette() {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = "SELECTION...";

    const allSkins = Object.keys(SKINS);
    const winnerKey = allSkins[Math.floor(Math.random() * allSkins.length)];
    
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90; 

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : allSkins[Math.floor(Math.random() * allSkins.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', 'epic');
        
        const skinData = SKINS[key];
        const preview = document.createElement('div');
        preview.style.cssText = `width:48px; height:48px; background:${skinData.bg}; border:2px solid #fff; box-shadow:0 0 5px rgba(0,0,0,0.5);`;
        cardDiv.appendChild(preview);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight; 
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showSkinResult(winnerKey);
    }, 5500);
}

function showSkinResult(key) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');
    
    const isNew = !window.PLAYER.unlockedSkins.includes(key);
    
    if(isNew) {
        window.PLAYER.unlockedSkins.push(key);
        title.innerHTML = `NOUVEAU SKIN !`;
        spawnConfetti(window.innerWidth/2, window.innerHeight/2);
        if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));
    } else {
        window.PLAYER.gold += 50;
        title.innerHTML = `DOUBLON (+50 Or)`;
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    }
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    document.getElementById('roulette-name').textContent = SKINS[key].name;
    document.getElementById('roulette-rarity').textContent = "ARENA";
    document.getElementById('roulette-rarity').style.color = "#fff";

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    ctx.fillStyle = SKINS[key].bg;
    ctx.fillRect(0,0,64,64);
}

export function start16BitRoulette() {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = "EVOLUTION...";

    // Collect all possible keys and check which are unlocked
    let pool = [];

    ['arena', 'units', 'ui', 'deck', 'kingdom'].forEach(cat => {
        if(SKINS_16BIT_DATA[cat]) {
            Object.keys(SKINS_16BIT_DATA[cat]).forEach(key => {
                if(!window.PLAYER.unlocked_16bit.includes(key)) {
                    pool.push({ key: key, cat: cat, data: SKINS_16BIT_DATA[cat][key] });
                }
            });
        }
    });

    // Fallback if complete
    if(pool.length === 0) {
        showNotif("EVOLUTION", "COLLECTION COMPLÈTE !");
        window.PLAYER.gems += 50;
        saveData();
        closeRoulette();
        return;
    }

    const winnerItem = pool[Math.floor(Math.random() * pool.length)];
    const winnerKey = winnerItem.key;

    // Fill Tape
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90;

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let item = (i === WIN_INDEX) ? winnerItem : pool[Math.floor(Math.random() * pool.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', 'legendary');

        const preview = document.createElement('div');
        preview.style.cssText = "width:48px; height:48px; border:2px solid #fff; box-shadow:0 0 5px rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; background:#222;";

        // Render preview based on cat
        if(item.cat === 'arena') {
            preview.style.background = item.data.bg;
        } else if(item.cat === 'units') {
            // Draw sprite
            const c = document.createElement('canvas'); c.width=48; c.height=48;
            const cx = c.getContext('2d');
            // Try to find sprite
            const s = SPRITE_CACHE[item.key + '_16bit_blue_0'] || SPRITE_CACHE[item.key + '_16bit_blue'] || SPRITE_CACHE[item.key + '_16bit'] || SPRITE_CACHE[item.key];
            if(s) {
                 // Calculate aspect ratio fit
                 cx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 48, 48);
            }
            preview.appendChild(c);
        } else {
             preview.innerHTML = `<span style="font-size:20px; color:white;">?</span>`;
        }

        cardDiv.appendChild(preview);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight;
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        show16BitResult(winnerItem);
    }, 5500);
}

function show16BitResult(item) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    window.PLAYER.unlocked_16bit.push(item.key);
    title.innerHTML = `EVOLUTION !`;
    spawnConfetti(window.innerWidth/2, window.innerHeight/2);
    if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));

    // Check Total Completion
    let totalItems = 0;
    ['arena', 'units', 'ui', 'deck'].forEach(cat => {
        if(SKINS_16BIT_DATA[cat]) totalItems += Object.keys(SKINS_16BIT_DATA[cat]).length;
    });

    if(window.PLAYER.unlocked_16bit.length >= totalItems) {
        setTimeout(() => {
            showNotif("16-BIT UNIVERSE", "TRANSITION COMPLÈTE !");
        }, 1000);
    }

    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    document.getElementById('roulette-name').textContent = item.data.name;
    document.getElementById('roulette-rarity').textContent = item.cat.toUpperCase();
    document.getElementById('roulette-rarity').style.color = "#f1c40f";

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);

    if(item.cat === 'arena') {
        ctx.fillStyle = item.data.bg;
        ctx.fillRect(0,0,64,64);
    } else if(item.cat === 'units') {
        const s = SPRITE_CACHE[item.key + '_16bit_blue_0'] || SPRITE_CACHE[item.key + '_16bit_blue'] || SPRITE_CACHE[item.key + '_16bit'];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 64, 64);
    } else {
        ctx.fillStyle = '#555';
        ctx.fillRect(0,0,64,64);
        ctx.fillStyle = '#fff';
        ctx.font = '30px Arial';
        ctx.fillText("?", 20, 42);
    }
}

window.closeRoulette = closeRoulette;

function spawnConfetti(x, y) {
    const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
    for(let i=0; i<30; i++) {
        const div = document.createElement('div');
        div.style.cssText = `position:fixed; left:${x}px; top:${y}px; width:6px; height:6px; background:${colors[Math.floor(Math.random()*colors.length)]}; z-index:500; pointer-events:none;`;
        document.body.appendChild(div);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        
        let t = 0;
        const loop = () => {
            t += 0.05;
            vx *= 0.95;
            vy += 0.5; // gravity
            div.style.left = (parseFloat(div.style.left) + vx) + 'px';
            div.style.top = (parseFloat(div.style.top) + vy) + 'px';
            
            if(t < 2.0) requestAnimationFrame(loop);
            else div.remove();
        };
        requestAnimationFrame(loop);
    }
}
