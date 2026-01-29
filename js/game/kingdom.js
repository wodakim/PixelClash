import { SPRITE_CACHE } from '../engine/sprites.js';
import { AUDIO } from '../engine/audio.js';
import { CARDS } from '../data/cards.js';
import { SYSTEM } from '../system/main.js';
import { saveData } from '../core/storage.js';
import { showNotif } from '../ui/notifications.js';
import { t } from '../core/utils.js';
import { addCard } from '../core/state.js';
import { updateMetaUI } from '../ui/meta.js';

export const KINGDOM = {
    canvas: null, ctx: null,
    w: 0, h: 0,
    sprites: [],
    floats: [],
    particles: [],
    clouds: [],
    birds: [],
    props: [], 
    slots: [
        { id: 'mine', name: 'Mine', bg: '#2c3e50', type: 'dungeon' },
        { id: 'farm', name: 'Ferme', bg: '#f1c40f', type: 'farm' },
        { id: 'forge', name: 'Forge', bg: '#e67e22', type: 'forge' },
        { id: 'castle', name: 'Château', bg: '#95a5a6', type: 'castle' }
    ],
    lastUpdate: 0,
    drag: { active: false, mode: 'sprite', target: null, offsetX: 0, offsetY: 0, original: null },
    speechLines: {
        idle: ['k_idle_1', 'k_idle_2', 'k_idle_3', 'k_idle_4', 'k_idle_5', 'k_idle_6', 'k_idle_7', 'k_idle_8', 'k_idle_9'],
        work: ['k_work_1', 'k_work_2', 'k_work_3', 'k_work_4', 'k_work_5', 'k_work_6', 'k_work_7', 'k_work_8', 'k_work_9'],
        drag: ['k_drag_1', 'k_drag_2', 'k_drag_3', 'k_drag_4', 'k_drag_5', 'k_drag_6', 'k_drag_7']
    }
};

export function initKingdom() {
    KINGDOM.canvas = document.getElementById('kingdom-canvas');
    if(!KINGDOM.canvas) return;
    KINGDOM.ctx = KINGDOM.canvas.getContext('2d');
    KINGDOM.ctx.imageSmoothingEnabled = false;

    const start = (e) => handleKInputStart(e);
    const move = (e) => handleKInputMove(e);
    const end = (e) => handleKInputEnd(e);

    KINGDOM.canvas.addEventListener('mousedown', (e) => start({x:e.clientX, y:e.clientY}));
    KINGDOM.canvas.addEventListener('touchstart', (e) => start({x:e.touches[0].clientX, y:e.touches[0].clientY}), {passive:false});
    
    window.addEventListener('mousemove', (e) => move({x:e.clientX, y:e.clientY}));
    window.addEventListener('touchmove', (e) => move({x:e.touches[0].clientX, y:e.touches[0].clientY}), {passive:false});
    
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);

    window.addEventListener('resize', resizeKingdom);
    resizeKingdom(); 

    for(let i=0; i<5; i++) {
        KINGDOM.clouds.push({
            x: Math.random() * KINGDOM.w,
            y: Math.random() * (KINGDOM.h * 0.4),
            speed: 5 + Math.random() * 10,
            w: 30 + Math.random() * 40
        });
    }

    initProps();
    renderKingdomSlots();
    requestAnimationFrame(loopKingdom);
    calcKingdomGold();
}

function initProps() {
    KINGDOM.props = [];
    const w = KINGDOM.w;
    const h = KINGDOM.h;
    const horizonY = h * 0.35;

    for(let i=0; i<15; i++) {
        const x = Math.random() * w;
        const y = horizonY + Math.random() * (h - horizonY);
        const farm = getZoneCoords('farm');
        const mine = getZoneCoords('mine');
        const forge = getZoneCoords('forge');
        const castle = getZoneCoords('castle');

        if(Math.hypot(x - farm.x, y - farm.y) < 60) continue;
        if(Math.hypot(x - mine.x, y - mine.y) < 60) continue;
        if(Math.hypot(x - forge.x, y - forge.y) < 60) continue;
        if(Math.hypot(x - castle.x, y - castle.y) < 80) continue;

        const type = Math.floor(Math.random() * 3);
        KINGDOM.props.push({ x, y, type, scale: 0.8 + Math.random()*0.4 });
    }
    KINGDOM.props.sort((a,b) => a.y - b.y);
}

