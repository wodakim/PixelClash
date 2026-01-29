import { PALETTE, SPRITES_ASCII } from '../data/sprites_data.js';

export const SPRITE_CACHE = {};

export function initSprites() {
    const teams = { blue: '#3498db', red: '#e74c3c' };
    Object.keys(SPRITES_ASCII).forEach(key => {
        const entry = SPRITES_ASCII[key];
        
        // Normalize: if entry is array of strings -> single frame. If array of arrays -> animation
        let frames = [];
        if(Array.isArray(entry) && typeof entry[0] === 'string') frames = [entry];
        else frames = entry;

        frames.forEach((art, frameIdx) => {
            const h = art.length; const w = art[0].length;
            ['blue', 'red'].forEach(team => {
                const cvs = document.createElement('canvas');
                cvs.width = w; cvs.height = h;
                const ctx = cvs.getContext('2d');
                for(let y=0; y<h; y++) {
                    for(let x=0; x<w; x++) {
                        const char = art[y][x];
                        if(!PALETTE[char]) continue;
                        let color = PALETTE[char];
                        if(char === 'T') color = teams[team];
                        ctx.fillStyle = color; ctx.fillRect(x, y, 1, 1);
                    }
                }
                // Key format: unit_blue_0 (for frame 0)
                // Also keep legacy format unit_blue for backward compat (uses frame 0)
                const baseKey = key + '_' + team;
                SPRITE_CACHE[baseKey + '_' + frameIdx] = cvs;
                if(frameIdx === 0) SPRITE_CACHE[baseKey] = cvs; // Default

                // Neutral/Blue default shortcut
                if(team === 'blue') {
                    SPRITE_CACHE[key + '_' + frameIdx] = cvs;
                    if(frameIdx === 0) SPRITE_CACHE[key] = cvs;
                }
            });
        });
        // Store frame count
        SPRITE_CACHE[key + '_frames'] = frames.length;
    });
}
