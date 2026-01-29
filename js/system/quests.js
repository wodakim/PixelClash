import { saveData } from '../core/storage.js';
import { showNotif } from '../ui/notifications.js';
import { SYSTEM } from '../system/main.js';
import { t } from '../core/utils.js';

export const QUESTS_DATA = [
    { id: 'win_1', desc: "Gagner 1 Combat", target: 1, reward: { gold: 100 }, type: 'win' },
    { id: 'play_10', desc: "Jouer 10 Cartes", target: 10, reward: { gold: 50 }, type: 'play_card' },
    { id: 'kill_50', desc: "Tuer 50 Unités", target: 50, reward: { gems: 2 }, type: 'kill_unit' },
    { id: 'open_chest', desc: "Ouvrir 1 Coffre", target: 1, reward: { gold: 200 }, type: 'open_chest' }
];

export function initQuests() {
    if(!window.PLAYER.quests) {
        generateDailyQuests();
    }
    // Check if new day
    const now = SYSTEM.Time.now();
    const last = window.PLAYER.last_quest_gen || 0;
    if(now - last > 86400000) { // 24h
        generateDailyQuests();
    }
    renderQuestButton();
}

function generateDailyQuests() {
    window.PLAYER.quests = [];
    const pool = [...QUESTS_DATA].sort(() => Math.random() - 0.5);
    // Pick 3 random quests
    for(let i=0; i<3; i++) {
        const q = JSON.parse(JSON.stringify(pool[i]));
        q.progress = 0;
        q.claimed = false;
        window.PLAYER.quests.push(q);
    }
    window.PLAYER.last_quest_gen = SYSTEM.Time.now();
    saveData();
}

export function updateQuestProgress(type, amount=1) {
    if(!window.PLAYER || !window.PLAYER.quests) return;
    
    let updated = false;
    window.PLAYER.quests.forEach(q => {
        if(!q.claimed && q.type === type) {
            q.progress += amount;
            if(q.progress >= q.target) {
                q.progress = q.target;
                // Show mini notif or visual cue?
            }
            updated = true;
        }
    });
    
    if(updated) {
        saveData();
        renderQuestButton();
    }
}

export function claimQuest(index) {
    const q = window.PLAYER.quests[index];
    if(!q || q.claimed || q.progress < q.target) return;
    
    q.claimed = true;
    
    if(q.reward.gold) window.PLAYER.gold += q.reward.gold;
    if(q.reward.gems) window.PLAYER.gems += q.reward.gems;
    
    showNotif("QUÊTE", "Récompense récupérée !");
    if(window.AUDIO && window.AUDIO.isOn) window.AUDIO.playSFX('spawn'); // Reuse existing sfx
    
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    renderQuestModal(); // Refresh UI
    renderQuestButton();
}

function renderQuestButton() {
    const container = document.getElementById('tab-home');
    if(!container) return;
    
    let btn = document.getElementById('btn-quests');
    if(!btn) {
        btn = document.createElement('div');
        btn.id = 'btn-quests';
        btn.onclick = openQuestModal;
        container.appendChild(btn);
    }
    
    // Base 8-bit aesthetic style
    btn.style.cssText = "position:absolute; top:80px; left:20px; background:#f1c40f; border:4px solid #fff; padding:5px 8px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; z-index:100; box-shadow: 0 4px 0 #c0392b; transition: transform 0.1s;";
    
    // Active effect (simulate click)
    btn.onmousedown = () => btn.style.transform = "translateY(4px)";
    btn.onmouseup = () => btn.style.transform = "translateY(0)";
    btn.onmouseleave = () => btn.style.transform = "translateY(0)";
    
    const label = `<span style="font-size:0.5rem; margin-top:4px; font-weight:bold; color:#c0392b; text-shadow: 1px 1px 0 rgba(255,255,255,0.5);">QUÊTES</span>`;

    // Check for claimable
    const claimable = window.PLAYER.quests.filter(q => q.progress >= q.target && !q.claimed).length;
    
    if(claimable > 0) {
        btn.style.borderColor = "#e74c3c";
        btn.style.animation = "pop 1s infinite alternate";
        btn.innerHTML = `<img src="${ICONS.scroll}" class="pixel-icon"> ${label} 
            <div style="position:absolute; top:-5px; right:-5px; background:red; color:white; width:16px; height:16px; font-size:0.5rem; display:flex; justify-content:center; align-items:center; border:2px solid white;">!</div>`;
    } else {
        btn.style.borderColor = "#fff";
        btn.style.animation = "none";
        btn.innerHTML = `<img src="${ICONS.scroll}" class="pixel-icon"> ${label}`;
    }
}

function openQuestModal() {
    let modal = document.getElementById('quest-modal');
    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'quest-modal';
        modal.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:300; flex-direction:column; align-items:center; justify-content:center;";
        modal.innerHTML = `
            <div style="background:#2c3e50; border:4px solid white; padding:20px; width:90%; max-width:400px; max-height:80%; overflow-y:auto;">
                <h2 style="color:#f1c40f; text-align:center; text-shadow:2px 2px 0 #000;">QUÊTES DU JOUR</h2>
                <div id="quest-list" style="display:flex; flex-direction:column; gap:10px; margin-top:20px;"></div>
                <button class="pixel-btn" onclick="document.getElementById('quest-modal').style.display='none'" style="width:100%; margin-top:20px;">FERMER</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    renderQuestModal();
    modal.style.display = 'flex';
}

function renderQuestModal() {
    const list = document.getElementById('quest-list');
    list.innerHTML = '';
    
    window.PLAYER.quests.forEach((q, idx) => {
        const item = document.createElement('div');
        item.style.cssText = "background:rgba(0,0,0,0.3); padding:10px; border:2px solid #555; display:flex; flex-direction:column; gap:5px;";
        
        const isDone = q.progress >= q.target;
        const color = isDone ? (q.claimed ? '#7f8c8d' : '#2ecc71') : '#fff';
        
        let rewardTxt = "";
        if(q.reward.gold) rewardTxt += `${q.reward.gold} <img src="${ICONS.gold}" class="pixel-icon">`;
        if(q.reward.gems) rewardTxt += `${q.reward.gems} <img src="${ICONS.gem}" class="pixel-icon">`;

        let btnHtml = "";
        if(q.claimed) {
            btnHtml = `<span style="color:#aaa; align-self:flex-end; font-size:0.6rem;">TERMINÉ</span>`;
        } else if(isDone) {
            btnHtml = `<button class="pixel-btn green" onclick="window.claimQuest(${idx})" style="padding:5px 10px; font-size:0.6rem; align-self:flex-end;">RÉCUPÉRER</button>`;
        } else {
            btnHtml = `<span style="color:#aaa; align-self:flex-end; font-size:0.6rem;">${q.progress}/${q.target}</span>`;
        }

        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; color:${color};">
                <span style="font-size:0.7rem; font-weight:bold;">${q.desc}</span>
                <span style="font-size:0.6rem; color:#f1c40f;">${rewardTxt}</span>
            </div>
            <div style="width:100%; height:6px; background:#333; margin-top:5px;">
                <div style="width:${(q.progress/q.target)*100}%; height:100%; background:${isDone ? '#2ecc71' : '#f39c12'}; transition:width 0.5s;"></div>
            </div>
            ${btnHtml}
        `;
        list.appendChild(item);
    });
}

window.claimQuest = claimQuest;
window.updateQuestProgress = updateQuestProgress;