function handleKInputStart(pos) {
    if(!KINGDOM.canvas) return;
    const rect = KINGDOM.canvas.getBoundingClientRect();
    const mx = pos.x - rect.left;
    const my = pos.y - rect.top;

    // 1. Check Buildings
    const slots = ['castle', 'mine', 'forge', 'farm'];
    for(const id of slots) {
        const coords = getZoneCoords(id);
        if(Math.hypot(mx - coords.x, my - coords.y) < 40) {
            KINGDOM.drag.active = true;
            KINGDOM.drag.mode = 'building';
            KINGDOM.drag.target = id;
            KINGDOM.drag.offsetX = coords.x - mx;
            KINGDOM.drag.offsetY = coords.y - my;
            if(AUDIO && AUDIO.playSFX) AUDIO.playSFX('tick');
            return;
        }
    }

    // 2. Check Paths
    const castle = getZoneCoords('castle');
    const pathTargets = ['mine', 'forge', 'farm'];
    for(const id of pathTargets) {
        const target = getZoneCoords(id);
        const cp = getPathControlPoint(castle, target, id);

        // Check CP (Control Point)
        if(Math.hypot(mx - cp.x, my - cp.y) < 30) {
            KINGDOM.drag.active = true;
            KINGDOM.drag.mode = 'path';
            KINGDOM.drag.target = id;
            KINGDOM.drag.offsetX = cp.x - mx;
            KINGDOM.drag.offsetY = cp.y - my;
            return;
        }

        // Check Midpoint (Grab the wire)
        // M = 0.25*P0 + 0.5*P1 + 0.25*P2
        const midX = 0.25*castle.x + 0.5*cp.x + 0.25*target.x;
        const midY = 0.25*castle.y + 0.5*cp.y + 0.25*target.y;

        if(Math.hypot(mx - midX, my - midY) < 30) {
            KINGDOM.drag.active = true;
            KINGDOM.drag.mode = 'path_mid';
            KINGDOM.drag.target = id;
            KINGDOM.drag.offsetX = midX - mx;
            KINGDOM.drag.offsetY = midY - my;
            return;
        }
    }

    // 3. Check Sprites
    for(let i=KINGDOM.sprites.length-1; i>=0; i--) {
        const s = KINGDOM.sprites[i];
        const dist = Math.hypot(s.x - mx, s.y - my);
        if(dist < 30) {
            KINGDOM.drag.active = true;
            KINGDOM.drag.mode = 'sprite';
            KINGDOM.drag.sprite = s;
            KINGDOM.drag.offsetX = s.x - mx;
            KINGDOM.drag.offsetY = s.y - my;
            s.state = 'dragged';
            if(AUDIO && AUDIO.playSFX) AUDIO.playSFX('tick'); 
            
            const lines = KINGDOM.speechLines.drag; 
            const key = lines[Math.floor(Math.random() * lines.length)];
            spawnKingdomFloat(s.x, s.y - 40, t(key), 1.5, '#fff', '10px');
            break;
        }
    }
}

function handleKInputMove(pos) {
    if(!KINGDOM.drag.active) return;
    const rect = KINGDOM.canvas.getBoundingClientRect();
    const mx = pos.x - rect.left;
    const my = pos.y - rect.top;
    
    if(KINGDOM.drag.mode === 'sprite' && KINGDOM.drag.sprite) {
        const s = KINGDOM.drag.sprite;
        s.x = mx + KINGDOM.drag.offsetX;
        s.y = my + KINGDOM.drag.offsetY;
        
        if(s.x < 0) s.x = 0; if(s.x > KINGDOM.w) s.x = KINGDOM.w;
        if(s.y < 0) s.y = 0; if(s.y > KINGDOM.h) s.y = KINGDOM.h;
    }
    else if(KINGDOM.drag.mode === 'building') {
        const id = KINGDOM.drag.target;
        // Clamp to grass area
        let newX = mx + KINGDOM.drag.offsetX;
        let newY = my + KINGDOM.drag.offsetY;
        
        const horizon = KINGDOM.h * 0.35;
        if(newY < horizon + 20) newY = horizon + 20;
        if(newY > KINGDOM.h - 20) newY = KINGDOM.h - 20;
        if(newX < 20) newX = 20;
        if(newX > KINGDOM.w - 20) newX = KINGDOM.w - 20;

        // Store as relative
        const k = getKingdomData();
        k.layout[id] = { x: newX / KINGDOM.w, y: newY / KINGDOM.h };
    }
    else if(KINGDOM.drag.mode === 'path' || KINGDOM.drag.mode === 'path_mid') {
        const id = KINGDOM.drag.target;
        const k = getKingdomData();
        const castle = getZoneCoords('castle');
        const target = getZoneCoords(id);

        let cpAbsX, cpAbsY;

        if(KINGDOM.drag.mode === 'path') {
            cpAbsX = mx + KINGDOM.drag.offsetX;
            cpAbsY = my + KINGDOM.drag.offsetY;
        } else {
            // Dragging Midpoint: Calculate required CP to put midpoint at mouse
            // P1 = 2*M - 0.5*(P0 + P2)
            // M is mouse pos + offset
            const mX = mx + KINGDOM.drag.offsetX;
            const mY = my + KINGDOM.drag.offsetY;

            cpAbsX = 2 * mX - 0.5 * (castle.x + target.x);
            cpAbsY = 2 * mY - 0.5 * (castle.y + target.y);
        }

        const midX = (castle.x + target.x) / 2;
        const midY = (castle.y + target.y) / 2;
        
        k.paths[id] = { 
            x: cpAbsX - midX, 
            y: cpAbsY - midY 
        };
    }
}

