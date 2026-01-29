import { SYSTEM } from '../system/main.js';
import { AUDIO } from '../engine/audio.js';

let drawer = {
    el: null,
    isOpen: false,
    startY: 0,
    currentY: 0,
    threshold: 50,
    active: false
};

export function setupLeaderboardDrawer() {
    drawer.el = document.getElementById('leaderboard-drawer');
    const handle = document.getElementById('leaderboard-handle');
    
    if(!drawer.el || !handle) return;
    
    // Populate Data Initially
    updateLeaderboardData();

    // Touch Events
    handle.addEventListener('touchstart', onDrawerStart, {passive: false});
    document.addEventListener('touchmove', onDrawerMove, {passive: false});
    document.addEventListener('touchend', onDrawerEnd);
    
    // Mouse Events (for desktop testing)
    handle.addEventListener('mousedown', onDrawerStart);
    document.addEventListener('mousemove', onDrawerMove);
    document.addEventListener('mouseup', onDrawerEnd);
}

function updateLeaderboardData() {
    if(SYSTEM && SYSTEM.Leaderboard) {
        const data = SYSTEM.Leaderboard.getTopPlayers();
        const container = document.getElementById('leaderboard-content');
        if(!container) return;
        container.innerHTML = '';
        
        data.list.forEach((p, index) => {
            const rank = index + 1;
            const row = document.createElement('div');
            row.className = 'leaderboard-item' + (p.isMe ? ' me' : '');
            
            row.innerHTML = `
                <div class="lb-rank">#${rank}</div>
                <div class="lb-flag">${p.country}</div>
                <div class="lb-name">${p.name}</div>
                <div class="lb-score">${p.trophies} <img src="${ICONS.trophy}" class="pixel-icon"></div>
            `;
            container.appendChild(row);
        });
    }
}

function onDrawerStart(e) {
    if(e.target.closest('#leaderboard-handle')) {
        e.preventDefault(); // Prevent scroll
        drawer.active = true;
        drawer.startY = e.touches ? e.touches[0].clientY : e.clientY;
        drawer.el.style.transition = 'none'; // Disable transition for direct drag
    }
}

function onDrawerMove(e) {
    if(!drawer.active) return;
    e.preventDefault();
    
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const delta = y - drawer.startY; // + = down, - = up
    
    // Height calcs
    const drawerHeight = drawer.el.clientHeight;
    // Closed state: translate Y is (drawerHeight - 140px) 
    // (See CSS logic: 100% - 140px)
    const closedY = drawerHeight - 140; 
    
    const currentBaseY = drawer.isOpen ? 0 : closedY;
    
    let newY = currentBaseY + delta;
    
    // Rubber banding if pulled too far up
    if(newY < 0) newY = newY * 0.3; // Resistance
    
    // Bottom limit
    if(newY > closedY) newY = closedY;
    
    drawer.el.style.transform = `translateY(${newY}px)`;
    drawer.currentY = newY;
}

function onDrawerEnd(e) {
    if(!drawer.active) return;
    drawer.active = false;
    // Elastic Snap Back
    drawer.el.style.transition = 'transform 0.5s cubic-bezier(0.5, 1.6, 0.4, 0.7)';
    
    const drawerHeight = drawer.el.clientHeight;
    const closedY = drawerHeight - 140;
    const threshold = closedY * 0.7; // Harder to open (need to pull up 30%)
    
    // Determine target based on position
    let targetState = 'closed';
    
    if(drawer.isOpen) {
        // If pulled down > 100px, close it.
        if(drawer.currentY > 100) targetState = 'closed';
        else targetState = 'open';
    } else {
        // If pulled up past threshold (Y gets smaller), open it
        if(drawer.currentY < threshold) targetState = 'open';
        else targetState = 'closed';
    }
    
    if(targetState === 'open') openDrawer();
    else closeDrawer();
}

function openDrawer() {
    drawer.isOpen = true;
    drawer.el.style.transform = 'translateY(0px)';
    if(AUDIO.isOn) AUDIO.playSFX('spawn');
    updateLeaderboardData();
}

function closeDrawer() {
    drawer.isOpen = false;
    const h = document.getElementById('leaderboard-drawer').clientHeight;
    // Closed position aligns with CSS logic
    drawer.el.style.transform = `translateY(${h - 140}px)`;
    if(AUDIO.isOn) AUDIO.playSFX('hit');
}
