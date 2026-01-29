import { PALETTE, SPRITES_ASCII } from '../data/sprites_data.js';
import { SKINS_16BIT_DATA } from '../data/16bit/main.js';

export const SPRITE_CACHE = {};

export function initSprites() {
    const teams = { blue: '#3498db', red: '#e74c3c' };

    const generate = (key, entry, keySuffix = '') => {
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

                const finalKey = key + keySuffix;

                // Key format: unit_blue_0 (for frame 0)
                const baseKey = finalKey + '_' + team;
                SPRITE_CACHE[baseKey + '_' + frameIdx] = cvs;
                if(frameIdx === 0) SPRITE_CACHE[baseKey] = cvs; // Default

                // Neutral/Blue default shortcut
                if(team === 'blue') {
                    SPRITE_CACHE[finalKey + '_' + frameIdx] = cvs;
                    if(frameIdx === 0) SPRITE_CACHE[finalKey] = cvs;
                }
            });
        });
        SPRITE_CACHE[key + keySuffix + '_frames'] = frames.length;
    };

    // Standard ASCII
    Object.keys(SPRITES_ASCII).forEach(key => generate(key, SPRITES_ASCII[key]));

    // 16-BIT Units
    if(SKINS_16BIT_DATA && SKINS_16BIT_DATA.units) {
        Object.keys(SKINS_16BIT_DATA.units).forEach(key => {
            const entry = SKINS_16BIT_DATA.units[key];
            if(entry.sprite) generate(key, entry.sprite, '_16bit');
        });
    }

    // 16-BIT Arena Tiles
    if(SKINS_16BIT_DATA && SKINS_16BIT_DATA.arena) {
        Object.keys(SKINS_16BIT_DATA.arena).forEach(skinKey => {
            const skin = SKINS_16BIT_DATA.arena[skinKey];
            if(skin.sprites) {
                Object.keys(skin.sprites).forEach(tileKey => {
                    generate(tileKey, skin.sprites[tileKey]);
                });
            }
        });
    }
}