function handleKInputEnd() {
    if(!KINGDOM.drag.active) return;

    if(KINGDOM.drag.mode === 'sprite' && KINGDOM.drag.sprite) {
        const s = KINGDOM.drag.sprite;
        s.state = 'falling';
        s.vy = 0;
        spawnKingdomFloat(s.x, s.y - 40, "AAAAH!", 1.0, '#fff', '10px');
    }
    else if(KINGDOM.drag.mode === 'building' || KINGDOM.drag.mode.startsWith('path')) {
        saveData();
    }
    
    KINGDOM.drag.active = false;
    KINGDOM.drag.sprite = null;
    KINGDOM.drag.target = null;
    KINGDOM.drag.mode = null;
}

export function resizeKingdom() {
    if(!KINGDOM.canvas) return;
    const parent = KINGDOM.canvas.parentElement;
    KINGDOM.w = parent.clientWidth;
    KINGDOM.h = parent.clientHeight;
    KINGDOM.canvas.width = KINGDOM.w;
    KINGDOM.canvas.height = KINGDOM.h;
    KINGDOM.ctx.imageSmoothingEnabled = false;
    initProps();
}
window.resizeKingdom = resizeKingdom;

function getKingdomData() {
    if(!window.PLAYER.kingdom) {
        window.PLAYER.kingdom = {
            assignments: {}, 
            lastClaim: SYSTEM.Time.now(),
            lastCastleDrop: SYSTEM.Time.now(),
            layout: {},
            paths: {}
        };
    }
    if(!window.PLAYER.kingdom.lastCastleDrop) window.PLAYER.kingdom.lastCastleDrop = SYSTEM.Time.now();
    if(!window.PLAYER.kingdom.layout) window.PLAYER.kingdom.layout = {};
    if(!window.PLAYER.kingdom.paths) window.PLAYER.kingdom.paths = {};
    
    // Initialize default layout if empty
    if(Object.keys(window.PLAYER.kingdom.layout).length === 0) {
        // Defaults in relative coords (0.0 - 1.0)
        // Hardcoded defaults were:
        // mine: x=60 (w~400 -> 0.15), y=0.42
        // farm: x=w-60 (0.85), y=0.48
        // forge: x=0.5-40px (~0.4), y=0.78
        // castle: x=0.5+20px (~0.55), y=0.52
        window.PLAYER.kingdom.layout = {
            mine: { x: 0.15, y: 0.42 },
            farm: { x: 0.85, y: 0.48 },
            forge: { x: 0.4, y: 0.78 },
            castle: { x: 0.55, y: 0.52 }
        };
    }
    return window.PLAYER.kingdom;
}

function assignCardToSlot(slotId, cardKey) {
    const k = getKingdomData();
    
    const existingSlot = Object.keys(k.assignments).find(sid => k.assignments[sid] === cardKey);
    if(existingSlot) {
        delete k.assignments[existingSlot]; 
    }

    k.assignments[slotId] = cardKey;
    saveData();
    renderKingdomSlots();
    createKingdomSprites();
    calcKingdomGold();
}

function removeCardFromSlot(slotId) {
    const k = getKingdomData();
    if(k.assignments[slotId]) {
        delete k.assignments[slotId];
        saveData();
        renderKingdomSlots();
        createKingdomSprites();
        calcKingdomGold();
    }
}

function getGoldRate() {
    const k = getKingdomData();
    let totalRate = 0; 

    Object.values(k.assignments).forEach(key => {
        if(!CARDS[key]) return;
        const rarityMult = { common: 20, rare: 40, epic: 100, legendary: 250 };
        const base = rarityMult[CARDS[key].rarity] || 20;
        const lvl = window.getCardLevel(key);
        totalRate += base * lvl;
    });

    return totalRate;
}

