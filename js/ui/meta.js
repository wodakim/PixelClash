import { renderCollection } from './collection.js';
import { renderShop } from './shop.js';
import { renderSkins } from './skins.js';
import { TEXTS } from '../data/texts.js';
import { LANG } from '../core/state.js';

// Removed redundant 't' export to avoid collision/recursion with utils.js in bundle
// export function t(key) { return window.t(key); }

export function updateAllText() {
    const lang = window.LANG || LANG;
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(TEXTS[lang][key]) el.textContent = TEXTS[lang][key];
    });
    renderCollection();
    renderShop();
    renderSkins();
    updateButtonLabels();
}

export function updateButtonLabels() {
    const lang = window.LANG || LANG;
    const btnLang = document.getElementById('btn-lang');
    if(btnLang) btnLang.textContent = `LANG: ${lang.toUpperCase()}`;
    const btnTheme = document.getElementById('btn-theme');
    if(window.PLAYER && btnTheme) btnTheme.textContent = `THEME: ${window.PLAYER.settings.theme.toUpperCase()}`;
}

export function updateMetaUI() {
    if(!window.PLAYER) return;
    const setText = (id, val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
    setText('ui-trophies', window.PLAYER.trophies);
    setText('ui-gold', window.PLAYER.gold);
    setText('ui-gems', window.PLAYER.gems);
    setText('shop-gold', window.PLAYER.gold);
    setText('skin-gems', window.PLAYER.gems);

    // Update compteur deck global
    const deckCount = document.getElementById('deck-size');
    if(deckCount) deckCount.textContent = window.PLAYER.deck.length;

    renderCollection();
    renderShop();
    renderSkins();
}

window.updateAllText = updateAllText;
window.updateButtonLabels = updateButtonLabels;
window.updateMetaUI = updateMetaUI;
