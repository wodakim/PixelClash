import { MODULES } from '../data/modules.js';
import { AUDIO } from '../engine/audio.js';
import { saveData } from '../core/storage.js';
import { t } from '../core/utils.js';
import { showNotif } from '../ui/notifications.js';
import { SYSTEM } from '../system/main.js';
import { showTutorialOverlay, completeTutorial, TUTORIALS } from '../ui/tutorial.js';

let brainDrag = { active:false, key:null, uid:null, ox:0, oy:0, fromGrid:false };
let brainInfoTimer = null;
const BRAIN_GRID_SIZE = 6;
const CELL_SIZE = 48; // px

export function openBrainModal() {
    document.getElementById('brain-modal').style.display = 'flex';
    if(AUDIO.isOn) AUDIO.playSFX('spawn');
    renderBrainView();

    // Fix Deep Tutorial: Close overlay if open (The one pointing to the button)
    // We mark the 'Open Brain UI' tutorial as complete since we just opened it.
    completeTutorial(TUTORIALS.BRAIN);

    const triggerDragTuto = () => {
        if(window.PLAYER && !window.PLAYER[TUTORIALS.BRAIN_DRAG]) {
            setTimeout(() => {
                // Check if modal is still open
                if(document.getElementById('brain-modal').style.display !== 'none') {
                    const grid = document.getElementById('brain-inventory');
                    if(grid && grid.children.length > 0) {
                        showTutorialOverlay(grid.children[0], window.t('tuto_brain_drag'), TUTORIALS.BRAIN_DRAG);
                    }
                }
            }, 500);
        }
    };

    if(window.PLAYER && !window.PLAYER.tutorial_brain_done) {
        showNotif("TUTORIEL", t('tuto_brain'), triggerDragTuto);
        window.PLAYER.tutorial_brain_done = true;
        saveData();
    } else {
        triggerDragTuto();
    }
}

export function showModuleInfo(key) {
    const m = MODULES[key];
    if(!m) return;
    
    const overlay = document.getElementById('card-info-overlay');
    document.getElementById('info-card-name').innerHTML = `${t(key+'_name')}<br><span style="font-size:0.5rem; color:${m.color}">${m.rarity.toUpperCase()}</span>`;
    
    let effectText = "";
    if(m.effect.hp) effectText += `HP: x${m.effect.hp}<br>`;
    if(m.effect.dmg) effectText += `DMG: x${m.effect.dmg}<br>`;
    if(m.effect.speed) effectText += `SPEED: x${m.effect.speed}<br>`;
    if(m.effect.elixir) effectText += `ELIXIR: x${m.effect.elixir}<br>`;
    if(m.effect.lifesteal) effectText += `LIFESTEAL: ${(m.effect.lifesteal*100)}%<br>`;
    if(m.effect.special) effectText += `SPECIAL: ${m.effect.special}<br>`;
    
    if(m.reward && m.reward.gold) effectText += `<br><span style="color:#f1c40f">BONUS OR: x${m.reward.gold}</span>`;
    if(m.reward && m.reward.gems) effectText += `<br><span style="color:#3498db">BONUS GEMMES: +${m.reward.gems}</span>`;
    if(m.reward && m.reward.trophy_mult) effectText += `<br><span style="color:#f39c12">BONUS TROPHÉES: x${m.reward.trophy_mult}</span>`;

    const statsHtml = `
        <div style="font-size:0.7rem; text-align:center; color:#fff; line-height:1.5;">
            ${effectText}
        </div>
        <div style="margin-top:10px; padding:5px; border-top:2px dashed #555; font-style:italic; color:#bdc3c7;">
            "${t(key+'_desc')}"
        </div>
    `;
    document.getElementById('info-card-stats').innerHTML = statsHtml;
    
    const c = document.getElementById('info-card-preview');
    const ctx = c.getContext('2d');
    c.width = 64; c.height = 64; 
    ctx.clearRect(0,0,64,64);
    
    const miniSize = 12;
    const rows = m.shape.length;
    const cols = m.shape[0].length;
    const offX = (64 - (cols*miniSize))/2;
    const offY = (64 - (rows*miniSize))/2;
    
    for(let r=0; r<rows; r++) {
        for(let col=0; col<cols; col++) {
            if(m.shape[r][col] === 1) {
                ctx.fillStyle = m.color;
                ctx.fillRect(offX + col*miniSize, offY + r*miniSize, miniSize-1, miniSize-1);
            }
        }
    }
    
    const upBtn = document.getElementById('info-upgrade-btn');
    if(upBtn) upBtn.style.display = 'none';

    overlay.style.display = 'flex';
}

