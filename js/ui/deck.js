import { SPRITE_CACHE } from '../engine/sprites.js';

let deckCanvas = null;
let deckCtx = null;

export function renderDeckVisuals(animate=false) {
    if(!deckCanvas) {
        deckCanvas = document.getElementById('deck-visuals-canvas');
        if(deckCanvas) {
            deckCtx = deckCanvas.getContext('2d');
            deckCtx.imageSmoothingEnabled = false;
        }
    }
    if(!deckCtx || !deckCanvas) return;

    // Resize
    const parent = deckCanvas.parentElement;
    if(parent.clientWidth !== deckCanvas.width || parent.clientHeight !== deckCanvas.height) {
        deckCanvas.width = parent.clientWidth;
        deckCanvas.height = parent.clientHeight;
        deckCtx.imageSmoothingEnabled = false;
    }

    const w = deckCanvas.width;
    const h = deckCanvas.height;

    // Clear
    deckCtx.clearRect(0, 0, w, h);

    // Draw Background (Simple Ground)
    const horizon = h * 0.6;
    
    // Sky
    deckCtx.fillStyle = '#2c3e50';
    deckCtx.fillRect(0, 0, w, horizon);
    
    // Ground
    deckCtx.fillStyle = '#27ae60';
    deckCtx.fillRect(0, horizon, w, h - horizon);
    
    // Grass noise
    deckCtx.fillStyle = 'rgba(0,0,0,0.1)';
    for(let i=0; i<20; i++) {
        const rx = (i * 12345) % w;
        const ry = horizon + ((i * 6789) % (h - horizon));
        deckCtx.fillRect(rx, ry, 2, 2);
    }

    // Draw Units
    if(!window.PLAYER) return;
    const deck = window.PLAYER.deck;
    if(deck.length === 0) {
        deckCtx.fillStyle = '#7f8c8d';
        deckCtx.font = '10px monospace';
        deckCtx.textAlign = 'center';
        deckCtx.fillText("DECK VIDE", w/2, h/2);
        return;
    }

    const spacing = w / (deck.length + 1);
    const yPos = h * 0.75; // Feet position

    deck.forEach((key, idx) => {
        // Animation Frame
        let frame = 0;
        if(animate) {
            const frameCount = SPRITE_CACHE[key + '_frames'] || 1;
            if(frameCount > 1) {
                // Slower animation for idle look
                const t = Date.now() / 500; 
                frame = Math.floor(t % frameCount);
            }
        }

        const s = SPRITE_CACHE[key + '_blue_' + frame] || SPRITE_CACHE[key + '_blue_0'] || SPRITE_CACHE[key];
        
        if(s) {
            const cx = spacing * (idx + 1);
            
            // Shadow
            deckCtx.fillStyle = 'rgba(0,0,0,0.3)';
            deckCtx.beginPath();
            deckCtx.ellipse(cx, yPos + 10, 10, 4, 0, 0, Math.PI*2);
            deckCtx.fill();

            // Draw Sprite
            // Scale up slightly?
            deckCtx.drawImage(s, cx - 16, yPos - 16, 32, 32);
        }
    });
}

export function loopDeckVisuals() {
    const tabDeck = document.getElementById('tab-deck');
    if(tabDeck && tabDeck.classList.contains('active')) {
        renderDeckVisuals(true);
        
        // Deep Tutorial: Brain (After Deck & LevelUp)
        // Ensure overlay targets the button and is removed on click
        // FIX: Do NOT show if "Level Up Action" (Upgrade confirmation) is still pending!
        // The user must complete the upgrade tutorial first.
        // ALSO: Do NOT show if the Card Info Overlay is open (visual overlap check)
        const overlay = document.getElementById('card-info-overlay');
        const isOverlayOpen = overlay && overlay.style.display !== 'none';

        const canShowBrainTuto = window.PLAYER.tutorial_deck_done && 
                                 window.PLAYER.tutorial_levelup && 
                                 window.PLAYER.tutorial_levelup_action && // Must have finished upgrade action
                                 !window.PLAYER.tutorial_brain_ui &&
                                 !isOverlayOpen; // Strict visual check

        if(canShowBrainTuto) {
            const btn = document.querySelector('#tab-deck .pixel-btn.purple');
            if(btn) {
                if(window.showTutorialOverlay && window.TUTORIALS) {
                    window.showTutorialOverlay(btn, t('tuto_deck_brain'), window.TUTORIALS.BRAIN, () => {
                        // Callback on OK click, but user might click button directly
                    });
                    
                    // Attach click listener to button to clear tutorial if clicked directly
                    const clearTuto = () => {
                        const overlay = document.getElementById('tuto-overlay-' + window.TUTORIALS.BRAIN);
                        if(overlay) overlay.remove();
                        window.completeTutorial(window.TUTORIALS.BRAIN);
                    };
                    btn.addEventListener('click', clearTuto, {once:true});
                }
            }
        }
    }
    requestAnimationFrame(loopDeckVisuals);
}
