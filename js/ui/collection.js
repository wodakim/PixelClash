import { SPRITE_CACHE } from '../engine/sprites.js';
import { CARDS, RARITY_INFOS, UPGRADE_COSTS, getUnitStats } from '../data/cards.js';
import { AUDIO } from '../engine/audio.js';
import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';
import { showNotif } from './notifications.js';
import { renderDeckVisuals } from './deck.js';
import { showTutorialOverlay, completeTutorial, TUTORIALS } from './tutorial.js';

export function renderCollection() {
    const g = document.getElementById('collection');
    if(!g) return;
    
    // CONTEXT CHECK: Only run tutorials if the Deck tab is active
    const isDeckActive = document.getElementById('tab-deck').classList.contains('active');
    
    g.innerHTML = '';

    const rarityOrder = { legendary:0, epic:1, rare:2, common:3 };
    const sortedKeys = Object.keys(CARDS).sort((a,b) => {
        const inDeckA = window.PLAYER.deck.includes(a);
        const inDeckB = window.PLAYER.deck.includes(b);
        if(inDeckA && !inDeckB) return -1;
        if(!inDeckA && inDeckB) return 1;
        
        const rA = rarityOrder[CARDS[a].rarity];
        const rB = rarityOrder[CARDS[b].rarity];
        if(rA !== rB) return rA - rB;

        const hasA = window.hasCard(a);
        const hasB = window.hasCard(b);
        if(hasA && !hasB) return -1;
        if(!hasA && hasB) return 1;
        
        return 0;
    });

    renderDeckVisuals();

    let canUpgradeAny = false;
    let firstUpgradeable = null;

    sortedKeys.forEach(key => {
        const cardData = CARDS[key];
        const has = window.hasCard(key);
        const inDeck = window.PLAYER.deck.includes(key);

        const el = document.createElement('div');
        el.className = `pixel-card ${has?'':'locked'} ${inDeck?'in-deck':''}`;
        el.setAttribute('data-rarity', cardData.rarity);

        el.innerHTML = `
            <div class="card-cost">${cardData.cost}</div>
            <div class="card-name">${t(key+'_name')}</div>
        `;

        const c = document.createElement('canvas');
        c.width=64; c.height=64; c.className='card-preview';
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        const s = SPRITE_CACHE[key + '_blue_0'] || SPRITE_CACHE[key + '_blue'] || SPRITE_CACHE[key];
        if(s) ctx.drawImage(s,0,0,s.width,s.height,0,0,64,64);
        el.appendChild(c);

        if(has) {
            const lvl = window.getCardLevel(key);
            const count = window.getCardCount(key);
            
            const lvlBadge = document.createElement('div');
            lvlBadge.className = 'card-level';
            lvlBadge.innerHTML = `Lv.${lvl}`;
            el.appendChild(lvlBadge);

            if(lvl < UPGRADE_COSTS.length) {
                 const reqCards = UPGRADE_COSTS[lvl].cards;
                 const reqGold = UPGRADE_COSTS[lvl].gold;
                 
                 const progWrap = document.createElement('div');
                 progWrap.className = 'card-progress-wrap';
                 const pct = Math.min(100, (count / reqCards) * 100);
                 progWrap.innerHTML = `<div class="card-progress-fill" style="width:${pct}%"></div>`;
                 el.appendChild(progWrap);

                 if(count >= reqCards && window.PLAYER.gold >= reqGold) {
                     const upBtn = document.createElement('div');
                     upBtn.className = 'upgrade-btn-mini';
                     upBtn.innerHTML = 'UP !';
                     upBtn.onclick = (e) => { e.stopPropagation(); upgradeCard(key); };
                     el.appendChild(upBtn);
                     canUpgradeAny = true;
                     if(!firstUpgradeable) firstUpgradeable = el;
                 }
            } else {
                 const maxLbl = document.createElement('div');
                 maxLbl.style.cssText = "position:absolute; bottom:10px; width:100%; text-align:center; font-size:0.5rem; color:#f1c40f;";
                 maxLbl.innerHTML = "MAX";
                 el.appendChild(maxLbl);
            }

            let pt;
            const start = () => { pt = setTimeout(() => showCardInfo(key), 500); };
            const end = () => { clearTimeout(pt); };

            el.addEventListener('mousedown', start);
            el.addEventListener('touchstart', start, {passive:true});
            el.addEventListener('mouseup', () => { end(); toggleDeck(key); });
            el.addEventListener('touchend', (e) => { e.preventDefault(); end(); toggleDeck(key); });
        }
        g.appendChild(el);
    });

    updateDeckStatus();

    // Deep Tutorials (Sequenced: Deck > LevelUp > Inspect)
    if(!isDeckActive) return; // Only show overlays if deck tab is active

    if(window.PLAYER.tutorial_deck_done) {
        if(canUpgradeAny && !window.PLAYER.tutorial_levelup) {
            // Step 1: Click the card
            showTutorialOverlay(firstUpgradeable, t('tuto_deck_levelup'), TUTORIALS.LEVEL_UP);
        } else if(window.PLAYER.tutorial_levelup && !window.PLAYER.tutorial_inspect && sortedKeys.length > 0) {
            // Inspect Tutorial
            const firstCard = g.querySelector('.pixel-card');
            if(firstCard) showTutorialOverlay(firstCard, t('tuto_inspect'), TUTORIALS.INSPECT);
        }
    }
}

