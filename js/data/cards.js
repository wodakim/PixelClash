export const RARITY_INFOS = {
    common: { color: '#bdc3c7', prob: 50 },    // Gris
    uncommon: { color: '#2ecc71', prob: 30 }, // Vert
    rare: { color: '#f1c40f', prob: 15 },     // Jaune
    legendary: { color: '#e67e22', prob: 4 }, // Orange
    god: { color: '#e74c3c', prob: 1 }        // Rouge
};

export const UPGRADE_COSTS = [
    { cards: 0, gold: 0 },    // Lvl 1 (Base)
    { cards: 2, gold: 50 },   // -> Lvl 2
    { cards: 4, gold: 150 },  // -> Lvl 3
    { cards: 10, gold: 400 }, // -> Lvl 4
    { cards: 20, gold: 1000 },// -> Lvl 5
    { cards: 50, gold: 2000 },// -> Lvl 6
    { cards: 100, gold: 5000 }// -> Lvl 7 (Max?)
];

// --- STATS DE COMBAT (27 UNITÉS) ---
export const CARDS = {
    // --- BASE ---
    archer:   { cost:3, hp:160, dmg:48, speed:50, range:140, count:2, speed_atk:1.0, isAir:false, rarity:'common', unlockAt:0 },
    knight:   { cost:3, hp:700, dmg:75, speed:45, range:30, count:1, speed_atk:1.2, isAir:false, rarity:'common', unlockAt:0 },
    skeleton: { cost:1, hp:40, dmg:40, speed:60, range:20, count:4, speed_atk:1.0, isAir:false, rarity:'common', unlockAt:0 },
    bomber:   { cost:3, hp:250, dmg:100, speed:45, range:100, splash:true, speed_atk:1.3, isAir:false, rarity:'uncommon', unlockAt:0 },
    giant:    { cost:5, hp:2000, dmg:110, speed:25, range:30, count:1, target:'building', speed_atk:1.5, isAir:false, rarity:'uncommon', unlockAt:0 },
    fireball: { cost:4, type:'spell', dmg:325, speed:100, radius:100, isAir:true, rarity:'rare', unlockAt:0 },
    ninja:    { cost:4, hp:320, dmg:130, speed:85, range:30, speed_atk:0.9, isAir:false, rarity:'rare', unlockAt:50 },
    wizard:   { cost:5, hp:500, dmg:110, speed:45, range:110, splash:true, speed_atk:1.4, isAir:false, rarity:'legendary', unlockAt:60 },
    baby_dragon: { cost:4, hp:850, dmg:95, speed:55, range:100, count:1, type:'air', splash:true, speed_atk:1.4, isAir:true, rarity:'legendary', unlockAt:40 },
    paladin:     { cost:4, hp:950, dmg:70, speed:40, range:30, special:'heal', speed_atk:1.5, isAir:false, rarity:'rare', unlockAt:100 },
    golem:       { cost:8, hp:4200, dmg:260, speed:12, range:30, target:'building', speed_atk:2.5, isAir:false, rarity:'god', unlockAt:100 },
    lightning:   { cost:6, type:'spell', dmg:550, radius:50, effect:'stun', isAir:true, rarity:'god', unlockAt:200 },

    // --- NOUVELLES UNITÉS ---
    goblin:   { cost:2, hp:85, dmg:55, speed:80, range:20, count:3, speed_atk:0.9, isAir:false, rarity:'common', unlockAt:5 },
    spear_gob:{ cost:2, hp:60, dmg:35, speed:75, range:120, count:3, speed_atk:1.1, isAir:false, rarity:'common', unlockAt:5 },
    bat:      { cost:2, hp:30, dmg:30, speed:70, range:20, count:4, isAir:true, speed_atk:0.8, rarity:'common', unlockAt:20 },
    barbarian:{ cost:5, hp:480, dmg:65, speed:40, range:25, count:4, speed_atk:1.3, isAir:false, rarity:'uncommon', unlockAt:50 },
    cannon:   { cost:3, hp:550, dmg:90, speed:0, range:130, count:1, speed_atk:1.0, isAir:false, rarity:'uncommon', unlockAt:15 },
    minion:   { cost:3, hp:130, dmg:65, speed:70, range:20, count:3, isAir:true, speed_atk:1.0, rarity:'uncommon', unlockAt:30 },
    hog:      { cost:4, hp:850, dmg:150, speed:75, range:25, count:1, target:'building', speed_atk:1.3, isAir:false, rarity:'rare', unlockAt:40 },
    musketeer:{ cost:4, hp:400, dmg:140, speed:40, range:180, count:1, speed_atk:1.1, isAir:false, rarity:'rare', unlockAt:25 },
    valkyrie: { cost:4, hp:900, dmg:100, speed:45, range:35, splash:true, speed_atk:1.4, isAir:false, rarity:'rare', unlockAt:35 },
    miniteetra:   { cost:4, hp:700, dmg:320, speed:65, range:25, count:1, speed_atk:1.6, isAir:false, rarity:'legendary', unlockAt:70 },
    witch:       { cost:5, hp:520, dmg:55, speed:40, range:120, splash:true, speed_atk:0.5, isAir:false, rarity:'legendary', unlockAt:80 },
    teetra:       { cost:7, hp:2500, dmg:600, speed:20, range:30, count:1, speed_atk:1.8, isAir:false, rarity:'god', unlockAt:150 },
    freeze:      { cost:4, type:'spell', dmg:10, radius:80, effect:'stun', isAir:true, rarity:'legendary', unlockAt:90 },
    angel:       { cost:5, hp:800, dmg:80, speed:50, range:100, special:'heal', isAir:true, speed_atk:1.5, rarity:'god', unlockAt:250 },
    xbow:        { cost:6, hp:800, dmg:30, speed:0, range:250, count:1, speed_atk:0.3, isAir:false, rarity:'god', unlockAt:300 }
};

export function getUnitStats(key, level) {
    const base = CARDS[key];
    if(!base) return null;
    if(level <= 1) return base;
    
    // Formule: Stat * (1.02 ^ (Level - 1)) -> +2% per level
    const mult = Math.pow(1.02, level - 1);
    
    // On clone pour ne pas modifier l'original
    let stats = { ...base };
    if(stats.hp) stats.hp = Math.floor(stats.hp * mult);
    if(stats.dmg) stats.dmg = Math.floor(stats.dmg * mult);
    
    return stats;
}
