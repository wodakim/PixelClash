import { AUDIO } from '../engine/audio.js';

export const Background = {
    _isPaused: false, // Verrou pour éviter les doubles déclenchements

    init: function() {
        // 1. Détection Web Standard
        document.addEventListener('visibilitychange', () => {
            if(document.hidden) this.onPause();
            else this.onResume();
        });

        // 2. FIX APK/MOBILE (Essentiel pour WebIntoApp)
        // Déclenche la pause dès que l'app perd le focus (Home, changement d'app)
        window.addEventListener('blur', () => this.onPause());
        window.addEventListener('focus', () => this.onResume());
    },

    onPause: function() {
        if (this._isPaused) return;
        this._isPaused = true;

        console.log("[SYSTEM] App Backgrounded (Pause forced)");

        // 1. METTRE LE JEU EN PAUSE (Au lieu d'abandonner)
        // On vérifie si une partie est en cours ('playing') ou en décompte ('countdown')
        if(window.GAME && (window.GAME.state === 'playing' || window.GAME.state === 'countdown')) {
             if(typeof window.togglePauseGame === 'function') {
                 // Ceci ouvre le menu pause et arrête la boucle de gameplay logique
                 window.togglePauseGame();
             }
        }

        // 2. COUPER LE SON (Mute matériel)
        // C'est ça qui garantit que la musique s'arrête, même si le jeu tourne en fond
        if(AUDIO && AUDIO.ctx) {
            if(AUDIO.ctx.state === 'running') {
                AUDIO.ctx.suspend();
            }
        }
    },

    onResume: function() {
        if (!this._isPaused) return;
        this._isPaused = false;

        console.log("[SYSTEM] App Foregrounded");

        // 1. RELANCER LE SON (Seulement si l'utilisateur l'avait activé)
        if(AUDIO && AUDIO.ctx && AUDIO.isOn) {
            if(AUDIO.ctx.state === 'suspended') {
                AUDIO.ctx.resume();
            }
        }

        // NOTE: On ne relance pas le jeu automatiquement (resumeGame).
        // On laisse le joueur sur le menu "PAUSE" pour qu'il puisse reprendre quand il est prêt.
    }
};