function calcKingdomGold() {
    const k = getKingdomData();
    const now = SYSTEM.Time.now();
    const diffMs = now - k.lastClaim;
    const ratePerHour = getGoldRate();
    
    const earned = Math.floor((ratePerHour / 3600000) * diffMs);
    
    document.getElementById('k-rate').innerHTML = ratePerHour;
    
    const btn = document.getElementById('btn-collect-gold');
    const label = document.getElementById('k-pending-gold');
    
    if(earned >= 1) {
        btn.style.display = 'block';
        label.innerHTML = earned;
    } else {
        btn.style.display = 'none';
    }

    if(k.assignments['castle']) {
        const dropDiff = now - k.lastCastleDrop;
        if(dropDiff >= 3600000) { 
            const key = k.assignments['castle'];
            k.lastCastleDrop = now;
            addCard(key, 1);
            saveData();
            showNotif("ROYAUME", `+1 ${t(key+'_name')} (Château)`);
            spawnKingdomFloat(KINGDOM.w/2, KINGDOM.h*0.65 - 50, "+1 CARTE", 2.0, '#2ecc71');
        }
    }
    
    return earned;
}

export function collectKingdomGold() {
    const earned = calcKingdomGold();
    if(earned > 0) {
        window.PLAYER.gold += earned;
        const k = getKingdomData();
        k.lastClaim = SYSTEM.Time.now();
        saveData();
        updateMetaUI(); 
        calcKingdomGold(); 
        if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));
        showNotif("ROYAUME", `Récolté ${earned} Or !`);
    }
}
window.collectKingdomGold = collectKingdomGold;

function renderKingdomSlots() {
    const container = document.getElementById('kingdom-slots');
    if(!container) return;
    container.innerHTML = '';
    
    const k = getKingdomData();

    KINGDOM.slots.forEach(slot => {
        const assignedKey = k.assignments[slot.id];
        
        const div = document.createElement('div');
        div.className = 'kingdom-slot';
        div.style.cssText = `
            width: 80px; height: 100px; 
            background: #222; border: 2px solid ${assignedKey ? '#2ecc71' : '#7f8c8d'};
            border-radius: 6px; display: flex; flex-direction: column; 
            align-items: center; justify-content: center; position: relative;
        `;
        
        div.innerHTML = `<div style="font-size:0.6rem; color:#aaa; position:absolute; top:5px;">${slot.name}</div>`;
        
        if(assignedKey) {
            const c = document.createElement('canvas');
            c.width = 48; c.height = 48;
            const ctx = c.getContext('2d');
            ctx.imageSmoothingEnabled = false;
            const s = SPRITE_CACHE[assignedKey + '_blue'] || SPRITE_CACHE[assignedKey];
            if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 48, 48);
            div.appendChild(c);
            
            const name = document.createElement('div');
            name.innerHTML = t(assignedKey+'_name');
            name.style.cssText = "font-size:0.5rem; text-align:center; width:90%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;";
            div.appendChild(name);
            
            const rmBtn = document.createElement('button');
            rmBtn.innerHTML = "X";
            rmBtn.style.cssText = "position:absolute; top:-5px; right:-5px; background:red; color:white; border:1px solid white; border-radius:50%; width:20px; height:20px; font-size:0.6rem; cursor:pointer;";
            rmBtn.onclick = (e) => { e.stopPropagation(); removeCardFromSlot(slot.id); };
            div.appendChild(rmBtn);

        } else {
            div.innerHTML += `<div style="font-size:2rem; color:#444;">+</div>`;
            div.style.cursor = "pointer";
            div.onclick = () => openSlotSelector(slot.id);
        }
        
        container.appendChild(div);
    });
}

