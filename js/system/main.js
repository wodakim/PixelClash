import { Time } from './time.js';
import { Background } from './background.js';
import { Leaderboard } from './leaderboard.js';

export const SYSTEM = {
    Time,
    Background,
    Leaderboard,
    init: function() {
        console.log("[SYSTEM] Initializing...");
        this.Time.init();
        this.Background.init();
        this.Leaderboard.init();
    }
};
