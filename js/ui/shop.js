import { startRoulette, startModuleRoulette } from './roulette.js';
import { showCardInfo } from './collection.js';
import { showModuleInfo } from '../game/brain.js';
import { showNotif } from './notifications.js';
import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';
import { addCard } from '../core/state.js';
import { AUDIO } from '../engine/audio.js';
import { CARDS } from '../data/cards.js';
import { MODULES } from '../data/modules.js';
import { SYSTEM } from '../system/main.js';
import { showTutorialOverlay, TUTORIALS } from './tutorial.js';

export function checkShopRefresh() {
    const now = SYSTEM.Time.now();
    const FIVE_MIN = 5 * 60 * 1000;
    
    if(!window.PLAYER) return;
    if(!window.PLAYER.shop_rotation) window.PLAYER.shop_rotation = { last_refresh: 0, cards: [], bought: [false,false,false] };

    if(now - window.PLAYER.shop_rotation.last_refresh > FIVE_MIN) {
        window.PLAYER.shop_rotation.last_refresh = now;
        window.PLAYER.shop_rotation.bought = [false, false, false];
        window.PLAYER.shop_rotation.cards = [];
        
        const cardKeys = Object.keys(CARDS);
        const modKeys = Object.keys(MODULES);

        for(let i=0; i<3; i++) {
            const isModule = Math.random() < 0.3; 
            if(isModule && modKeys.length > 0) {
                 const k = modKeys[Math.floor(Math.random() * modKeys.length)];
                 window.PLAYER.shop_rotation.cards.push(k);
            } else {
                 const k = cardKeys[Math.floor(Math.random() * cardKeys.length)];
                 window.PLAYER.shop_rotation.cards.push(k);
            }
        }
        saveData(true); // Skip UI update to prevent recursion loop
    }
}

