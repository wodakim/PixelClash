import { AUDIO } from '../engine/audio.js';
import { SPRITE_CACHE } from '../engine/sprites.js';
import { CARDS, getUnitStats } from '../data/cards.js';
import { SKINS } from '../data/skins.js';
import { MODULES } from '../data/modules.js';
import { GAME_W, GAME_H } from '../data/config.js';
import { t } from '../core/utils.js';
import { saveData } from '../core/storage.js';
import { showNotif } from '../ui/notifications.js';
import { startRoulette } from '../ui/roulette.js';
import { openFreeTutorialChest } from '../ui/shop.js';
import { showTutorialOverlay, TUTORIALS } from '../ui/tutorial.js';

window.GAME = {
    state: 'ended', t: 0, elixir: 5, aiElixir: 5,
    units: [], projectiles: [], particles: [], floats: [],
    hand: [], deck_queue: [], towers: [], ai_deck: [],
    ai_cooldown: 0,
    startTimer: 4, pauseTimer: 30, ai_level: 'easy',
    crowns_blue: 0, crowns_red: 0, shake: 0,
    isTutorial: false
};

let canvas = null;
let ctx = null;
let SCALE = 1;
let CANVAS_RECT = { left:0, top:0 };
let selectedHandIdx = -1;

export function initGame() {
    canvas = document.getElementById('game-canvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    window.addEventListener('resize', resize);
    resize();
    const wrapper = document.getElementById('game-arena-wrapper');
    const startInput = (x, y) => handleInputStart(x, y);
    document.addEventListener('mousemove', handleInputMove);
    document.addEventListener('touchmove', handleInputMove, {passive:false});
    document.addEventListener('mouseup', handleInputEnd);
    document.addEventListener('touchend', handleInputEnd);
    if(wrapper) {
        wrapper.addEventListener('mousedown', (e) => startInput(e.clientX, e.clientY));
        wrapper.addEventListener('touchstart', (e) => startInput(e.touches[0].clientX, e.touches[0].clientY), {passive:false});
    }
}

export function resize() {
    const wrapper = document.getElementById('game-arena-wrapper');
    if(!wrapper) return;
    
    // Check for visible ads
    const ads = wrapper.querySelectorAll('.ad-banner');
    let adHeight = 0;
    ads.forEach(ad => {
        if(ad.offsetParent !== null && window.getComputedStyle(ad).display !== 'none') {
            adHeight += 50; // Assume 50px height
        }
    });

    const w = wrapper.clientWidth; 
    const h = wrapper.clientHeight - adHeight;
    
    let s = h / GAME_H;
    if(s * GAME_W > w) s = w / GAME_W;
    SCALE = s * 0.95;
    if(canvas) {
        canvas.width = GAME_W * SCALE; canvas.height = GAME_H * SCALE;
        CANVAS_RECT = canvas.getBoundingClientRect();
        if(ctx) ctx.imageSmoothingEnabled = false;
    }
}

// --- MATCHMAKING & START ---
export function startMatchmakingSequence() {
    if(!window.PLAYER) return;
    
    if(!window.PLAYER.tutorial_complete) {
        startTutorialBattle();
        return;
    }

    if(window.PLAYER.deck.length < 5) {
        showNotif("ATTENTION", t('notif_deck_min'));
        return;
    }
    if(window.PLAYER.deck.length > 6) {
        showNotif("ATTENTION", t('notif_deck_full'));
        return;
    }

    if(AUDIO.isOn) {
        if(AUDIO.ctx && AUDIO.ctx.state === 'suspended') AUDIO.ctx.resume();
        AUDIO.playSFX('spawn');
    }

    document.getElementById('meta-view').classList.add('hidden');
    const mmScreen = document.getElementById('matchmaking-screen');
    const foundText = document.getElementById('mm-player-found');

    mmScreen.classList.remove('hidden');
    foundText.innerHTML = "";

    const fakeOpponents = ["DarkLord", "PixelKing", "NoobSlayer", "ClashGod", "IronFist"];
    const opponent = fakeOpponents[Math.floor(Math.random() * fakeOpponents.length)];

    setTimeout(() => {
        foundText.innerHTML = `${t('battle').replace('!','')}:<br><span style="color:#e74c3c; font-size:1.5rem;">${opponent}</span>`;
        if(AUDIO.isOn) AUDIO.playSFX('attack');
        setTimeout(() => {
            mmScreen.classList.add('hidden');
            launchGameView();
        }, 1500);
    }, 2000);
}

export function launchGameView() {
    document.getElementById('game-view').style.display = 'flex';
    document.getElementById('game-over-modal').style.display = 'none';
    resize();
    window.GAME.isTutorial = false;
    startBattleEngine();
}

export function startTutorialBattle() {
    if(AUDIO.isOn) {
        if(AUDIO.ctx && AUDIO.ctx.state === 'suspended') AUDIO.ctx.resume();
    }
    
    document.getElementById('meta-view').classList.add('hidden');
    document.getElementById('game-view').style.display = 'flex';
    document.getElementById('game-over-modal').style.display = 'none';
    
    resize();
    window.GAME.isTutorial = true;
    startBattleEngine();
    showNotif("TUTORIEL", "Détruisez la tour du Roi !");
}

export function startBattleEngine() {
    const tr = window.PLAYER.trophies;
    const GAME = window.GAME;

    GAME.ai_card_level = Math.max(1, Math.floor(tr / 100) + 1);
    
    let eMult = 0.7 + (tr / 800);
    if(eMult > 1.3) eMult = 1.3;
    GAME.ai_elixir_mult = eMult;
    
    let cdBase = 4.0 - (tr / 200);
    if(cdBase < 1.5) cdBase = 1.5;
    GAME.ai_cooldown_base = cdBase;
    
    if(tr < 50) GAME.ai_mode = 'dumb'; 
    else if(tr < 150) GAME.ai_mode = 'lane'; 
    else GAME.ai_mode = 'smart'; 

    let diffMsg = `AI Lv.${GAME.ai_card_level}`;
    console.log(`Battle Start. Trophies: ${tr} -> AI Lv:${GAME.ai_card_level}, Speed:${cdBase.toFixed(1)}s, Elixir:x${eMult.toFixed(2)}, Mode:${GAME.ai_mode}`);

    GAME.t = 180; 
    GAME.elixir = 5; GAME.aiElixir = 5;
    GAME.units = []; GAME.projectiles = []; GAME.particles = []; GAME.floats = []; GAME.hand = [];
    GAME.crowns_blue = 0; GAME.crowns_red = 0;
    GAME.startTimer = 4; GAME.shake = 0;
    GAME.state = 'countdown';

    GAME.ai_stats = { hp: 1, dmg: 1, speed: 1, elixir: 1, lifesteal: 0 };
    if(window.PLAYER.ai_placements && !GAME.isTutorial) {
        window.PLAYER.ai_placements.forEach(p => {
            const m = MODULES[p.key];
            if(m && m.effect) {
                if(m.effect.hp) GAME.ai_stats.hp *= m.effect.hp;
                if(m.effect.dmg) GAME.ai_stats.dmg *= m.effect.dmg;
                if(m.effect.speed) GAME.ai_stats.speed *= m.effect.speed;
                if(m.effect.elixir) GAME.ai_stats.elixir *= m.effect.elixir;
                if(m.effect.lifesteal) GAME.ai_stats.lifesteal += m.effect.lifesteal;
            }
        });
    }

    if(AUDIO.isOn) AUDIO.playMusic(SKINS[window.PLAYER.currentSkin].music || 'battle');

    GAME.deck_queue = [...window.PLAYER.deck, ...window.PLAYER.deck].sort(() => Math.random()-0.5);
    GAME.ai_deck = Object.keys(CARDS);

    let redKingHP = 3000 * GAME.ai_stats.hp;
    let redPrincessHP = 1500 * GAME.ai_stats.hp;

    GAME.towers = [
        { team:'blue', type:'king', hp:3000, maxHp:3000, x:GAME_W/2, y:GAME_H-50, stun:0 },
        { team:'blue', type:'princess', hp:1500, maxHp:1500, x:GAME_W/4, y:GAME_H-120, stun:0 },
        { team:'blue', type:'princess', hp:1500, maxHp:1500, x:GAME_W*0.75, y:GAME_H-120, stun:0 },
        { team:'red', type:'king', hp:redKingHP, maxHp:redKingHP, x:GAME_W/2, y:50, stun:0 },
        { team:'red', type:'princess', hp:redPrincessHP, maxHp:redPrincessHP, x:GAME_W/4, y:120, stun:0 },
        { team:'red', type:'princess', hp:redPrincessHP, maxHp:redPrincessHP, x:GAME_W*0.75, y:120, stun:0 },
    ];

    if(window.PLAYER.ai_placements.some(p => p.key === 'sentry') && !GAME.isTutorial) {
        const hp = 800 * GAME.ai_stats.hp;
        GAME.towers.push({ team:'red', type:'building', hp:hp, maxHp:hp, x:GAME_W/2, y:200, stun:0, key:'cannon' });
    }

    if(window.PLAYER.ai_placements.some(p => p.key === 'tutorial_square_6x6') && !GAME.isTutorial) {
        const hp = 1500 * GAME.ai_stats.hp;
        GAME.towers.push({ team:'red', type:'princess', hp:hp, maxHp:hp, x:GAME_W/2, y:160, stun:0 });
    }

    if(window.PLAYER.ai_placements.some(p => p.key === 'tutorial_square_4x4') && !GAME.isTutorial) {
        const redKing = GAME.towers.find(t => t.team === 'red' && t.type === 'king');
        if(redKing) {
             redKing.x -= 35;
             const clone = JSON.parse(JSON.stringify(redKing));
             clone.x = GAME_W/2 + 35;
             GAME.towers.push(clone);
        }
    }

    for(let i=0; i<4; i++) drawCard();
    renderHand();

    document.getElementById('start-countdown-overlay').style.display = 'flex';
    document.getElementById('pause-menu-overlay').style.display = 'none';
    document.getElementById('mm-difficulty-display').innerHTML = diffMsg;

    resize();

    // Deep Tutorial: Drag Card
    if(window.GAME.isTutorial && !window.PLAYER.tutorial_battle_drag) {
        setTimeout(() => {
             const handDiv = document.getElementById('battle-hand');
             if(handDiv && handDiv.children.length > 0) {
                 showTutorialOverlay(handDiv.children[0], "GLISSEZ UNE CARTE SUR LE TERRAIN !", TUTORIALS.BATTLE_DRAG);
             }
        }, 1000);
    }

    requestAnimationFrame(loop);
}

function loop() {
    const GAME = window.GAME;
    if(GAME.state === 'ended') return;
    draw();
    if(GAME.state === 'countdown') {
        GAME.startTimer -= 0.016;
        const txt = Math.ceil(GAME.startTimer);
        document.getElementById('start-cnt-val').innerHTML = txt > 0 ? txt : t('battle');
        if(GAME.startTimer <= 0) {
            GAME.state = 'playing';
            document.getElementById('start-countdown-overlay').style.display = 'none';
        }
    }
    else if(GAME.state === 'paused') {
        GAME.pauseTimer -= 0.016;
        document.getElementById('pause-timer-val').innerHTML = Math.ceil(GAME.pauseTimer);
        if(GAME.pauseTimer <= 0) resumeGame();
    }
    else if(GAME.state === 'playing') {
        update(0.016);
    }
    requestAnimationFrame(loop);
}

function update(dt) {
    const GAME = window.GAME;
    GAME.t -= dt;
    if(GAME.shake > 0) GAME.shake -= dt;
    if(GAME.t <= 0 && GAME.state === 'playing') { checkWinCondition(true); return; }

    const rate = GAME.t < 60 ? 1.4 : 0.7;
    if(GAME.elixir < 10) GAME.elixir += rate * dt;
    if(GAME.aiElixir < 10) GAME.aiElixir += (rate * GAME.ai_elixir_mult * (GAME.ai_stats.elixir||1)) * dt;

    updateAI(dt);

    GAME.units = GAME.units.filter(u => u.hp > 0);
    GAME.units.forEach(u => updateUnit(u, dt));
    GAME.towers = GAME.towers.filter(t => t.hp > 0);
    GAME.projectiles.forEach(p => updateProjectile(p, dt));
    GAME.projectiles = GAME.projectiles.filter(p => !p.hit);

    document.getElementById('g-elixir-bar').style.width = (GAME.elixir*10) + '%';
    document.getElementById('g-elixir-val').innerHTML = Math.floor(GAME.elixir);
    document.getElementById('g-enemy-elixir-bar').style.width = (GAME.aiElixir*10) + '%';

    const min = Math.floor(GAME.t/60);
    const sec = (Math.floor(GAME.t)%60).toString().padStart(2,'0');
    document.getElementById('g-time').innerHTML = `${min}:${sec}`;

    const blueT = GAME.towers.filter(t => t.team === 'blue').length;
    const redT = GAME.towers.filter(t => t.team === 'red').length;
    GAME.crowns_red = 3 - blueT;
    GAME.crowns_blue = 3 - redT;
    document.getElementById('g-score').innerHTML = `${GAME.crowns_blue} - ${GAME.crowns_red}`;

    checkWinCondition(false);
    updateHandUI();
}

function updateAI(dt) {
    const GAME = window.GAME;
    if(GAME.isTutorial) return; 
    GAME.ai_cooldown -= dt;
    if(GAME.ai_cooldown <= 0) {
        GAME.ai_cooldown = GAME.ai_cooldown_base + Math.random();
        const key = GAME.ai_deck[Math.floor(Math.random() * GAME.ai_deck.length)];
        const card = CARDS[key];

        if(GAME.aiElixir >= card.cost) {
            let spawnX = GAME_W / 2 + (Math.random()*60 - 30);
            let spawnY = 60;
            
            if(GAME.ai_mode === 'lane') {
                spawnX = (Math.random() < 0.5) ? (GAME_W/4) : (GAME_W*0.75);
                spawnX += (Math.random()*40 - 20);
            }
            else if(GAME.ai_mode === 'smart') {
                const threats = GAME.units.filter(u => u.team === 'blue');
                if(threats.length > 0) {
                    const t = threats[Math.floor(Math.random()*threats.length)];
                    if(card.type === 'spell') { 
                        spawnX = t.x; spawnY = t.y; 
                    } else { 
                        spawnX = t.x; 
                        spawnY = Math.max(20, t.y - 60);
                        const limitY = (GAME_H / 2) - 40; 
                        if(spawnY > limitY) spawnY = limitY;
                    }
                } else {
                    spawnX = (Math.random() < 0.5) ? (GAME_W/4) : (GAME_W*0.75);
                    spawnY = 80;
                }
            }

            if(card.type === 'spell') {
                 castSpell(key, spawnX, spawnY, 'red');
            } else {
                 spawnUnit(key, 'red', spawnX, spawnY);
                 if(AUDIO.isOn) AUDIO.playSFX('spawn');
            }
            GAME.aiElixir -= card.cost;
        }
    }
}

function applySeparation(u, dt) {
    const pushForce = 30;
    const GAME = window.GAME;
    GAME.units.forEach(other => {
        if (u === other) return;
        const uAir = CARDS[u.key].isAir;
        const oAir = CARDS[other.key].isAir;
        if (uAir !== oAir) return;
        const dist = Math.hypot(u.x - other.x, u.y - other.y);
        if (dist < 15 && dist > 0) {
            const angle = Math.atan2(u.y - other.y, u.x - other.x);
            u.x += Math.cos(angle) * pushForce * dt;
            u.y += Math.sin(angle) * pushForce * dt;
        }
    });
}

function updateUnit(u, dt) {
    const data = CARDS[u.key];
    const GAME = window.GAME;
    u.animTimer = (u.animTimer || 0) + dt;
    if(u.stun && u.stun > 0) { u.stun -= dt; return; }
    if (!data.isAir && data.speed > 0) applySeparation(u, dt);

    if(u.key === 'witch') {
        u.spawnTimer = (u.spawnTimer || 0) - dt;
        if(u.spawnTimer <= 0) {
            spawnUnit('skeleton', u.team, u.x, u.y + (u.team==='blue'?-10:10));
            spawnEffect(u.x, u.y, 'magic');
            u.spawnTimer = 5.0;
        }
    }
    if(data.special === 'heal') {
        u.healTimer = (u.healTimer || 0) - dt;
        if(u.healTimer <= 0) {
            const ally = findNearestAlly(u);
            if(ally && ally.hp < ally.maxHp && Math.hypot(ally.x - u.x, ally.y - u.y) <= data.range) {
                ally.hp = Math.min(ally.maxHp, ally.hp + 20);
                spawnEffect(ally.x, ally.y, 'heal');
                if(AUDIO.isOn) AUDIO.playSFX('heal');
                u.healTimer = 1.0;
            }
        }
    }

    const sightRange = data.range > 200 ? 400 : 250;
    let target = findNearestEnemy(u, sightRange);
    if (!target) target = findEnemyTower(u);

    if(target) {
        const d = Math.hypot(target.x - u.x, target.y - u.y);
        if(d <= data.range) {
            u.isMoving = false;
            if(u.atkInfo <= 0) {
                u.isAttacking = true;
                if(AUDIO.isOn) AUDIO.playSFX('attack');

                if(u.key === 'valkyrie') {
                    const enemies = findTargets(u.x, u.y, 35, u.team==='blue'?'red':'blue');
                    enemies.forEach(e => takeDamage(e, u.dmg || data.dmg));
                    spawnEffect(u.x, u.y, 'magic');
                }
                else if(data.range > 40) {
                    GAME.projectiles.push({
                        x: u.x, y: u.y, tx: target.x, ty: target.y,
                        speed: 250, dmg: u.dmg || data.dmg, team: u.team, radius: data.splash ? 40 : 0,
                        type: 'arrow'
                    });
                } else {
                    takeDamage(target, u.dmg || data.dmg);
                    if(u.team === 'red' && GAME.ai_stats.lifesteal > 0) {
                        u.hp = Math.min(u.maxHp, u.hp + (u.dmg * GAME.ai_stats.lifesteal));
                        if(Math.random() < 0.3) spawnEffect(u.x, u.y, 'heal');
                    }
                }
                
                let speedAtk = data.speed_atk || 1.2;
                if(u.team === 'red' && GAME.ai_stats.speed) speedAtk /= GAME.ai_stats.speed;
                
                u.atkInfo = speedAtk;
                setTimeout(() => { if(u) u.isAttacking = false; }, 300);
            } else { u.atkInfo -= dt; }
        } else {
            if(data.speed > 0) {
                u.isMoving = true;
                u.isAttacking = false;
                moveUnitSmart(u, target.x, target.y, data, dt);
            } else { u.isMoving = false; }
        }
    } else {
        if(data.speed > 0) {
            u.isMoving = true;
            moveUnitDirect(u, u.x, u.team==='blue'?0:GAME_H, data.speed, dt);
        }
    }
}

function moveUnitSmart(u, tx, ty, data, dt) {
    if(data.isAir || u.key === 'hog') { 
        moveUnitDirect(u, tx, ty, data.speed, dt); return;
    }
    const riverY = GAME_H / 2;
    const bridge1X = GAME_W / 4;
    const bridge2X = GAME_W * 0.75;
    const crossRiver = (u.y < riverY && ty > riverY) || (u.y > riverY && ty < riverY);

    if(crossRiver) {
        const dist1 = Math.abs(u.x - bridge1X);
        const dist2 = Math.abs(u.x - bridge2X);
        const bridgeX = dist1 < dist2 ? bridge1X : bridge2X;
        if(Math.abs(u.x - bridgeX) > 10) moveUnitDirect(u, bridgeX, u.y, data.speed, dt);
        else moveUnitDirect(u, u.x, ty, data.speed, dt);
    } else {
        moveUnitDirect(u, tx, ty, data.speed, dt);
    }
}

function moveUnitDirect(u, tx, ty, speed, dt) {
    const angle = Math.atan2(ty - u.y, tx - u.x);
    u.x += Math.cos(angle) * speed * dt;
    u.y += Math.sin(angle) * speed * dt;
}

function updateProjectile(p, dt) {
    const dx = p.tx - p.x; const dy = p.ty - p.y;
    const d = Math.hypot(dx, dy);
    if(d < 10) {
        p.hit = true;
        const radius = p.radius || 20;
        const targets = findTargets(p.tx, p.ty, radius, p.team === 'blue' ? 'red' : 'blue');
        targets.forEach(t => takeDamage(t, p.dmg));
        spawnEffect(p.tx, p.ty, 'explosion');
    } else {
        p.x += (dx/d) * p.speed * dt;
        p.y += (dy/d) * p.speed * dt;
    }
}

function castSpell(key, x, y, team) {
    const GAME = window.GAME;
    let level = 1;
    if(team === 'blue') level = window.getCardLevel(key);
    else level = GAME.ai_card_level || 1;

    let card = getUnitStats(key, level);
    
    if(team === 'red' && GAME.ai_stats) {
        card = { ...card };
        if(card.dmg) card.dmg = Math.floor(card.dmg * GAME.ai_stats.dmg);
    }

    const enemyTeam = team === 'blue' ? 'red' : 'blue';
    spawnEffect(x, y, 'magic');

    if(key === 'freeze') {
        const targets = findTargets(x, y, card.radius, enemyTeam);
        targets.forEach(t => { t.stun = 4.0; takeDamage(t, card.dmg); });
        spawnEffect(x, y, 'explosion_huge');
        if(AUDIO.isOn) AUDIO.playSFX('heal');
    }
    else if(key === 'fireball' || key === 'lightning') {
        if(key === 'lightning') {
             const targets = findTargets(x, y, card.radius, enemyTeam);
             targets.forEach(t => { takeDamage(t, card.dmg); t.stun = 1.0; });
             if(AUDIO.isOn) AUDIO.playSFX('zap');
        } else {
             GAME.projectiles.push({x:team==='blue'?GAME_W/2:GAME_W/2, y:team==='blue'?GAME_H:0, tx:x, ty:y, speed:300, dmg:card.dmg, radius:card.radius, team:team, type:key});
        }
    }
}

function spawnUnit(key, team, x, y) {
    const GAME = window.GAME;
    let level = 1;
    if(team === 'blue') level = window.getCardLevel(key);
    else level = GAME.ai_card_level || 1;

    const data = getUnitStats(key, level);
    
    let hp = data.hp;
    let dmg = data.dmg;
    if(team === 'red' && GAME.ai_stats) {
        hp = Math.floor(hp * GAME.ai_stats.hp);
        dmg = Math.floor(dmg * GAME.ai_stats.dmg);
    }

    const count = data.count || 1;
    for(let i=0; i<count; i++) {
        GAME.units.push({
            id: Math.random(), key: key, team: team,
            x: x + (Math.random()*20-10), y: y + (Math.random()*20-10),
            hp: hp, maxHp: hp, dmg: dmg,
            atkInfo: 0, stun: 0,
            animTimer: Math.random(),
            isMoving: false, isAttacking: false, type: (data.speed===0)?'building':null
        });
    }
}

function findNearestAlly(u) {
    const GAME = window.GAME;
    const allies = GAME.units.filter(e => e.team === u.team && e !== u);
    let best = null; let minDist = 9999;
    allies.forEach(e => { const d = Math.hypot(e.x - u.x, e.y - u.y); if(d < minDist) { minDist = d; best = e; } });
    return best;
}

function findEnemyTower(u) {
    const GAME = window.GAME;
    const enemies = GAME.towers.filter(t => t.team !== u.team).sort((a,b) => {
        return Math.hypot(a.x - u.x, a.y - u.y) - Math.hypot(b.x - u.x, b.y - u.y);
    });
    return enemies[0];
}

function findNearestEnemy(u, maxDist = 9999) {
    const GAME = window.GAME;
    const data = CARDS[u.key];
    const enemies = [...GAME.units, ...GAME.towers].filter(e => e.team !== u.team);
    let best = null; let minDist = maxDist;
    enemies.forEach(e => {
        if(data.target === 'building' && e.type !== 'king' && e.type !== 'princess' && e.type !== 'building') return;
        const d = Math.hypot(e.x - u.x, e.y - u.y);
        if(d < minDist) { minDist = d; best = e; }
    });
    return best;
}

function findTargets(x, y, r, team) { 
    const GAME = window.GAME;
    return [...GAME.units, ...GAME.towers].filter(e => e.team === team && Math.hypot(e.x - x, e.y - y) <= r); 
}

function takeDamage(u, amt) {
    const GAME = window.GAME;
    u.hp -= amt;
    GAME.floats.push({x: u.x, y: u.y, txt: Math.floor(amt), t: 0.5});
    if(u.hp <= 0 && !u.type) {
        spawnEffect(u.x, u.y, 'poof');
        if(AUDIO.isOn) AUDIO.playSFX('hit');
        if(u.team === 'red' && window.updateQuestProgress) {
            window.updateQuestProgress('kill_unit', 1);
        }
    }
    if(u.hp <= 0 && (u.type === 'king' || u.type === 'princess')) {
        if(AUDIO.isOn) AUDIO.playSFX('tower_destroy');
        GAME.shake = 0.5;
    }
}

function spawnEffect(x, y, type) {
    const GAME = window.GAME;
    const duration = (type === 'explosion_huge') ? 1.0 : 0.5;
    GAME.particles.push({x, y, t:duration, maxT:duration, type:type});
}

function checkWinCondition(forceEnd) {
    const GAME = window.GAME;
    if(GAME.state === 'ended') return;
    const blueK = GAME.towers.find(t => t.team==='blue' && t.type==='king');
    const redK = GAME.towers.find(t => t.team==='red' && t.type==='king');
    if(!blueK) endGame('defeat');
    else if(!redK) {
        if(window.updateQuestProgress) window.updateQuestProgress('win', 1);
        if(GAME.isTutorial) endGame('tutorial_victory');
        else endGame('victory');
    }
    else if(forceEnd) {
        const blueHP = GAME.towers.filter(t=>t.team==='blue').reduce((a,b)=>a+b.hp,0);
        const redHP = GAME.towers.filter(t=>t.team==='red').reduce((a,b)=>a+b.hp,0);
        if(blueHP > redHP) endGame('victory');
        else if(redHP > blueHP) endGame('defeat');
        else endGame('draw');
    }
}

let dragInfo = { active: false, idx: -1, key: null };
export function startDrag(e, idx, key) {
    const GAME = window.GAME;
    if(GAME.state !== 'playing') return;
    if(CARDS[key].cost > GAME.elixir) { showGameMsg(t('notif_elixir')); return; }
    dragInfo.active = true; dragInfo.idx = idx; dragInfo.key = key;
    const ghost = document.getElementById('drag-ghost'); ghost.innerHTML = '';
    const sprite = SPRITE_CACHE[key];
    if(sprite) {
        const c = document.createElement('canvas'); c.width = 64; c.height = 64;
        const ctxGhost = c.getContext('2d'); ctxGhost.drawImage(sprite, 0, 0, 64, 64);
        ghost.appendChild(c);
    }
    ghost.style.display = 'block'; moveGhost(e);
};
window.startDrag = startDrag;
function handleInputMove(e) { if(dragInfo.active) { e.preventDefault(); moveGhost(e); } }
function moveGhost(e) {
    const cx = e.touches ? e.touches[0].clientX : e.clientX; const cy = e.touches ? e.touches[0].clientY : e.clientY;
    const ghost = document.getElementById('drag-ghost'); ghost.style.left = cx + 'px'; ghost.style.top = cy + 'px';
}
function handleInputEnd(e) {
    if(dragInfo.active) {
        document.getElementById('drag-ghost').style.display = 'none';
        let cx = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        let cy = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        tryPlaceCard(cx, cy, dragInfo.idx);
        dragInfo.active = false; dragInfo.idx = -1;
    }
}
function handleInputStart(cx, cy) {
    const GAME = window.GAME;
    if(GAME.state !== 'playing') return;
    if(!dragInfo.active && typeof selectedHandIdx !== 'undefined' && selectedHandIdx !== -1) { tryPlaceCard(cx, cy, selectedHandIdx); }
}
function tryPlaceCard(cx, cy, handIdx) {
    const GAME = window.GAME;
    if(handIdx === -1 || !GAME.hand[handIdx]) return;
    CANVAS_RECT = canvas.getBoundingClientRect();
    let lx = (cx - CANVAS_RECT.left) / SCALE; let ly = (cy - CANVAS_RECT.top) / SCALE;
    if(lx >= 0 && lx <= GAME_W && ly >= 0 && ly <= GAME_H) {
        const key = GAME.hand[handIdx];
        if(GAME.elixir < CARDS[key].cost) { showGameMsg(t('notif_elixir')); return; }
        // Player Spawn Zone: Below River (GAME_H/2 + 20)
        let valid = (CARDS[key].type === 'spell' || ly > (GAME_H/2 + 20));
        if(valid) placeCardLogic(key, lx, ly, handIdx); else showGameMsg("Invalid Zone");
    }
}
function placeCardLogic(key, x, y, handIdx) {
    const GAME = window.GAME;
    if(CARDS[key].type === 'spell') {
        castSpell(key, x, y, 'blue');
    } else {
        spawnUnit(key, 'blue', x, y);
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
    }
    if(window.updateQuestProgress) window.updateQuestProgress('play_card', 1);
    GAME.elixir -= CARDS[key].cost;
    GAME.hand.splice(handIdx, 1);
    if(window.resetSelection) window.resetSelection();
    drawCard(); renderHand();
}
function drawCard() {
    const GAME = window.GAME;
    if(GAME.deck_queue.length > 0 && GAME.hand.length < 4) {
        GAME.hand.push(GAME.deck_queue.shift());
        GAME.deck_queue.push(GAME.hand[GAME.hand.length-1]);
    }
}

export function togglePauseGame() { 
    const GAME = window.GAME;
    GAME.state = 'paused'; 
    GAME.pauseTimer = 30; 
    document.getElementById('pause-menu-overlay').style.display = 'flex'; 
}
window.togglePauseGame = togglePauseGame;

export function resumeGame() { 
    const GAME = window.GAME;
    if(GAME.state === 'paused') { GAME.state = 'playing'; document.getElementById('pause-menu-overlay').style.display = 'none'; } 
}
window.resumeGame = resumeGame;

export function surrenderGame() { 
    endGame('surrender'); document.getElementById('pause-menu-overlay').style.display = 'none'; 
}
window.surrenderGame = surrenderGame;

function showGameMsg(txt) { const el = document.getElementById('g-msg'); if(el) { el.innerHTML = txt; setTimeout(() => el.innerHTML = '', 2000); } }

function draw() {
    if(!ctx) return;
    const GAME = window.GAME;
    const skin = SKINS[window.PLAYER.currentSkin] || SKINS.grass;
    ctx.fillStyle = skin.bg; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(SCALE, SCALE);
    if(GAME.shake > 0) {
        const dx = (Math.random()-0.5) * 4; const dy = (Math.random()-0.5) * 4;
        ctx.translate(dx, dy);
    }
    const TW = 16;
    for(let y=0; y<GAME_H; y+=TW) {
        for(let x=0; x<GAME_W; x+=TW) {
            let type = skin.ground;
            if(y > GAME_H/2 - 20 && y < GAME_H/2 + 20) {
                 if( (x > GAME_W/4 - 20 && x < GAME_W/4 + 20) || (x > GAME_W*0.75 - 20 && x < GAME_W*0.75 + 20)) type = skin.bridge;
                 else type = skin.liquid;
            }
            if(SPRITE_CACHE[type]) ctx.drawImage(SPRITE_CACHE[type], x, y, TW, TW);
        }
    }
    const all = [...GAME.towers, ...GAME.units].sort((a,b) => a.y - b.y);
all.forEach(obj => {
        const pct = Math.max(0, obj.hp / obj.maxHp);
        const isTower = (obj.type === 'king' || obj.type === 'princess');
        const barW = isTower ? 40 : 20;
        const by = obj.y - (isTower ? 30 : 15);

        ctx.fillStyle = 'red'; ctx.fillRect(obj.x - barW/2, by, barW, 5);
        ctx.fillStyle = '#2ecc71'; ctx.fillRect(obj.x - barW/2, by, barW*pct, 5);

        let spriteKey = obj.key || 'tower';
        if(isTower) spriteKey = 'tower';
        
        let frame = 0;
        if(!isTower && !obj.type) { 
            const frameCount = SPRITE_CACHE[spriteKey + '_frames'] || 1;
            if(frameCount > 1) {
                const animSpeed = 0.5;
                const totalAnimTime = animSpeed * frameCount;
                const t = (obj.animTimer || 0) % totalAnimTime;
                frame = Math.floor((t / totalAnimTime) * frameCount);
            }
        }

        let suffix = '_' + obj.team + '_' + frame;
        let finalSprite = SPRITE_CACHE[spriteKey + suffix] 
                       || SPRITE_CACHE[spriteKey + '_' + obj.team] 
                       || SPRITE_CACHE[spriteKey + '_' + frame]
                       || SPRITE_CACHE[spriteKey];

        if(finalSprite) {
            let sc = (isTower || (CARDS[obj.key] && CARDS[obj.key].speed===0)) ? 4 : 2;
            const w = finalSprite.width * sc;
            const h = finalSprite.height * sc;
            ctx.drawImage(finalSprite, obj.x - w/2, obj.y - h/2, w, h);
        }

        if(obj.stun > 0) {
            ctx.fillStyle = 'cyan';
            ctx.font='bold 20px Arial';
            ctx.fillText("❄️", obj.x - 10, obj.y - 40);
        }
    });
    GAME.projectiles.forEach(p => {
        ctx.fillStyle = p.radius ? '#e74c3c' : '#f1c40f';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius ? 6 : 3, 0, Math.PI*2); ctx.fill();
    });
    GAME.particles.forEach(p => {
        if(p.type === 'explosion_huge') {
             ctx.globalAlpha = p.t; ctx.fillStyle = '#e74c3c';
             ctx.beginPath(); ctx.arc(p.x, p.y, (1 - p.t) * 100, 0, Math.PI*2); ctx.fill();
             ctx.globalAlpha = 1;
        } else { ctx.fillStyle = 'white'; ctx.fillRect(p.x + (Math.random()-0.5)*10, p.y + (Math.random()-0.5)*10, 4, 4); }
        p.t -= 0.05;
    });
    GAME.particles = GAME.particles.filter(p => p.t > 0);
    ctx.fillStyle = 'white'; ctx.font = '10px Arial';
    GAME.floats.forEach(f => { ctx.fillText(f.txt, f.x, f.y); f.y -= 0.5; f.t -= 0.02; });
    GAME.floats = GAME.floats.filter(f => f.t > 0);
    ctx.restore();
}