function openSlotSelector(slotId) {
    const modal = document.createElement('div');
    modal.id = 'slot-selector-modal';
    modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:300; display:flex; flex-direction:column; align-items:center; justify-content:center;";
    
    const content = document.createElement('div');
    content.style.cssText = "background:#2c3e50; border:4px solid white; padding:20px; width:90%; max-height:80%; overflow-y:auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(70px, 1fr)); gap:10px;";
    
    const owned = Object.keys(window.PLAYER.cards);
    owned.forEach(key => {
        const d = document.createElement('div');
        d.className = 'pixel-card'; 
        d.style.width = '70px'; d.style.height = '90px';
        d.style.border = '2px solid #fff';
        
        const k = getKingdomData();
        const isAssigned = Object.values(k.assignments).includes(key);
        if(isAssigned) {
            d.style.opacity = '0.5';
            d.style.pointerEvents = 'none';
        }
        
        const c = document.createElement('canvas');
        c.width = 48; c.height = 48;
        c.style.marginTop = '10px';
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        const s = SPRITE_CACHE[key];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 48, 48);
        d.appendChild(c);
        
        d.onclick = () => {
            assignCardToSlot(slotId, key);
            document.body.removeChild(modal);
        };
        
        content.appendChild(d);
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "ANNULER";
    closeBtn.className = "pixel-btn";
    closeBtn.style.marginTop = "20px";
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    modal.appendChild(content);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
}

function createKingdomSprites() {
    KINGDOM.sprites = [];
    const k = getKingdomData();
    const house = getZoneCoords('castle');
    
    Object.keys(k.assignments).forEach(slotId => {
        const key = k.assignments[slotId];
        const startX = house.x;
        const startY = house.y;
        
        // Initial state
        KINGDOM.sprites.push({
            key: key,
            slotId: slotId,
            x: startX, y: startY,
            pathT: 0.0, // Progress 0 to 1
            speed: 0.3 + Math.random() * 0.1, // T per second roughly? No, speed should be pixels/sec
            pixelSpeed: 30 + Math.random() * 10,
            state: 'moving_to_work', 
            timer: 0,
            animTimer: Math.random()
        });
    });
}

function loopKingdom() {
    const tabKingdom = document.getElementById('tab-kingdom');
    if(tabKingdom && tabKingdom.classList.contains('active')) {
        updateKingdomVisuals(0.016);
        drawKingdom();
        if(Math.random() < 0.05) calcKingdomGold();
    }
    requestAnimationFrame(loopKingdom);
}

function updateKingdomVisuals(dt) {
    const castle = getZoneCoords('castle');

    KINGDOM.sprites.forEach(s => {
        if(s.state === 'dragged') {
            return;
        }
        else if(s.state === 'falling') {
            s.vy = (s.vy || 0) + 1000 * dt; 
            s.y += s.vy * dt;
            
            // Just land where they are for simplicity, then walk home?
            const floorY = s.y; 
            
            // If fallen too far
            if(s.y >= KINGDOM.h) {
                 s.y = KINGDOM.h - 50;
                 s.vy = 0;
                 // Reset to walking
                 s.state = 'moving_to_work';
                 s.pathT = 0;
                 spawnKingdomFloat(s.x, s.y - 30, "Ouf!", 1.0, '#fff', '10px');
            }
        }
        else if(s.state === 'working') {
            const workSpot = getWorkCoords(s.slotId);
            s.x = workSpot.x; s.y = workSpot.y;
            
            s.timer -= dt;
            if(Math.random() < 0.1) {
                if(s.slotId === 'forge') spawnParticle(s.x, s.y - 10, 'smoke');
                if(s.slotId === 'mine') spawnParticle(s.x, s.y - 10, 'dust');
                if(s.slotId === 'farm') spawnParticle(s.x, s.y - 10, 'leaf');
            }
            
            if(s.timer <= 0) {
                s.state = 'moving_to_store';
                s.pathT = 1.0; // Start at end of path (Work)
            }
        }
        else {
            // MOVING ALONG BEZIER PATH
            const target = getWorkCoords(s.slotId); // Use getWorkCoords for slightly better endpoint
            const cp = getPathControlPoint(castle, target, s.slotId);
            
            // Calculate Path Length (Approx) to normalize speed
            // Simple distance
            const pathLen = Math.hypot(castle.x - target.x, castle.y - target.y) * 1.2; // approx curve
            const tStep = (s.pixelSpeed / pathLen) * dt;

            if(s.state === 'moving_to_work') {
                s.pathT += tStep;
                if(s.pathT >= 1.0) {
                    s.pathT = 1.0;
                    s.state = 'working';
                    s.timer = 3.0 + Math.random() * 2;
                }
            } else if(s.state === 'moving_to_store') {
                s.pathT -= tStep;
                if(s.pathT <= 0.0) {
                    s.pathT = 0.0;
                    spawnKingdomFloat(s.x, s.y - 20, "+ OR");
                    s.state = 'moving_to_work';
                }
            }
            
            // Quadratic Bezier Interpolation
            const t = s.pathT;
            const invT = 1 - t;
            
            // B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
            const p0 = castle;
            const p1 = cp;
            const p2 = target;
            
            s.x = (invT * invT * p0.x) + (2 * invT * t * p1.x) + (t * t * p2.x);
            s.y = (invT * invT * p0.y) + (2 * invT * t * p1.y) + (t * t * p2.y);
        }
        
        s.animTimer = (s.animTimer || 0) + dt;

        if(!s.speechTimer) s.speechTimer = Math.random() * 10 + 5;
        s.speechTimer -= dt;
        if(s.speechTimer <= 0) {
            let pool = KINGDOM.speechLines.idle;
            if(s.state === 'working') pool = KINGDOM.speechLines.work;
            if(s.state === 'dragged' || s.state === 'falling') pool = KINGDOM.speechLines.drag;
            
            const key = pool[Math.floor(Math.random() * pool.length)];
            spawnKingdomFloat(s.x, s.y - 40, t(key), 2.0, '#fff', '10px'); 
            s.speechTimer = Math.random() * 15 + 10; 
        }
    });
    
    KINGDOM.floats.forEach(f => {
        f.y -= 20 * dt;
        f.life -= dt;
    });
    KINGDOM.floats = KINGDOM.floats.filter(f => f.life > 0);

    KINGDOM.particles.forEach(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
        if(p.type === 'smoke') p.r += 5 * dt;
    });
    KINGDOM.particles = KINGDOM.particles.filter(p => p.life > 0);

    KINGDOM.clouds.forEach(c => {
        c.x += c.speed * dt;
        if(c.x > KINGDOM.w + 50) c.x = -50;
    });

    if(Math.random() < 0.005) { 
        KINGDOM.birds.push({
            x: -20, y: Math.random() * (KINGDOM.h * 0.3),
            vx: 50 + Math.random()*30, vy: (Math.random()-0.5)*10,
            life: 10
        });
    }
    KINGDOM.birds.forEach(b => {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.life -= dt;
    });
    KINGDOM.birds = KINGDOM.birds.filter(b => b.life > 0 && b.x < KINGDOM.w + 50);
}

