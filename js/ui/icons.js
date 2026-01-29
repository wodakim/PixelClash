
export const ICONS = {};

const PIXEL_MAPS = {
    gold: [
        "0011100",
        "0111110",
        "1110111",
        "1110111",
        "1111111",
        "0111110",
        "0011100"
    ],
    gem: [
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "0111110",
        "0011100",
        "0001000"
    ],
    trophy: [
        "1111111",
        "0111110",
        "0011100",
        "0011100",
        "0001000",
        "0011100",
        "0111110"
    ],
    heart: [
        "0110110",
        "1111111",
        "1111111",
        "1111111",
        "0111110",
        "0011100",
        "0001000"
    ],
    sword: [
        "0000001",
        "0000011",
        "0000110",
        "0001100",
        "0011000",
        "0110000",
        "1100000"
    ],
    elixir: [
        "0011100",
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "1111111",
        "0111110"
    ],
    speed: [
        "0001100",
        "0011100",
        "0111000",
        "1111110",
        "0011111",
        "0001110",
        "0000000"
    ],
    hand: [
        "0010000",
        "0110000",
        "1110000",
        "1111100",
        "1111110",
        "1111110",
        "0111100"
    ],
    pointer: [
        "1100000",
        "1110000",
        "1111000",
        "1111100",
        "1111110",
        "1110000",
        "1000000"
    ],
    scroll: [
        "0111110",
        "1111111",
        "1000001",
        "1000001",
        "1000001",
        "1111111",
        "0111110"
    ],
    user: [
        "0011100",
        "0111110",
        "0111110",
        "0011100",
        "0111110",
        "1111111",
        "1111111"
    ],
    gear: [
        "0101010",
        "1111111",
        "0111110",
        "1101011",
        "0111110",
        "1111111",
        "0101010"
    ],
    sound_on: [
        "0010000",
        "0110000",
        "1111101",
        "1111100",
        "1111101",
        "0110000",
        "0010000"
    ],
    sound_off: [
        "0010000",
        "0110000",
        "1111100",
        "1111100",
        "1111100",
        "0110000",
        "0010000"
    ],
    check: [
        "0000001",
        "0000011",
        "0000110",
        "0001100",
        "1011000",
        "1110000",
        "0100000"
    ],
    cross: [
        "1000001",
        "0100010",
        "0010100",
        "0001000",
        "0010100",
        "0100010",
        "1000001"
    ],
    lock: [
        "0011100",
        "0100010",
        "0100010",
        "1111111",
        "1111111",
        "1111111",
        "1111111"
    ],
    flag: [
        "1111100",
        "1111100",
        "1111100",
        "1000000",
        "1000000",
        "1000000",
        "1000000"
    ],
    clan: [
        "0010000",
        "0111000",
        "1111100",
        "0111000",
        "0010000",
        "0000000",
        "0000000"
    ],
    construction: [
        "1101101",
        "1011011",
        "0110110",
        "1101101",
        "1011011",
        "0110110",
        "1111111"
    ],
    book: [
        "0011100",
        "0101010",
        "0101010",
        "1111111",
        "1111111",
        "1111111",
        "0111110"
    ],
    circle: [
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "1111111",
        "0111110",
        "0011100"
    ]
};

const COLORS = {
    gold: '#f1c40f',
    gem: '#3498db',
    trophy: '#f1c40f',
    heart: '#e74c3c',
    sword: '#e74c3c',
    elixir: '#9b59b6',
    speed: '#f1c40f',
    hand: '#ffffff',
    scroll: '#f39c12',
    user: '#ecf0f1',
    gear: '#95a5a6',
    sound_on: '#fff',
    sound_off: '#7f8c8d',
    check: '#2ecc71',
    cross: '#e74c3c',
    lock: '#7f8c8d',
    flag: '#fff',
    clan: '#e67e22',
    construction: '#f39c12',
    book: '#A1887F',
    white: '#ffffff',
    blue: '#3498db',
    purple: '#9b59b6',
    yellow: '#f1c40f',
    pointer: '#ffffff'
};

export function initIcons() {
    Object.keys(PIXEL_MAPS).forEach(key => {
        ICONS[key] = generateIcon(key);
    });
    
    // Rarity variants
    ICONS['rarity_common'] = generateIcon('circle', 'white');
    ICONS['rarity_uncommon'] = generateIcon('circle', 'check'); // Using check color (green)
    ICONS['rarity_rare'] = generateIcon('circle', 'yellow');
    ICONS['rarity_legendary'] = generateIcon('circle', 'clan'); // Using clan color (orange)
    ICONS['rarity_god'] = generateIcon('circle', 'heart'); // Using heart color (red)
    
    window.ICONS = ICONS;
    replaceIconsInDOM();
}

function replaceIconsInDOM() {
    const elements = document.querySelectorAll('[data-icon]');
    elements.forEach(el => {
        const key = el.getAttribute('data-icon');
        if(ICONS[key]) {
            const img = document.createElement('img');
            img.src = ICONS[key];
            img.className = 'pixel-icon';
            if(el.className) img.classList.add(...el.classList);
            el.replaceWith(img);
        }
    });
}

function generateIcon(key, colorOverride=null) {
    const map = PIXEL_MAPS[key];
    if(!map) return '';
    
    const size = 7;
    const scale = 4;
    const canvas = document.createElement('canvas');
    canvas.width = size * scale;
    canvas.height = size * scale;
    const ctx = canvas.getContext('2d');
    
    const color = colorOverride ? COLORS[colorOverride] : COLORS[key];
    
    ctx.fillStyle = color;
    
    for(let y=0; y<size; y++) {
        for(let x=0; x<size; x++) {
            if(map[y][x] === '1') {
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
        }
    }
    
    // Outline (Optional, simple box)
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 1;
    // ctx.strokeRect(0,0,canvas.width,canvas.height);
    
    return canvas.toDataURL();
}
