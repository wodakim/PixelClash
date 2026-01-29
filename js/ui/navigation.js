import { AUDIO } from '../engine/audio.js';
import { showNotif } from './notifications.js';
import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';

export function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => {
            if(AUDIO.isOn) AUDIO.playSFX('spawn');
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.target);
            if(target) target.classList.add('active');

            // TUTO: KINGDOM
            if(btn.dataset.target === 'tab-kingdom') {
                if(window.PLAYER && !window.PLAYER.tutorial_kingdom_done) {
                    showNotif("TUTORIEL", t('tuto_kingdom'));
                    window.PLAYER.tutorial_kingdom_done = true;
                    saveData();
                }
                // Call global resize logic for kingdom
                if(typeof window.resizeKingdom === 'function') setTimeout(window.resizeKingdom, 50);
            }

            // TUTO: SKINS
            if(btn.dataset.target === 'tab-skins') {
                if(window.PLAYER && !window.PLAYER.tutorial_skins_done) {
                    showNotif("TUTORIEL", t('tuto_skins'));
                    window.PLAYER.tutorial_skins_done = true;
                    saveData();
                }
            }

            // TUTO: DECK
            if(btn.dataset.target === 'tab-deck') {
                if(window.PLAYER && !window.PLAYER.tutorial_deck_done) {
                    startDeckTutorial();
                }
            }
        };
    });
}

export function startDeckTutorial() {
    showNotif("TUTORIEL DECK", t('tuto_deck_intro'), () => {
        showNotif("AMÉLIORATION", t('tuto_deck_levelup'), () => {
            showNotif("IA BRAIN", t('tuto_deck_brain'), () => {
                showNotif("BOUTIQUE", t('tuto_deck_shop'), () => {
                    if(window.PLAYER) {
                        window.PLAYER.tutorial_deck_done = true;
                        saveData();
                    }
                });
            });
        });
    });
}

export function setupGlobalButtons() {
    // Bouton COMBAT
    const btnBattle = document.getElementById('btn-battle-start');
    if(btnBattle) btnBattle.onclick = () => {
        if(typeof window.startMatchmakingSequence === 'function') window.startMatchmakingSequence();
    };

    // Audio Toggles
    const handleAudioToggle = () => {
        if(AUDIO.ctx && AUDIO.ctx.state === 'suspended') AUDIO.ctx.resume();
        const isOn = AUDIO.toggle();
        const icon = isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`;
        const btnMenu = document.getElementById('btn-audio-toggle');
        const btnGame = document.getElementById('btn-audio-game');
        if(btnMenu) btnMenu.innerHTML = icon;
        if(btnGame) btnGame.innerHTML = icon;
        
        if(isOn) {
            const inGame = document.getElementById('game-view').style.display !== 'none';
            AUDIO.playMusic(inGame ? 'battle' : 'menu');
        } else {
            AUDIO.stopMusic();
        }
    };
    
    const btnAudioMenu = document.getElementById('btn-audio-toggle');
    if(btnAudioMenu) { btnAudioMenu.onclick = handleAudioToggle; btnAudioMenu.innerHTML = AUDIO.isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`; }
    const btnAudioGame = document.getElementById('btn-audio-game');
    if(btnAudioGame) { btnAudioGame.onclick = handleAudioToggle; btnAudioGame.innerHTML = AUDIO.isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`; }

    // Close overlay on background click
    const overlay = document.getElementById('card-info-overlay');
    // Allow closing by clicking anywhere, not just background (per user request)
    // But we must prevent closing if clicking inside the upgrade button which triggers an action?
    // User asked "au moindre clic, peut importe où, l'annalyse se ferme".
    // However, if we click "Upgrade", we want the upgrade to happen, not just close.
    // The upgrade button has its own click listener which should handle the logic.
    // We just need to make sure we don't prevent that.
    if(overlay) overlay.onclick = (e) => { 
        // If clicking a button, let the button handle it (unless we want to close after?)
        // The upgrade button stops propagation, so this click listener won't fire for it.
        // So we can safely close on any click that bubbles up here.
        overlay.style.display = 'none'; 
    };
}
