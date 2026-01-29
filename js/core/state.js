export const DEFAULT_PLAYER = {
    gold: 1000,       // Un peu d'or pour commencer
    trophies: 0,
    gems: 20,
    currentSkin: 'grass',
    unlockedSkins: ['grass'],
    // Deck de base équilibré
    deck: ['archer', 'knight', 'giant', 'fireball', 'skeleton'],
    // NOUVEAU SYSTÈME V2: cards = { key: { level:1, count:0 } }
    cards: {
        'archer': { level:1, count:0 },
        'knight': { level:1, count:2 },
        'giant': { level:1, count:0 },
        'skeleton': { level:1, count:0 },
        'fireball': { level:1, count:0 },
        'goblin': { level:1, count:0 }
    },
    tutorial_complete: false,
    tutorial_kingdom_done: false,
    tutorial_brain_done: false,
    tutorial_skins_done: false,
    tutorial_deck_done: false,
    shop_rotation: { last_refresh: 0, cards: [], bought: [false, false, false] },
    settings: { theme: 'dark', lang: 'fr' },
    // NOUVEAU SYSTÈME V3: MODULES IA
    modules: ['tutorial_square_6x6', 'tutorial_square_4x4'], // Liste des clés possédées ['cpu_v1', ...]
    ai_placements: [],  // Liste des placements { key, x, y, uid }
    // PROFIL
    nickname: 'Player',
    country: `[FLAG]`, 
    // We cannot use ICONS here because state.js is loaded before main.js/icons.js
    // We should use a text placeholder or initialize it in initPlayer AFTER icons are ready.
    // However, ICONS are init in main.js. state.js is imported by main.js.
    // So we can't use ICONS.flag here. 
    // I will use a string placeholder that I replace in UI or just a simple string.
    // Given the previous code tried to put HTML in state, which is risky.
    // Let's stick to a safe default and handle display in UI.
    avatar: 'knight',
    free_nick_change: true,
    // DEEP TUTORIALS
    tutorial_battle_drag: false,
    tutorial_levelup: false,
    tutorial_inspect: false,
    tutorial_brain_ui: false,
    tutorial_brain_drag: false,

    // 16-BIT TRANSITION SYSTEM
    unlocked_16bit: [], 
    active_16bit: {
        arena: null, 
        units: [],   
        ui: false,   
        deck: false  
    }
};

export let LANG = 'fr';

export function setLang(l) {
    LANG = l;
    window.LANG = l;
}

export function initPlayer() {
    window.PLAYER = JSON.parse(JSON.stringify(DEFAULT_PLAYER));
    // Fix country if it's the placeholder
    if(window.PLAYER.country === '[FLAG]' && window.ICONS) {
         window.PLAYER.country = `<img src="${window.ICONS.flag}" class="pixel-icon">`;
    }
    window.LANG = window.PLAYER.settings.lang;
    LANG = window.PLAYER.settings.lang;
}

// Global helpers attached to window for compatibility
export function hasCard(key) {
    return window.PLAYER && window.PLAYER.cards[key];
}

export function addCard(key, amount=1) {
    if(!window.PLAYER) return false;
    if(!window.PLAYER.cards[key]) {
        window.PLAYER.cards[key] = { level: 1, count: 0 };
        return true; // Unlocked
    } else {
        window.PLAYER.cards[key].count += amount;
        return false; // Just added count
    }
}

export function getCardLevel(key) {
    return (window.PLAYER && window.PLAYER.cards[key]) ? window.PLAYER.cards[key].level : 1;
}

export function getCardCount(key) {
    return (window.PLAYER && window.PLAYER.cards[key]) ? window.PLAYER.cards[key].count : 0;
}

window.hasCard = hasCard;
window.addCard = addCard;
window.getCardLevel = getCardLevel;
window.getCardCount = getCardCount;
