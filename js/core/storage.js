import { DEFAULT_PLAYER } from './state.js';
import { CARDS } from '../data/cards.js';

export function loadData() {
    const s = localStorage.getItem('pixel_clash_launch_v1');
    if(s) {
        try {
            const saved = JSON.parse(s);
            // MIGRATION V1 -> V2 (Array -> Object)
            if(saved.collection && Array.isArray(saved.collection)) {
                if(!saved.cards) saved.cards = {};
                saved.collection.forEach(k => {
                    if(!saved.cards[k]) saved.cards[k] = { level: 1, count: 0 };
                });
                delete saved.collection;
            }
            window.PLAYER = { ...window.PLAYER, ...saved };
            
            // Sécurité settings
            if(!window.PLAYER.settings) window.PLAYER.settings = { theme: 'dark', lang: 'fr' };
            // Sécurité cards
            if(!window.PLAYER.cards) window.PLAYER.cards = JSON.parse(JSON.stringify(DEFAULT_PLAYER.cards));

            // Sécurité Modules V3
            if(!window.PLAYER.modules) window.PLAYER.modules = [];
            if(!window.PLAYER.ai_placements) window.PLAYER.ai_placements = [];

            // Sécurité Profil
            if(!window.PLAYER.nickname) window.PLAYER.nickname = 'Player';
            if(!window.PLAYER.country) window.PLAYER.country = `[FLAG]`; // Safe default, fixed in UI or Init
            if(!window.PLAYER.avatar) window.PLAYER.avatar = 'knight';
            if(typeof window.PLAYER.free_nick_change === 'undefined') window.PLAYER.free_nick_change = true;

            // Deep Tutorials
            if(typeof window.PLAYER.tutorial_battle_drag === 'undefined') window.PLAYER.tutorial_battle_drag = false;
            if(typeof window.PLAYER.tutorial_levelup === 'undefined') window.PLAYER.tutorial_levelup = false;
            if(typeof window.PLAYER.tutorial_inspect === 'undefined') window.PLAYER.tutorial_inspect = false;
            if(typeof window.PLAYER.tutorial_brain_ui === 'undefined') window.PLAYER.tutorial_brain_ui = false;
            if(typeof window.PLAYER.tutorial_brain_drag === 'undefined') window.PLAYER.tutorial_brain_drag = false;

            // 16-BIT SYSTEM INIT
            if(!window.PLAYER.unlocked_16bit) window.PLAYER.unlocked_16bit = [];
            if(!window.PLAYER.active_16bit) window.PLAYER.active_16bit = { arena: null, units: [], ui: false, deck: false };
            
        } catch(e) {
            console.error("Save Error", e);
        }
    }
}

export function saveData(skipUI = false) {
    if(window.PLAYER) {
        localStorage.setItem('pixel_clash_launch_v1', JSON.stringify(window.PLAYER));
        if(!skipUI && typeof window.updateMetaUI === 'function') window.updateMetaUI();
    }
}

export function validateSaveData() {
    if(!window.PLAYER) return;
    if(isNaN(window.PLAYER.gold)) window.PLAYER.gold = 500;
    
    // Init Tutorial Flags if missing
    if(typeof window.PLAYER.tutorial_kingdom_done === 'undefined') window.PLAYER.tutorial_kingdom_done = false;
    if(typeof window.PLAYER.tutorial_brain_done === 'undefined') window.PLAYER.tutorial_brain_done = false;
    if(typeof window.PLAYER.tutorial_skins_done === 'undefined') window.PLAYER.tutorial_skins_done = false;
    if(typeof window.PLAYER.tutorial_deck_done === 'undefined') window.PLAYER.tutorial_deck_done = false;

    // Ensure Tutorial Modules are present
    const tutMods = ['tutorial_square_6x6', 'tutorial_square_4x4'];
    tutMods.forEach(m => {
        if(!window.PLAYER.modules.includes(m)) window.PLAYER.modules.push(m);
    });

    // Vérif intégrité deck
    window.PLAYER.deck = window.PLAYER.deck.filter(k => CARDS[k]);
    // On ne remplit pas le deck automatiquement pour laisser le joueur choisir,
    // sauf si vide au tout premier lancement.
    const available = Object.keys(window.PLAYER.cards);
    if(window.PLAYER.deck.length === 0 && available.length > 0) {
        // Fallback minimal
        window.PLAYER.deck = available.slice(0, 5);
    }
}