export function renderHand() {
    const handDiv = document.getElementById('battle-hand');
    if(!handDiv) return;
    handDiv.innerHTML = '';
    const GAME = window.GAME;
    GAME.hand.forEach((key, idx) => {
        const d = document.createElement('div');
        const isAffordable = CARDS[key].cost <= GAME.elixir;
        let classes = 'battle-card ' + (isAffordable ? 'ready' : 'dim');
        if(idx === selectedHandIdx) classes += ' selected';
        d.className = classes; d.dataset.idx = idx;

        const canvas = document.createElement('canvas'); canvas.width=32; canvas.height=32;
        const cx = canvas.getContext('2d');
        const s = SPRITE_CACHE[key + '_blue_0'] || SPRITE_CACHE[key + '_blue'] || SPRITE_CACHE[key];
        if(s) cx.drawImage(s,0,0,32,32);
        d.appendChild(canvas);

        const name = document.createElement('div'); name.className='battle-card-name'; name.innerHTML = t(key+'_name');
        d.appendChild(name);
        const cost = document.createElement('div'); cost.className='card-cost'; cost.innerText = CARDS[key].cost;
        d.appendChild(cost);

        const startDragHandler = (e) => { if(window.startDrag) window.startDrag(e, idx, key); };
        d.addEventListener('mousedown', (e) => { if(e.button===0) startDragHandler(e); });
        d.addEventListener('touchstart', (e) => { startDragHandler(e); }, {passive:false});
        d.onclick = () => selectCard(idx);
        handDiv.appendChild(d);
    });
}