function spawnParticle(x, y, type) {
    let p = { x, y, type, life: 1.0, vx: (Math.random()-0.5)*20, vy: -20 - Math.random()*20 };
    if(type === 'smoke') { p.color = '#7f8c8d'; p.r = 2; p.life=1.5; }
    if(type === 'dust') { p.color = '#bdc3c7'; p.r = 1; p.life=0.8; }
    if(type === 'leaf') { p.color = '#2ecc71'; p.r = 1.5; p.vy = 10; p.vx = 20; p.life=2.0; } // Falling
    KINGDOM.particles.push(p);
}

function getWorkCoords(slotId) {
    const zone = getZoneCoords(slotId);
    if(slotId === 'castle') {
        return { x: zone.x + 30, y: zone.y + 10 };
    }
    return zone;
}

function getZoneCoords(slotId) {
    const k = getKingdomData();
    const pos = k.layout[slotId];
    if(pos) {
        return { x: pos.x * KINGDOM.w, y: pos.y * KINGDOM.h };
    }
    // Fallback if somehow missing
    const w = KINGDOM.w;
    const h = KINGDOM.h;
    if(slotId === 'mine') return { x: 60, y: h * 0.42 }; 
    if(slotId === 'farm') return { x: w - 60, y: h * 0.48 }; 
    if(slotId === 'forge') return { x: w / 2 - 40, y: h * 0.78 }; 
    if(slotId === 'castle') return { x: w/2 + 20, y: h * 0.52 }; 
    return { x: w/2, y: h * 0.55 }; 
}

function getPathControlPoint(start, end, pathId) {
    const k = getKingdomData();
    const offset = k.paths[pathId] || { x: 0, y: 0 };
    
    // Default Midpoint + Offset
    const mx = (start.x + end.x) / 2;
    const my = (start.y + end.y) / 2;
    
    return { x: mx + offset.x, y: my + offset.y };
}

function spawnKingdomFloat(x, y, text, life=1.0, color='#f1c40f', font='bold 12px sans-serif') {
    if(!KINGDOM.floats) KINGDOM.floats = [];
    KINGDOM.floats.push({ x, y, text, life: life, maxLife: life, color: color, font: font });
}