export function closeBrainModal() {
    document.getElementById('brain-modal').style.display = 'none';
    
    // If we close the modal, we should probably clean up the drag tutorial if it's there
    // Use completeTutorial logic but maybe we just want to hide it?
    // If user didn't complete it, it should come back next time?
    // For now, let's remove the overlay visually so it doesn't float on home screen
    const overlay = document.getElementById('tuto-overlay-' + TUTORIALS.BRAIN_DRAG);
    if(overlay) overlay.remove();

    if(window.updateMetaUI) window.updateMetaUI(); 
}

function renderBrainView() {
    renderBrainStats();
    renderBrainGrid();
    renderBrainInventory();
}

function renderBrainStats() {
    let bonusHP = 0, bonusDmg = 0, bonusElixir = 0, bonusGold = 0, bonusSpeed = 0;
    
    if(!window.PLAYER) return;

    window.PLAYER.ai_placements.forEach(p => {
        const m = MODULES[p.key];
        if(!m) return;
        if(m.reward && m.reward.gold) bonusGold += (m.reward.gold - 1);
        
        if(m.effect.hp) bonusHP += (m.effect.hp - 1);
        if(m.effect.speed) bonusSpeed += (m.effect.speed - 1);
        if(m.effect.elixir) bonusElixir += (m.effect.elixir - 1);
    });

    const diffPct = Math.round((bonusHP + bonusSpeed + bonusElixir) * 100);
    const goldPct = Math.round(bonusGold * 100);
    
    document.getElementById('brain-stat-diff').textContent = diffPct;
    document.getElementById('brain-stat-gold').textContent = goldPct;
}

function renderBrainGrid() {
    const container = document.getElementById('brain-grid-container');
    container.innerHTML = '';
    container.style.width = (BRAIN_GRID_SIZE * CELL_SIZE) + 'px';
    container.style.height = (BRAIN_GRID_SIZE * CELL_SIZE) + 'px';

    for(let y=0; y<BRAIN_GRID_SIZE; y++) {
        for(let x=0; x<BRAIN_GRID_SIZE; x++) {
            const cell = document.createElement('div');
            cell.style.cssText = `position:absolute; left:${x*CELL_SIZE}px; top:${y*CELL_SIZE}px; width:${CELL_SIZE}px; height:${CELL_SIZE}px; border:1px solid #333; box-sizing:border-box;`;
            container.appendChild(cell);
        }
    }

    if(!window.PLAYER) return;

    window.PLAYER.ai_placements.forEach(p => {
        const m = MODULES[p.key];
        if(!m) return;
        
        const el = document.createElement('div');
        el.className = 'brain-module-placed';
        el.style.cssText = `position:absolute; left:${p.x*CELL_SIZE}px; top:${p.y*CELL_SIZE}px; width:0; height:0;`;
        
        drawModuleShape(el, m, p.key);
        
        const startDragGrid = (e) => {
            if(e.button === 2) return;
            
            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            const cy = e.touches ? e.touches[0].clientY : e.clientY;
            brainDrag.ox = cx;
            brainDrag.oy = cy;

            brainInfoTimer = setTimeout(() => {
                if(brainDrag.active) {
                    brainDrag.active = false;
                    document.getElementById('brain-drag-ghost').style.display = 'none';
                    showModuleInfo(p.key);
                }
            }, 500);

            brainDrag.active = true;
            brainDrag.key = p.key;
            brainDrag.uid = p.uid; 
            brainDrag.fromGrid = true;

            const ghost = document.getElementById('brain-drag-ghost');
            ghost.innerHTML = '';
            drawModuleShape(ghost, m, p.key);
            ghost.style.display = 'block';
            updateBrainGhost(e);
        };

        const cancelTimer = () => { if(brainInfoTimer) clearTimeout(brainInfoTimer); };

        el.addEventListener('mousedown', startDragGrid);
        el.addEventListener('touchstart', startDragGrid, {passive:false});
        el.addEventListener('mouseup', cancelTimer);
        el.addEventListener('touchend', cancelTimer);

        container.appendChild(el);
    });
}