export function renderRotatingShop() {
    checkShopRefresh();
    const container = document.getElementById('shop-rotation');
    if(!container) return;
    container.innerHTML = '';
    
    const diff = SYSTEM.Time.now() - window.PLAYER.shop_rotation.last_refresh;
    const remaining = Math.max(0, (5 * 60 * 1000) - diff);
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    
    const header = document.createElement('div');
    header.style.cssText = "width:100%; text-align:center; color:#f1c40f; font-size:0.7rem; margin-bottom:10px;";
    header.innerHTML = `OFFRES FLASH: ${min}:${sec.toString().padStart(2,'0')}`;
    container.appendChild(header);
    
    if(window.shopTimer) clearTimeout(window.shopTimer);
    window.shopTimer = setTimeout(renderRotatingShop, 1000);

    window.PLAYER.shop_rotation.cards.forEach((key, idx) => {
        const bought = window.PLAYER.shop_rotation.bought[idx];
        
        let data, typeName, price, name;
        if(MODULES[key]) {
            data = MODULES[key];
            typeName = "MODULE";
            price = data.price;
            name = t(key+'_name');
        } else {
            data = CARDS[key];
            typeName = "UNIT";
            price = 100;
            if(data.rarity === 'rare') price = 300;
            if(data.rarity === 'epic') price = 1000;
            if(data.rarity === 'legendary') price = 4000;
            name = t(key+'_name');
        }

        const div = document.createElement('div');
        div.className = 'shop-item';
        if(bought) div.style.opacity = '0.5';
        
        const rarityIcon = {
            common:`<img src="${ICONS.rarity_common}" class="pixel-icon">`, 
            rare:`<img src="${ICONS.rarity_rare}" class="pixel-icon">`, 
            epic:`<img src="${ICONS.rarity_epic}" class="pixel-icon">`, 
            legendary:`<img src="${ICONS.rarity_legendary}" class="pixel-icon">`
        }[data.rarity] || `<img src="${ICONS.rarity_common}" class="pixel-icon">`;
        
        let btnHtml = '';
        if(bought) {
            btnHtml = `<span style="color:#2ecc71; font-size:0.6rem;">ACHETÉ</span>`;
        } else {
            btnHtml = `<button class="pixel-btn blue" onclick="window.buyDaily(${idx}, '${key}', ${price})" style="font-size:0.6rem; padding:5px 10px;">${price}Gold</button>`;
        }

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:1.2rem;">${rarityIcon}</span>
                <div style="display:flex; flex-direction:column; align-items:flex-start;">
                    <div style="font-weight:bold;">${name}</div>
                    <div style="font-size:0.5rem; color:#aaa;">${typeName} | ${data.rarity.toUpperCase()}</div>
                </div>
            </div>
            ${btnHtml}
        `;
        
        setupLongPress(div, () => {
            if(MODULES[key]) showModuleInfo(key);
            else showCardInfo(key);
        });

        container.appendChild(div);

        // Tutorial Trigger on first item
        if(idx === 0 && window.PLAYER && !window.PLAYER['tutorial_shop_inspect']) {
            setTimeout(() => {
                showTutorialOverlay(div, t('tuto_shop_inspect'), 'tutorial_shop_inspect');
            }, 500);
        }
    });
}

function setupLongPress(element, callback) {
    let timer;
    const start = () => { timer = setTimeout(callback, 500); };
    const end = () => { clearTimeout(timer); };
    
    element.addEventListener('mousedown', start);
    element.addEventListener('touchstart', start, {passive:true});
    element.addEventListener('mouseup', end);
    element.addEventListener('touchend', end);
    element.addEventListener('mouseleave', end);
}

export function buyDaily(idx, key, price) {
    if(window.PLAYER.gold >= price) {
        window.PLAYER.gold -= price;
        window.PLAYER.shop_rotation.bought[idx] = true;
        
        if(MODULES[key]) {
            window.PLAYER.modules.push(key);
            showNotif("BOUTIQUE", `+1 Module: ${t(key+'_name')}`);
        } else {
            addCard(key, 1);
            showNotif("BOUTIQUE", `+1 ${t(key+'_name')}`);
        }
        
        if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
        saveData();
        renderRotatingShop(); 
        if(window.updateMetaUI) window.updateMetaUI(); // refresh gold
    } else {
        showNotif("BOUTIQUE", t('notif_gold'));
    }
}

export function renderShop() {
    // Add IAP Buttons dynamically if not present
    const shopTab = document.getElementById('tab-shop');
    let iapContainer = document.getElementById('iap-container');
    
    if(!iapContainer && shopTab) {
        iapContainer = document.createElement('div');
        iapContainer.id = 'iap-container';
        iapContainer.style.cssText = "width:90%; border-bottom: 2px dashed #555; padding-bottom: 20px; margin-bottom: 20px; text-align:center; display:flex; flex-direction:column; gap:10px; align-items:center;";
        
        iapContainer.innerHTML = `
            <div style="display:flex; gap:10px; width:100%; justify-content:center;">
                <button class="pixel-btn green" onclick="buyIAP('gems_20')" style="flex:1;">
                    <span>20 <img src="${ICONS.gem}" class="pixel-icon"></span><br>
                    <span style="font-size:0.6rem;">0.99€</span>
                </button>
                <button class="pixel-btn red" onclick="buyIAP('no_ads')" style="flex:1;">
                    <span>NO ADS</span><br>
                    <span style="font-size:0.6rem;">4.99€</span>
                </button>
            </div>

            <button class="pixel-btn purple" onclick="openChest()" style="width:100%; max-width:300px;">
                <span data-lang="open_chest">COFFRE MYSTÈRE</span><br>
                <span style="font-size:0.7rem; color:#f1c40f;">1000 <img src="${ICONS.gold}" class="pixel-icon"></span>
            </button>
            
            <button class="pixel-btn blue" onclick="openModuleChest()" style="width:100%; max-width:300px;">
                <span data-lang="open_module_chest">COFFRE MODULES</span><br>
                <span style="font-size:0.7rem; color:#f1c40f;">500 <img src="${ICONS.gold}" class="pixel-icon"></span>
            </button>
        `;
        
        // Insert before the rotation container
        const rotation = document.getElementById('shop-rotation');
        // Remove old buttons if hardcoded in HTML (cleaning up from previous steps if needed)
        const oldBtns = shopTab.querySelector('div[style*="border-bottom"]');
        if(oldBtns && oldBtns !== rotation) oldBtns.remove();
        
        shopTab.insertBefore(iapContainer, rotation);
    }

    renderRotatingShop();
    const l = document.getElementById('shop-list');
    if(l) l.innerHTML = ''; 
}

export function buy(key, price) {
    if(window.PLAYER.gold >= price) {
        window.PLAYER.gold -= price;
        const isNew = addCard(key, 1);
        if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
        saveData();
        showNotif("BOUTIQUE", isNew ? `${t(key+'_name')} Obtenu !` : `+1 ${t(key+'_name')}`);
    } else {
        showNotif("BOUTIQUE", t('notif_gold'));
    }
}

export function buyIAP(sku) {
    showNotif("IAP", "Contacting Store...", () => {
        setTimeout(() => {
            if(sku === 'gems_20') {
                window.PLAYER.gems += 20;
                showNotif("SUCCESS", "+20 GEMMES !");
            }
            if(sku === 'no_ads') {
                window.PLAYER.no_ads = true;
                document.body.classList.add('no-ads');
                showNotif("SUCCESS", "PUBLICITÉS SUPPRIMÉES !");
            }
            saveData();
            if(window.updateMetaUI) window.updateMetaUI();
            if(window.AUDIO && window.AUDIO.isOn) window.AUDIO.playMusic('victory', () => window.AUDIO.playMusic('menu'));
        }, 1000);
    });
}

export function openChest() {
    const PRICE = 1000;
    if(window.PLAYER.gold < PRICE) { showNotif("BOUTIQUE", t('notif_gold')); return; }

    window.PLAYER.gold -= PRICE;
    if(window.updateQuestProgress) window.updateQuestProgress('open_chest', 1);
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startRoulette();
}

export function openModuleChest() {
    const PRICE = 500;
    if(window.PLAYER.gold < PRICE) { showNotif("BOUTIQUE", t('notif_gold')); return; }

    window.PLAYER.gold -= PRICE;
    if(window.updateQuestProgress) window.updateQuestProgress('open_chest', 1);
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startModuleRoulette();
}

export function openFreeTutorialChest() {
    document.getElementById('game-over-modal').style.display='none';
    document.getElementById('game-view').style.display='none';
    document.getElementById('meta-view').classList.remove('hidden');
    startRoulette(true); // Tutorial mode
}

window.buyDaily = buyDaily;
window.buy = buy;
window.buyIAP = buyIAP;
window.openChest = openChest;
window.openModuleChest = openModuleChest;
window.openFreeTutorialChest = openFreeTutorialChest;
