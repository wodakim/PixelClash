// ADMIN TOOL - REMOVE THIS FILE OR IMPORT TO DISABLE
import { saveData } from '../core/storage.js';
import { updateMetaUI } from '../ui/meta.js';

export const AdminTool = {
    init: function() {
        console.log("Admin Tool Initialized");
        this.createUI();
    },

    createUI: function() {
        const div = document.createElement('div');
        div.id = 'admin-tool';
        div.style.cssText = `
            position: fixed; top: 10px; left: 10px; z-index: 9999;
            background: rgba(0,0,0,0.8); border: 2px solid red;
            padding: 10px; border-radius: 8px; color: white;
            font-family: monospace; display: flex; flex-direction: column; gap: 5px;
            cursor: move;
        `;
        div.innerHTML = `<div style="text-align:center; font-weight:bold; color:red; margin-bottom:5px; pointer-events:none;">ADMIN</div>`;

        const btnGold = document.createElement('button');
        btnGold.innerText = "MAX GOLD";
        btnGold.style.cursor = "pointer";
        btnGold.onclick = () => {
            if(window.PLAYER) {
                window.PLAYER.gold = 9999999;
                saveData();
                if(window.updateMetaUI) window.updateMetaUI();
                console.log("Admin: Gold set to Max");
            }
        };

        const btnGems = document.createElement('button');
        btnGems.innerText = "MAX GEMS";
        btnGems.style.cursor = "pointer";
        btnGems.onclick = () => {
            if(window.PLAYER) {
                window.PLAYER.gems = 9999999;
                saveData();
                if(window.updateMetaUI) window.updateMetaUI();
                console.log("Admin: Gems set to Max");
            }
        };
        
        // Drag Logic
        let isDragging = false;
        let offsetX, offsetY;

        div.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - div.getBoundingClientRect().left;
            offsetY = e.clientY - div.getBoundingClientRect().top;
        });
        
        div.addEventListener('touchstart', (e) => {
            isDragging = true;
            offsetX = e.touches[0].clientX - div.getBoundingClientRect().left;
            offsetY = e.touches[0].clientY - div.getBoundingClientRect().top;
        }, {passive:false});

        window.addEventListener('mousemove', (e) => {
            if(isDragging) {
                div.style.left = (e.clientX - offsetX) + 'px';
                div.style.top = (e.clientY - offsetY) + 'px';
            }
        });
        
        window.addEventListener('touchmove', (e) => {
            if(isDragging) {
                e.preventDefault(); // prevent scroll when dragging admin
                div.style.left = (e.touches[0].clientX - offsetX) + 'px';
                div.style.top = (e.touches[0].clientY - offsetY) + 'px';
            }
        }, {passive:false});

        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('touchend', () => isDragging = false);

        div.appendChild(btnGold);
        div.appendChild(btnGems);
        document.body.appendChild(div);
    }
};

// Auto-init if imported
if(document.readyState === 'complete' || document.readyState === 'interactive') {
    AdminTool.init();
} else {
    window.addEventListener('load', () => AdminTool.init());
}