function drawModuleShape(parent, m, key) {
    const rows = m.shape.length;
    const cols = m.shape[0].length;
    
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(m.shape[r][c] === 1) {
                const block = document.createElement('div');
                block.style.cssText = `
                    position:absolute; 
                    left:${c*CELL_SIZE}px; top:${r*CELL_SIZE}px; 
                    width:${CELL_SIZE-2}px; height:${CELL_SIZE-2}px; 
                    background:${m.color}; 
                    border:2px solid rgba(255,255,255,0.5); 
                    box-shadow:inset 0 0 5px rgba(0,0,0,0.5);
                    cursor:pointer;
                `;
                if(r===0 && c===0) {
                     block.innerHTML = `<span style="font-size:0.5rem; color:#fff; text-shadow:1px 1px 0 #000; position:absolute; top:2px; left:2px;">${t(key+'_name').split(' ')[0]}</span>`;
                }
                parent.appendChild(block);
            }
        }
    }
}

function renderBrainInventory() {
    const invDiv = document.getElementById('brain-inventory');
    invDiv.innerHTML = '';
    
    if(!window.PLAYER) return;

    const counts = {};
    window.PLAYER.modules.forEach(k => counts[k] = (counts[k] || 0) + 1);
    window.PLAYER.ai_placements.forEach(p => {
        if(counts[p.key]) counts[p.key]--;
    });

    Object.keys(counts).forEach(key => {
        if(counts[key] > 0) {
            const m = MODULES[key];
            const item = document.createElement('div');
            item.className = 'brain-inv-item';
            item.style.cssText = `position:relative; width:80px; height:80px; background:rgba(0,0,0,0.5); border:1px solid #555; display:flex; justify-content:center; align-items:center; flex-direction:column; cursor:grab;`;
            
            const preview = document.createElement('div');
            preview.style.position = 'relative';
            const maxDim = Math.max(m.shape.length, m.shape[0].length);
            const scale = 50 / (maxDim * CELL_SIZE); 
            const miniSize = 10;
            preview.style.width = (m.shape[0].length * miniSize) + 'px';
            preview.style.height = (m.shape.length * miniSize) + 'px';
            
            for(let r=0; r<m.shape.length; r++) {
                for(let c=0; c<m.shape[0].length; c++) {
                    if(m.shape[r][c] === 1) {
                         const b = document.createElement('div');
                         b.style.cssText = `position:absolute; left:${c*miniSize}px; top:${r*miniSize}px; width:${miniSize}px; height:${miniSize}px; background:${m.color}; border:1px solid #fff;`;
                         preview.appendChild(b);
                    }
                }
            }
            item.appendChild(preview);
            
            const countLabel = document.createElement('div');
            countLabel.style.cssText = "position:absolute; bottom:2px; right:2px; color:#fff; font-size:0.6rem;";
            countLabel.textContent = `x${counts[key]}`;
            item.appendChild(countLabel);

            const startDrag = (e) => {
                if(e.button === 2) return;
                
                const cx = e.touches ? e.touches[0].clientX : e.clientX;
                const cy = e.touches ? e.touches[0].clientY : e.clientY;
                brainDrag.ox = cx;
                brainDrag.oy = cy;
                
                brainInfoTimer = setTimeout(() => {
                    if(brainDrag.active) { 
                        brainDrag.active = false;
                        document.getElementById('brain-drag-ghost').style.display = 'none';
                        showModuleInfo(key);
                    }
                }, 500);

                brainDrag.active = true;
                brainDrag.key = key;
                brainDrag.fromGrid = false;
                
                const ghost = document.getElementById('brain-drag-ghost');
                ghost.innerHTML = '';
                drawModuleShape(ghost, m, key);
                ghost.style.display = 'block';
                updateBrainGhost(e);

                // Action-Based Completion: If user drags a module, complete the tutorial
                completeTutorial(TUTORIALS.BRAIN_DRAG);
            };
            
            const cancelTimer = () => {
                if(brainInfoTimer) clearTimeout(brainInfoTimer);
            };

            item.addEventListener('mousedown', startDrag);
            item.addEventListener('touchstart', startDrag, {passive:false});
            item.addEventListener('mouseup', cancelTimer);
            item.addEventListener('touchend', cancelTimer);

            invDiv.appendChild(item);
        }
    });
}

