/**
 * Handles global skin application (UI, Deck)
 * by injecting/removing CSS classes on the body.
 */
export function applyGlobalSkins() {
    if(!window.PLAYER || !window.PLAYER.active_16bit) return;

    // 1. UI Skin
    if(window.PLAYER.active_16bit.ui) {
        document.body.classList.add('skin-ui-16bit');
        // We could handle specific sub-themes here if needed (e.g., 'neon_ui')
        // For now, any active UI skin toggles the 16-bit class
    } else {
        document.body.classList.remove('skin-ui-16bit');
    }

    // 2. Deck Skin
    if(window.PLAYER.active_16bit.deck) {
        document.body.classList.add('skin-deck-16bit');
        // Handle specific deck themes via data attribute if needed
        // document.body.dataset.deckSkin = window.PLAYER.active_16bit.deck;
    } else {
        document.body.classList.remove('skin-deck-16bit');
        // delete document.body.dataset.deckSkin;
    }
}