function drawKingdom() {
    if(!KINGDOM.ctx) return;
    const ctx = KINGDOM.ctx;
    const w = KINGDOM.w;
    const h = KINGDOM.h;
    
    const horizonY = h * 0.35;

    const active16 = window.PLAYER.active_16bit && window.PLAYER.active_16bit.kingdom ? window.PLAYER.active_16bit.kingdom : [];

    // SKY
    let colorSkyTop = "#3498db";
    let colorSkyBot = "#87ceeb";
    let colorMount = "#5d6d7e";

    if(active16.includes('background_16bit')) {
        colorSkyTop = "#2980b9";
        colorSkyBot = "#6dd5fa";
        colorMount = "#8e44ad"; // Purple mountains
    }

    const gradSky = ctx.createLinearGradient(0, 0, 0, horizonY);
    gradSky.addColorStop(0, colorSkyTop);
    gradSky.addColorStop(1, colorSkyBot);
    ctx.fillStyle = gradSky;
    ctx.fillRect(0,0,w, horizonY);

    // MOUNTAINS
    ctx.fillStyle = colorMount;
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(w*0.2, horizonY - 40);
    ctx.lineTo(w*0.4, horizonY);
    ctx.lineTo(w*0.6, horizonY - 60);
    ctx.lineTo(w*0.8, horizonY - 30);
    ctx.lineTo(w, horizonY);
    ctx.lineTo(w, horizonY + 100);
    ctx.lineTo(0, horizonY + 100);
    ctx.fill();

    // GRASS
    let colorGrassTop = "#27ae60";
    let colorGrassBot = "#2ecc71";

    if(active16.includes('grass_16bit')) {
        colorGrassTop = "#1abc9c";
        colorGrassBot = "#16a085"; // Teal/retro green
    }

    const gradG = ctx.createLinearGradient(0, horizonY, 0, h);
    gradG.addColorStop(0, colorGrassTop);
    gradG.addColorStop(1, colorGrassBot);
    ctx.fillStyle = gradG;
    ctx.fillRect(0, horizonY, w, h - horizonY);

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    for(let i=0; i<100; i++) {
        const gx = Math.random()*w; 
        const gy = horizonY + Math.random()*(h-horizonY);
        ctx.fillRect(gx, gy, 4, 4);
    }

    KINGDOM.props.forEach(p => {
        const px = p.x; const py = p.y;
        
        let key = '';
        if(p.type === 0) key = 'prop_tree';
        else if(p.type === 1) key = 'prop_rock';
        else key = 'prop_bush';

        let finalKey = key;
        let baseScale = 3; // 8-bit scale

        if(active16.includes(key + '_16bit')) {
            finalKey = key + '_16bit';
            baseScale = 1.5; // 16-bit scale
        }

        const s = (p.scale || 1) * baseScale;
        const sprite = SPRITE_CACHE[finalKey] || SPRITE_CACHE[key];

        if(sprite) {
             const w = sprite.width * s;
             const h = sprite.height * s;
             ctx.drawImage(sprite, px - w/2, py - h + 5, w, h);
        }
    });

    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    KINGDOM.clouds.forEach(c => {
        ctx.fillRect(c.x, c.y, c.w, 10);
        ctx.fillRect(c.x + 10, c.y - 10, c.w - 20, 10);
    });

    const farm = getZoneCoords('farm');
    const mine = getZoneCoords('mine');
    const forge = getZoneCoords('forge');
    const castle = getZoneCoords('castle');

    // 8-BIT PATHS
    ctx.fillStyle = '#a65e2e'; // Dirt color
    
    // Draw paths with dynamic control points
    const cpForge = getPathControlPoint(castle, forge, 'forge');
    drawPixelPath(ctx, castle.x, castle.y, cpForge.x, cpForge.y, forge.x, forge.y);
    
    const cpMine = getPathControlPoint(castle, mine, 'mine');
    drawPixelPath(ctx, castle.x, castle.y, cpMine.x, cpMine.y, mine.x, mine.y);
    
    const cpFarm = getPathControlPoint(castle, farm, 'farm');
    drawPixelPath(ctx, castle.x, castle.y, cpFarm.x, cpFarm.y, farm.x, farm.y);

    drawStructure(ctx, castle.x, castle.y, 'castle');
    drawCastleStatus(ctx, castle.x, castle.y);

    drawStructure(ctx, mine.x, mine.y, 'mine');
    drawStructure(ctx, farm.x, farm.y, 'farm');
    drawStructure(ctx, forge.x, forge.y, 'forge');

    // Debug / Editor Visuals for Path Dragging
    if(KINGDOM.drag.active && (KINGDOM.drag.mode === 'path' || KINGDOM.drag.mode === 'path_mid')) {
        const castle = getZoneCoords('castle');
        const id = KINGDOM.drag.target;
        const target = getZoneCoords(id);
        const cp = getPathControlPoint(castle, target, id);

        // Draw Handle
        ctx.fillStyle = '#f1c40f';
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, 8, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();

        // Draw Skeleton Lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(castle.x, castle.y);
        ctx.lineTo(cp.x, cp.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    KINGDOM.particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
    });

    ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
    KINGDOM.birds.forEach(b => {
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x - 5, b.y - 2);
        ctx.lineTo(b.x - 10, b.y);
        ctx.stroke();
    });

    KINGDOM.sprites.forEach(s => {
        let frame = 0;
        let animSpeed = 0.5;
        
        if(s.state === 'working') animSpeed = 0.2; 
        if(s.state === 'dragged' || s.state === 'falling') animSpeed = 0; 
        
        const frameCount = SPRITE_CACHE[s.key + '_frames'] || 1;
        if(frameCount > 1 && animSpeed > 0) {
            const totalAnimTime = animSpeed * frameCount;
            const t = (s.animTimer || 0) % totalAnimTime;
            frame = Math.floor((t / totalAnimTime) * frameCount);
        }

        const sprite = SPRITE_CACHE[s.key + '_blue_' + frame] || SPRITE_CACHE[s.key + '_blue_0'] || SPRITE_CACHE[s.key];
        
        if(sprite) {
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.beginPath(); ctx.ellipse(s.x, s.y+14, 10, 4, 0, 0, Math.PI*2); ctx.fill();
            
            // Check if 16-bit sprite (24x24) or standard (12x12)
            // If sprite width is > 16, it's likely 16-bit.
            const isHighRes = sprite.width > 16;
            const drawSize = isHighRes ? 48 : 32;
            const offset = drawSize / 2;

            if(s.state === 'dragged') {
                ctx.save();
                ctx.translate(s.x, s.y);
                ctx.scale(1.2, 1.2);
                ctx.drawImage(sprite, -offset, -offset, drawSize, drawSize);
                ctx.restore();
            } else {
                ctx.drawImage(sprite, s.x - offset, s.y - offset, drawSize, drawSize);
            }

            if(s.state === 'working') {
                ctx.save();
                ctx.translate(s.x + 10, s.y);
                ctx.rotate(Math.sin(Date.now()/100) * 0.5);
                ctx.fillStyle = '#bdc3c7';
                ctx.fillRect(0, -5, 4, 15); 
                ctx.restore();
            }
        }
    });
    
    if(KINGDOM.floats) {
        KINGDOM.floats.forEach(f => {
            ctx.font = f.font || 'bold 12px sans-serif';
            if(f.color === '#fff') {
                 const m = ctx.measureText(f.text);
                 ctx.fillStyle = 'rgba(0,0,0,0.6)';
                 ctx.fillRect(f.x - m.width/2 - 4, f.y - 10, m.width + 8, 14);
            }
            ctx.fillStyle = f.color || '#f1c40f';
            ctx.textAlign = 'center';
            ctx.fillText(f.text, f.x, f.y);
            ctx.textAlign = 'left'; 
        });
    }
}

