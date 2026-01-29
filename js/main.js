import { initPlayer } from './core/state.js';
import { loadData, validateSaveData } from './core/storage.js';
import { initSprites } from './engine/sprites.js';
import { initGame } from './game/battle.js';
import { initKingdomSystem } from './game/kingdom.js';
import { SYSTEM } from './system/main.js';
import { initQuests } from './system/quests.js';
import { initProfile } from './ui/profile.js';
import { setupNavigation, setupGlobalButtons } from './ui/navigation.js';
import { updateAllText, updateMetaUI } from './ui/meta.js';
import { applyTheme } from './ui/settings.js';
import { setupLeaderboardDrawer } from './ui/leaderboard_ui.js';
import { loopDeckVisuals } from './ui/deck.js';
import { exposeGlobals } from './window_expose.js';
import { showTutorialOverlay, TUTORIALS } from './ui/tutorial.js';
import { initIcons } from './ui/icons.js';

// Ensure globals are exposed immediately
exposeGlobals();

// Expose Tutorial helpers globally for modules that lack imports (like deck.js hack)
window.showTutorialOverlay = showTutorialOverlay;
window.TUTORIALS = TUTORIALS;

function initApp() {
    console.log("Initializing App...");
    
    initIcons(); // Generate Icons

    // 1. Init Systems
    initPlayer(); 
    initSprites();
    initGame();
    
    // 2. Load Data
    loadData();
    validateSaveData();

    // 2.1 Init Kingdom (After data load)
    initKingdomSystem();
    
    // 2.1 System (needs player)
    SYSTEM.init();

    // 3. UI
    setupNavigation();
    setupGlobalButtons();
    setupLeaderboardDrawer();
    initQuests();
    initProfile();

    // 4. Render
    applyTheme(); 
    updateAllText(); 
    updateMetaUI();

    // 5. Views
    const mmScreen = document.getElementById('matchmaking-screen');
    if(mmScreen) mmScreen.classList.add('hidden');
    const gameView = document.getElementById('game-view');
    if(gameView) gameView.style.display = 'none';
    const metaView = document.getElementById('meta-view');
    if(metaView) metaView.classList.remove('hidden');

    // Start Loops
    loopDeckVisuals();
    console.log("App Initialized.");
}

// Ensure init runs even if loaded late
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}
