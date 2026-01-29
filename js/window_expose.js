// Centralized Global Exposure to ensure HTML event handlers work
import { startMatchmakingSequence, togglePauseGame, resumeGame, surrenderGame, exitBattle, startDrag } from './game/battle.js';
import { openBrainModal, closeBrainModal } from './game/brain.js';
import { collectKingdomGold, resizeKingdom } from './game/kingdom.js';
import { showNotif, closeNotification } from './ui/notifications.js';
import { toggleSettings, switchLanguage, toggleDayNight, confirmReset, showConfirm } from './ui/settings.js';
import { updateAllText, updateButtonLabels, updateMetaUI } from './ui/meta.js';
import { openGachaDraw, closeSkinModal } from './ui/skins.js'; // Rename to avoid conflict if any
import { buyDaily, buy, openChest, openModuleChest, openFreeTutorialChest } from './ui/shop.js';
import { closeRoulette } from './ui/roulette.js';
import { upgradeCard } from './ui/collection.js';
import { addCard, hasCard, getCardLevel, getCardCount } from './core/state.js';

export function exposeGlobals() {
    console.log("Exposing Globals...");
    
    // Game Logic
    window.startMatchmakingSequence = startMatchmakingSequence;
    window.togglePauseGame = togglePauseGame;
    window.resumeGame = resumeGame;
    window.surrenderGame = surrenderGame;
    window.exitBattle = exitBattle;
    window.startDrag = startDrag;
    
    // Brain
    window.openBrainModal = openBrainModal;
    window.closeBrainModal = closeBrainModal;
    
    // Kingdom
    window.collectKingdomGold = collectKingdomGold;
    window.resizeKingdom = resizeKingdom;
    
    // Notifications
    window.showNotif = showNotif;
    window.closeNotification = closeNotification;
    
    // Settings
    window.toggleSettings = toggleSettings;
    window.switchLanguage = switchLanguage;
    window.toggleDayNight = toggleDayNight;
    window.confirmReset = confirmReset;
    window.showConfirm = showConfirm;
    
    // Meta / UI
    window.updateAllText = updateAllText;
    window.updateButtonLabels = updateButtonLabels;
    window.updateMetaUI = updateMetaUI;
    
    // Skins
    window.openGachaDraw = openGachaDraw;
    // Manual fix for inline function in skins.js if needed, but let's expose specific one
    window.closeSkinModal = closeSkinModal || function() { document.getElementById('skin-modal').style.display='none'; };
    
    // Shop
    window.buyDaily = buyDaily;
    window.buy = buy;
    window.openChest = openChest;
    window.openModuleChest = openModuleChest;
    window.openFreeTutorialChest = openFreeTutorialChest;
    
    // Roulette
    window.closeRoulette = closeRoulette;
    
    // Collection
    window.upgradeCard = upgradeCard;

    // Quests
    if(typeof window.claimQuest === 'undefined') {
        // Will be defined by import, but ensure it's exposed if logic runs late
        // (Handled by module side effect mostly, but good to be safe)
    }
    
    // Core Helpers (often used in inline checks or console)
    window.addCard = addCard;
    window.hasCard = hasCard;
    window.getCardLevel = getCardLevel;
    window.getCardCount = getCardCount;

    console.log("Globals Exposed.");
}
