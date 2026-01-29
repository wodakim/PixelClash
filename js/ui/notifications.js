import { AUDIO } from '../engine/audio.js';

let notifCallback = null;

export function showNotif(title, msg, onOk = null) {
    const el = document.getElementById('notification-overlay');
    if(!el) return;
    document.getElementById('notif-title').textContent = title;
    document.getElementById('notif-message').textContent = msg;
    el.style.display = 'flex';
    notifCallback = onOk;
    if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
}

export function closeNotification() {
    const el = document.getElementById('notification-overlay');
    if(el) el.style.display = 'none';
    if(notifCallback) {
        const cb = notifCallback;
        notifCallback = null;
        cb();
    }
}

window.showNotif = showNotif;
window.closeNotification = closeNotification;