export function toggleDeck(key) {
    if(document.getElementById('card-info-overlay').style.display === 'flex') return;

    const idx = window.PLAYER.deck.indexOf(key);
    if(idx >= 0) {
        window.PLAYER.deck.splice(idx,1);
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    } else {
        if(window.PLAYER.deck.length < 6) {
             window.PLAYER.deck.push(key);
             if(AUDIO.isOn) AUDIO.playSFX('spawn');
        } else {
             showNotif("DECK", t('notif_deck_full'));
        }
    }
    saveData();
    renderCollection(); 
}

export function updateDeckStatus() {
    const count = window.PLAYER.deck.length;
    const sizeEl = document.getElementById('deck-size');
    const msgEl = document.getElementById('deck-valid-msg');

    if(sizeEl) sizeEl.innerHTML = count;

    if(count < 5) {
        if(msgEl) { msgEl.style.display = 'block'; msgEl.innerHTML = "MINIMUM 5 CARTES REQUISES"; msgEl.style.color = '#e74c3c'; }
        if(sizeEl) sizeEl.style.color = '#e74c3c';
    } else {
        if(msgEl) { msgEl.style.display = 'none'; }
        if(sizeEl) sizeEl.style.color = '#2ecc71';
    }
}

export function showCardInfo(key) {
    // Action-Based Completion: If we open the info, we completed the "Level Up (Step 1)" or "Inspect" tutorial
    completeTutorial(TUTORIALS.LEVEL_UP);
    completeTutorial(TUTORIALS.INSPECT);

    const d = CARDS[key];
    const rarityColor = RARITY_INFOS[d.rarity].color;
    document.getElementById('info-card-name').innerHTML = `${t(key+'_name')}<br><span style="font-size:0.5rem; color:${rarityColor}">${d.rarity.toUpperCase()}</span>`;
    
    const statsHtml = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px; width:100%; font-size:0.6rem; text-align:left;">
            <div style="color:#2ecc71;"><img src="${ICONS.heart}" class="pixel-icon"> HP: ${d.hp||'-'}</div>
            <div style="color:#e74c3c;"><img src="${ICONS.sword}" class="pixel-icon"> DMG: ${d.dmg||'-'}</div>
            <div style="color:#3498db;"><img src="${ICONS.elixir}" class="pixel-icon"> ELIXIR: ${d.cost}</div>
            <div style="color:#f1c40f;"><img src="${ICONS.speed}" class="pixel-icon"> SPD: ${d.speed}</div>
        </div>
        <div style="margin-top:10px; padding:5px; border-top:2px dashed #555; font-style:italic; color:#bdc3c7;">
            "${t(key+'_desc')}"
        </div>
    `;
    
    document.getElementById('info-card-stats').innerHTML = statsHtml;
    document.getElementById('info-card-stats').style.background = "#222";
    document.getElementById('info-card-stats').style.border = "4px solid #fff";

    const c = document.getElementById('info-card-preview');
    c.style.imageRendering = "pixelated";
    const ctx = c.getContext('2d');
    c.width = 64; c.height = 64; 
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,64,64);
    
    const s = SPRITE_CACHE[key+'_blue_0'] || SPRITE_CACHE[key+'_blue'] || SPRITE_CACHE[key];
    if(s) {
        const scale = Math.min(64 / s.width, 64 / s.height);
        const w = s.width * scale;
        const h = s.height * scale;
        const x = (64 - w) / 2;
        const y = (64 - h) / 2;
        ctx.drawImage(s, 0, 0, s.width, s.height, x, y, w, h);
    }

    const lvl = window.getCardLevel(key);
    const count = window.getCardCount(key);
    const costData = (lvl < UPGRADE_COSTS.length) ? UPGRADE_COSTS[lvl] : null;
    
    const existingBtn = document.getElementById('info-upgrade-btn');
    if(existingBtn) existingBtn.remove();

    if(costData && count >= costData.cards && window.PLAYER.gold >= costData.gold) {
        const upBtn = document.createElement('button');
        upBtn.id = 'info-upgrade-btn';
        upBtn.className = 'pixel-btn green';
        upBtn.style.cssText = "margin-top:20px; width:200px; animation: pop 0.5s infinite alternate;";
        upBtn.innerHTML = `UPGRADE<br><span style="font-size:0.6rem">${costData.cards} Cards + ${costData.gold} Gold</span>`;
        upBtn.onclick = (e) => {
            e.stopPropagation(); // Prevent closing the overlay when clicking upgrade
            upgradeCard(key);
            showCardInfo(key); 
        };
        const container = document.querySelector('#card-info-overlay > div');
        container.insertBefore(upBtn, container.lastElementChild);

        // Step 2: Trigger Upgrade Action Tutorial if not done
        if(!window.PLAYER[TUTORIALS.LEVEL_UP_ACTION]) {
            // Need a slight delay to ensure button is in DOM and layout
            setTimeout(() => {
                showTutorialOverlay(upBtn, t('tuto_levelup_action'), TUTORIALS.LEVEL_UP_ACTION);
            }, 200);
        }
    }

    document.getElementById('card-info-overlay').style.display = 'flex';
}

export function upgradeCard(key) {
    if(!window.hasCard(key)) return;
    const currentLvl = window.getCardLevel(key);
    if(currentLvl >= UPGRADE_COSTS.length) {
         showNotif("UPGRADE", "Niveau Max atteint !");
         return;
    }
    
    const costData = UPGRADE_COSTS[currentLvl]; 
    const count = window.getCardCount(key);
    
    if(count >= costData.cards && window.PLAYER.gold >= costData.gold) {
        window.PLAYER.cards[key].count -= costData.cards;
        window.PLAYER.gold -= costData.gold;
        window.PLAYER.cards[key].level++;
        
        if(AUDIO.isOn) AUDIO.playSFX('legendary');
        
        // Action-Based Completion: We did the upgrade!
        completeTutorial(TUTORIALS.LEVEL_UP_ACTION);

        saveData();
        if(window.updateMetaUI) window.updateMetaUI();
        
        showLevelUpModal(key, window.PLAYER.cards[key].level);
    } else {
        showNotif("UPGRADE", "Ressources insuffisantes !");
    }
}

export function showLevelUpModal(key, level) {
    let modal = document.getElementById('levelup-modal');
    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'levelup-modal';
        modal.innerHTML = `
            <h1 style="color:#f1c40f; text-shadow:0 0 10px orange; font-size:2rem;">LEVEL UP!</h1>
            <div id="levelup-card-container">
                <canvas id="levelup-canvas" width="64" height="64"></canvas>
                <div style="position:absolute; top:-20px; left:-20px;" class="firework"></div>
                <div style="position:absolute; top:-20px; right:-20px;" class="firework" style="animation-delay:0.2s"></div>
                <div style="position:absolute; bottom:-20px; left:-20px;" class="firework" style="animation-delay:0.4s"></div>
                <div style="position:absolute; bottom:-20px; right:-20px;" class="firework" style="animation-delay:0.6s"></div>
            </div>
            <h2 id="levelup-title" style="color:white; margin:10px;">NAME Lv.X</h2>
            <div id="levelup-stats" style="color:#2ecc71; font-size:0.8rem; line-height:1.5;">STATS UP!</div>
            <button class="pixel-btn" onclick="document.getElementById('levelup-modal').style.display='none'">CONTINUER</button>
        `;
        document.body.appendChild(modal);
    }
    
    const canvas = document.getElementById('levelup-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,64,64);
    const s = SPRITE_CACHE[key];
    if(s) ctx.drawImage(s,0,0,s.width,s.height,0,0,64,64);
    
    document.getElementById('levelup-title').innerHTML = `${t(key+'_name')} Lv.${level}`;
    
    // Show stat increase
    const prevStats = getUnitStats(key, level-1);
    const newStats = getUnitStats(key, level);
    
    let statText = "";
    if(prevStats.hp) statText += `HP: ${prevStats.hp} -> ${newStats.hp} (+10%)<br>`;
    if(prevStats.dmg) statText += `DMG: ${prevStats.dmg} -> ${newStats.dmg} (+10%)<br>`;
    
    document.getElementById('levelup-stats').innerHTML = statText;
    
    modal.style.display = 'flex';
}

window.upgradeCard = upgradeCard;
