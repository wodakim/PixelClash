import { TEXTS } from '../data/texts.js';
import { LANG } from './state.js';

export function t(key) {
    const lang = window.LANG || LANG; // Use window as fallback/primary
    return (TEXTS[lang] && TEXTS[lang][key]) ? TEXTS[lang][key] : key;
}

window.t = t;