function drawCastleStatus(ctx, x, y) {
    const k = getKingdomData();
    if(!k.assignments['castle']) return;

    const now = SYSTEM.Time.now();
    const last = k.lastCastleDrop || now;
    const diff = now - last;
    const oneHour = 3600000;
    const pct = Math.min(1.0, diff / oneHour);

    const barW = 60;
    const barH = 6;
    const bx = x - barW/2;
    const by = y - 90; 

    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(bx, by, barW, barH);
    ctx.fillStyle = '#f1c40f';
    ctx.fillRect(bx+1, by+1, (barW-2)*pct, barH-2);
    
    ctx.fillStyle = '#fff';
    ctx.fillRect(x - 8, by - 20, 16, 20);
    ctx.fillStyle = '#3498db';
    ctx.fillRect(x - 6, by - 18, 12, 10);
    
    ctx.fillStyle = '#fff';
    ctx.font = '6px monospace';
    ctx.fillText("CARD", x-7, by+35);
}

function drawStructure(ctx, x, y, type) {
    let key = 'structure_' + type;

    // Check for 16-bit override
    const active16 = window.PLAYER.active_16bit && window.PLAYER.active_16bit.kingdom ? window.PLAYER.active_16bit.kingdom : [];
    if(active16.includes(key + '_16bit')) {
        key += '_16bit';
    }

    const sprite = SPRITE_CACHE[key] || SPRITE_CACHE['structure_' + type];
    
    if(sprite) {
        // Adapt scale based on resolution (24x24 vs 12x12)
        const isHighRes = sprite.width > 16;
        const scale = isHighRes ? 2.5 : 5;
        const w = sprite.width * scale;
        const h = sprite.height * scale;
        
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(x, y, w/2, h/4, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.drawImage(sprite, x - w/2, y - h + 10, w, h);
    }
}

export function initKingdomSystem() {
    initKingdom();
    createKingdomSprites();
}

function drawPixelPath(ctx, x1, y1, cx, cy, x2, y2) {
    const dist = Math.hypot(x2 - x1, y2 - y1);
    const steps = Math.floor(dist / 2); // Density
    const pixelSize = 4;
    
    for(let i=0; i<=steps; i++) {
        const t = i / steps;
        // Quadratic Bezier
        const x = (1-t)*(1-t)*x1 + 2*(1-t)*t*cx + t*t*x2;
        const y = (1-t)*(1-t)*y1 + 2*(1-t)*t*cy + t*t*y2;
        
        // Deterministic noise based on position index
        // Prevents shimmering animation on every frame
        const seed = Math.floor(x) + Math.floor(y) + i;
        const r1 = Math.abs(Math.sin(seed * 12.9898));
        const r2 = Math.abs(Math.sin(seed * 78.233));
        
        const jx = (r1 - 0.5) * 6;
        const jy = (r2 - 0.5) * 6;
        
        // Draw main dirt pixel
        ctx.fillStyle = '#a65e2e';
        ctx.fillRect(Math.floor(x + jx), Math.floor(y + jy), pixelSize, pixelSize);
        
        // Occasional darker pixel for texture
        if(r1 > 0.7) {
            ctx.fillStyle = '#8a4b23';
            ctx.fillRect(Math.floor(x + jx + 2), Math.floor(y + jy + 2), 2, 2);
        }
    }
}