export function updateHandUI() {
    const handDiv = document.getElementById('battle-hand'); if(!handDiv) return;
    const children = handDiv.children;
    const GAME = window.GAME;
    for(let i=0; i<children.length; i++) {
        const d = children[i]; const idx = parseInt(d.dataset.idx);
        if(GAME.hand[idx]) {
            const key = GAME.hand[idx];
            const isAffordable = CARDS[key].cost <= GAME.elixir;
            if(isAffordable) { d.classList.remove('dim'); d.classList.add('ready'); }
            else { d.classList.add('dim'); d.classList.remove('ready'); }
            if(idx === selectedHandIdx) d.classList.add('selected'); else d.classList.remove('selected');
        }
    }
}

export function resetSelection() { selectedHandIdx = -1; };
function selectCard(idx) {
    const GAME = window.GAME;
    if(GAME.state !== 'playing') return;
    const key = GAME.hand[idx];
    if(CARDS[key].cost > GAME.elixir) { showNotif("COMBAT", t('notif_elixir')); return; }
    if(selectedHandIdx === idx) selectedHandIdx = -1;
    else { selectedHandIdx = idx; if(AUDIO.isOn) AUDIO.playSFX('spawn'); }
    updateHandUI();
}
window.resetSelection = resetSelection;

export function endGame(res) {
    const GAME = window.GAME;
    GAME.state = 'ended';
    if(AUDIO.isOn) AUDIO.playMusic(res === 'victory' ? 'victory' : 'menu');

    const modal = document.getElementById('game-over-modal');
    modal.style.display='flex';

    const title = document.getElementById('go-title');
    if(res === 'victory' || res === 'tutorial_victory') {
        title.innerHTML = "VICTOIRE !";
        title.style.color = '#f1c40f';
    } else {
        title.innerHTML = "DÉFAITE";
        title.style.color = '#e74c3c';
    }

    let msg = "";
    let tGain=0, gGain=0;

    if(res === 'tutorial_victory') {
        msg = t('tuto_combat_win');
        const btn = document.querySelector('#game-over-modal button');
        btn.innerHTML = "OUVRIR CADEAU";
        btn.onclick = () => openFreeTutorialChest();
    }
    else if(res === 'victory') {
        tGain = 1; 
        gGain = 50; 
        
        let extraRoulette = false;
        if(window.PLAYER.ai_placements.some(p => p.key === 'tutorial_square_6x6')) {
            tGain += 1;
        }
        if(window.PLAYER.ai_placements.some(p => p.key === 'tutorial_square_4x4')) {
            extraRoulette = true;
        }

        let goldMult = 1.0;
        let gemBonus = 0;
        let trophyMult = 1.0;

        window.PLAYER.ai_placements.forEach(p => {
            const m = MODULES[p.key];
            if(m && m.reward) {
                if(m.reward.gold) goldMult += (m.reward.gold - 1);
                if(m.reward.gems) gemBonus += m.reward.gems;
                if(m.reward.trophy_mult) trophyMult += (m.reward.trophy_mult - 1);
            }
        });
        gGain = Math.floor(gGain * goldMult);
        tGain = Math.floor(tGain * trophyMult);

        const baseGemGain = Math.floor(Math.random() * 5) + 1; 
        const totalGemGain = baseGemGain + gemBonus;

        window.PLAYER.gold += gGain;
        window.PLAYER.trophies += tGain;
        window.PLAYER.gems += totalGemGain;
        
        msg = `+${gGain} Or`;
        if(goldMult > 1.0) msg += ` (Bonus x${goldMult.toFixed(1)})`;
        msg += ` | +${tGain} <img src="${ICONS.trophy}" class="pixel-icon">`;
        if(trophyMult > 1.0) msg += ` (Bonus x${trophyMult.toFixed(1)})`;
        msg += ` | +${totalGemGain} <img src="${ICONS.gem}" class="pixel-icon">`;
        
        document.getElementById('go-rew').innerHTML = msg;

        if(extraRoulette) {
             const btn = document.querySelector('#game-over-modal button');
             btn.innerHTML = "DOUBLE ROULETTE !";
             btn.onclick = () => {
                 window.PLAYER.pending_roulette = true; 
                 saveData();
                 
                 document.getElementById('game-over-modal').style.display='none';
                 document.getElementById('game-view').style.display='none';
                 document.getElementById('meta-view').classList.remove('hidden');
                 startRoulette(); 
                 if(window.updateMetaUI) window.updateMetaUI(); 
             };
        }
    } else if(res === 'draw') {
        gGain = 5; 
        window.PLAYER.gold += gGain;
        msg = `+${gGain} Or`;
    } else if(res === 'surrender') {
        let tLoss = 1;
        if(window.PLAYER.trophies > 0) {
            window.PLAYER.trophies -= tLoss;
        } else { tLoss = 0; }
        
        msg = `- ${tLoss} <img src="${ICONS.trophy}" class="pixel-icon"> | ABANDON`;
        
        const btn = document.querySelector('#game-over-modal button');
        btn.innerHTML = "CONTINUER";
        btn.onclick = exitBattle;
    } else {
        gGain = 5; 
        window.PLAYER.gold += gGain;
        
        let tLoss = 1; 
        if(window.PLAYER.trophies > 0) {
            window.PLAYER.trophies -= tLoss;
        } else { tLoss = 0; }
        
        msg = `+${gGain} Or | -${tLoss} <img src="${ICONS.trophy}" class="pixel-icon">`;
        
        const btn = document.querySelector('#game-over-modal button');
        btn.innerHTML = "CADEAU DE CONSOLATION";
        btn.onclick = () => {
             document.getElementById('game-over-modal').style.display='none';
             document.getElementById('game-view').style.display='none';
             document.getElementById('meta-view').classList.remove('hidden');
             startRoulette(false, true); 
        };
    }
    if(res !== 'victory') document.getElementById('go-rew').innerHTML = msg;
    
    document.getElementById('game-over-modal').style.display='flex';
    
    saveData();
}

export function exitBattle() {
    document.getElementById('game-view').style.display='none';
    document.getElementById('meta-view').classList.remove('hidden');
    document.getElementById('game-over-modal').style.display='none';
    if(AUDIO.isOn) AUDIO.playMusic('menu');
    if(window.updateMetaUI) window.updateMetaUI();
}
window.exitBattle = exitBattle;
window.startMatchmakingSequence = startMatchmakingSequence;
