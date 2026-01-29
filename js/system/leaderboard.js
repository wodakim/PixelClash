import { t } from '../core/utils.js';

export const Leaderboard = {
    init: function() {
        console.log("[LEADERBOARD] Initialized");
    },
    getTopPlayers: function() {
        // Fake data for demo
        const flag = (window.ICONS && window.ICONS.flag) ? `<img src="${window.ICONS.flag}" class="pixel-icon">` : "[FLAG]";
        
        return {
            list: [
                { rank: 1, name: "PixelKing", trophies: 5000, country: flag },
                { rank: 2, name: "DarkLord", trophies: 4800, country: flag },
                { rank: 3, name: "Slayer99", trophies: 4500, country: flag },
                { rank: 4, name: "ClashGod", trophies: 4200, country: flag },
                { rank: 5, name: "NoobMaster", trophies: 4000, country: flag },
                { rank: 150, name: "Moi", trophies: window.PLAYER ? window.PLAYER.trophies : 0, country: window.PLAYER ? window.PLAYER.country : flag, isMe: true }
            ]
        };
    }
};
