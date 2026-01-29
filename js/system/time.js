import { saveData } from '../core/storage.js';
import { showNotif } from '../ui/notifications.js';

export const Time = {
    offset: 0,
    isVerified: false,
    
    init: function() {
        // Offline Mode: Use local time directly
        console.log("[SECURE TIME] Offline Mode. Using local time.");
        this.offset = 0;
        this.isVerified = true;
        
        // Integrity Check
        this.checkSaveIntegrity();
    },

    now: function() {
        return Date.now() + this.offset;
    },

    checkSaveIntegrity: function() {
        if(!window.PLAYER) return; // Wait for player init
        const now = this.now();
        
        // Check Last Login
        if(window.PLAYER.last_login && window.PLAYER.last_login > now + 60000) { // 1 min buffer
            console.error("[ANTI-CHEAT] Time manipulation detected!");
            showNotif("SÉCURITÉ", "Horloge système incorrecte detected. Veuillez remettre à l'heure.", () => {
                // Punish or Reset? For now, just warn.
            });
        }
        window.PLAYER.last_login = now;
        saveData();
    }
};