document.addEventListener('mousemove', updateBrainGhost);
document.addEventListener('touchmove', updateBrainGhost, {passive:false});
document.addEventListener('mouseup', endBrainDrag);
document.addEventListener('touchend', endBrainDrag);

function updateBrainGhost(e) {
    if(!brainDrag.active) return;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    
    const dist = Math.hypot(cx - brainDrag.ox, cy - brainDrag.oy);
    if(dist > 5) {
        if(brainInfoTimer) clearTimeout(brainInfoTimer);
        brainInfoTimer = null;
    }

    const ghost = document.getElementById('brain-drag-ghost');
    ghost.style.left = (cx - 20) + 'px'; 
    ghost.style.top = (cy - 20) + 'px';
}

function endBrainDrag(e) {
    if(!brainDrag.active) return;
    brainDrag.active = false;
    document.getElementById('brain-drag-ghost').style.display = 'none';
    
    const cx = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const cy = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

    const gridEl = document.getElementById('brain-grid-container');
    const rect = gridEl.getBoundingClientRect();
    
    let placed = false;
    
    if(cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
        const gx = Math.floor((cx - rect.left) / CELL_SIZE);
        const gy = Math.floor((cy - rect.top) / CELL_SIZE);
        
        if(canPlaceModule(brainDrag.key, gx, gy, brainDrag.fromGrid ? brainDrag.uid : null)) {
            
            if(brainDrag.fromGrid) {
                const p = window.PLAYER.ai_placements.find(item => item.uid === brainDrag.uid);
                if(p) { p.x = gx; p.y = gy; }
            } else {
                window.PLAYER.ai_placements.push({
                    key: brainDrag.key,
                    x: gx,
                    y: gy,
                    uid: SYSTEM.Time.now() + Math.random()
                });
            }
            
            saveData();
            if(AUDIO.isOn) AUDIO.playSFX('spawn');
            placed = true;
        } else {
             if(AUDIO.isOn) AUDIO.playSFX('notif_deck_full'); // Use existing sound
        }
    }
    
    if(!placed && brainDrag.fromGrid) {
        window.PLAYER.ai_placements = window.PLAYER.ai_placements.filter(item => item.uid !== brainDrag.uid);
        saveData();
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    }
    
    renderBrainView();
}

function canPlaceModule(key, gx, gy, excludeUid=null) {
    const m = MODULES[key];
    if(!m) return false;
    
    if(gy + m.shape.length > BRAIN_GRID_SIZE) return false;
    if(gx + m.shape[0].length > BRAIN_GRID_SIZE) return false;

    const map = createEmptyGrid(BRAIN_GRID_SIZE);
    
    window.PLAYER.ai_placements.forEach(p => {
        if(excludeUid && p.uid === excludeUid) return;
        const pm = MODULES[p.key];
        for(let r=0; r<pm.shape.length; r++) {
            for(let c=0; c<pm.shape[0].length; c++) {
                if(pm.shape[r][c] === 1) {
                    map[p.y + r][p.x + c] = 1;
                }
            }
        }
    });

    for(let r=0; r<m.shape.length; r++) {
        for(let c=0; c<m.shape[0].length; c++) {
            if(m.shape[r][c] === 1) {
                if(map[gy + r][gx + c] === 1) return false;
            }
        }
    }
    
    return true;
}

function createEmptyGrid(size=6) {
    const g = [];
    for(let i=0; i<size; i++) {
        const row = [];
        for(let j=0; j<size; j++) row.push(null);
        g.push(row);
    }
    return g;
}

window.openBrainModal = openBrainModal;
window.closeBrainModal = closeBrainModal;
