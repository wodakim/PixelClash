/**
 * Handles global skin application (UI, Deck)
 * by injecting/removing CSS classes on the body.
 */
export function applyGlobalSkins() {
    if(!window.PLAYER || !window.PLAYER.active_16bit) return;

    // 1. UI Skin
    if(window.PLAYER.active_16bit.ui) {
        document.body.classList.add('skin-ui-16bit');
        
        // Remove specific theme classes
        document.body.classList.remove('skin-ui-retro_hd', 'skin-ui-neon_ui', 'skin-ui-cyber_dark', 'skin-ui-glass_ui');
        
        // Add current specific theme class
        if(typeof window.PLAYER.active_16bit.ui === 'string') {
            document.body.classList.add('skin-ui-' + window.PLAYER.active_16bit.ui);
        }
    } else {
        document.body.classList.remove('skin-ui-16bit', 'skin-ui-retro_hd', 'skin-ui-neon_ui', 'skin-ui-cyber_dark', 'skin-ui-glass_ui');
    }

    // 2. Deck Skin
    if(window.PLAYER.active_16bit.deck) {
        document.body.classList.add('skin-deck-16bit');
        
        // Remove previous specific deck classes
        document.body.classList.remove('skin-deck-gold_trim', 'skin-deck-diamond_trim');
        
        // Add specific class
        if(window.PLAYER.active_16bit.deck === 'gold_trim') {
            document.body.classList.add('skin-deck-gold_trim');
        } else if(window.PLAYER.active_16bit.deck === 'diamond_trim') {
            document.body.classList.add('skin-deck-diamond_trim');
        }
    } else {
        document.body.classList.remove('skin-deck-16bit', 'skin-deck-gold_trim', 'skin-deck-diamond_trim');
    }
}

// Inject CSS for skins if not present
if(!document.getElementById('skin-css')) {
    const s = document.createElement('style');
    s.id = 'skin-css';
    s.innerHTML = `
        /* GOLD TRIM */
        body.skin-deck-gold_trim .pixel-card {
            border: 2px solid #ffd700 !important;
            box-shadow: 0 0 8px #ffd700;
            background: linear-gradient(135deg, #444, #222);
        }
        body.skin-deck-gold_trim .pixel-card .card-name {
            color: #ffd700;
            text-shadow: 1px 1px 0 #000;
        }

        /* DIAMOND TRIM */
        body.skin-deck-diamond_trim .pixel-card {
            border: 2px solid #00bfff !important;
            box-shadow: 0 0 10px #00bfff, inset 0 0 5px rgba(0, 191, 255, 0.5);
            background: linear-gradient(135deg, #2c3e50, #000);
        }
        body.skin-deck-diamond_trim .pixel-card .card-name {
            color: #00bfff;
            text-shadow: 0 0 5px #00bfff;
        }

        /* --- UI SKINS --- */
        
        /* RETRO HD */
        body.skin-ui-retro_hd .pixel-btn {
            border-width: 4px;
            box-shadow: 4px 4px 0 #000;
            font-family: monospace; /* Fallback to cleaner font */
        }
        
        /* NEON UI */
        body.skin-ui-neon_ui .pixel-btn {
            border: 2px solid #00ff00;
            box-shadow: 0 0 10px #00ff00;
            background: #000;
            color: #00ff00;
        }
        body.skin-ui-neon_ui .tab-content {
            border: 1px solid #00ff00;
            box-shadow: inset 0 0 20px rgba(0, 255, 0, 0.1);
        }

        /* CYBER DARK */
        body.skin-ui-cyber_dark {
            background: #0a0a0a !important;
        }
        body.skin-ui-cyber_dark .pixel-btn {
            background: linear-gradient(180deg, #333, #111);
            border: 1px solid #555;
            border-radius: 4px; /* Slight roundness for "modern" feel */
            box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
        body.skin-ui-cyber_dark .tab-content {
            background: rgba(10, 10, 10, 0.95);
        }

        /* GLASS RETRO */
        body.skin-ui-glass_ui .pixel-btn {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        body.skin-ui-glass_ui .tab-content {
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    `;
    document.head.appendChild(s);
}
