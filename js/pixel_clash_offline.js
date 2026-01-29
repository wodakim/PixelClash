// PIXEL CLASH OFFLINE BUNDLE
// Auto-generated to fix CORS issues on file:// protocol


// --- START OF js/data/config.js ---
const GAME_W = 320;
const GAME_H = 640;

// --- END OF js/data/config.js ---

// --- START OF js/data/texts.js ---
const TEXTS = {
    fr: {
        // UI GÉNÉRALE
        deck_title: "MON DECK",
        deck_subtitle: "Sélectionnez 5 à 6 cartes",
        deck_error: "Deck invalide ! Il faut entre 5 et 6 cartes.",
        shop_title: "BOUTIQUE",
        skins_title: "ARÈNES",
        my_collection: "COLLECTION",
        settings: "OPTIONS",
        reset_data: "RÉINITIALISER",
        close: "FERMER",
        gold: "Or",
        summoning: "OUVERTURE...",
        awesome: "GÉNIAL !",
        battle: "COMBAT !",
        update_title: "VERSION 0.0.90",
        update_desc: "VERSION ALPHA BIENTÔT !\n- IA Modulable (Puzzle Brain)\n- 50+ Modules Buff/Debuff\n- Système Risque/Récompense\n- Gameplay Stratégique Unique",
        nav_home: "ACCUEIL", nav_deck: "DECK", nav_shop: "SHOP", nav_skins: "SKINS",
        summon_skin: "SKIN",
        open_chest: "COFFRE (1000)",
        open_module_chest: "COFFRE MODULES (500)",
        chest_price: "1000 OR",
        paused: "PAUSE", resume: "REPRENDRE", surrender: "ABANDON",
        close_hint: "TOUCHER POUR FERMER",
        continue: "CONTINUER",
        locked_trophy: "Débloque à",
        searching: "RECHERCHE ADVERSAIRE...",
        tuto_combat_win: "VICTOIRE ! Bien joué !",
        tuto_kingdom: "Bienvenue dans votre ROYAUME ! Assignez vos cartes (Mine, Ferme, Forge) pour produire de l'OR.",
        tuto_brain: "Voici le CERVEAU de l'IA ! Placez des modules pour modifier l'ennemi. Essayez vos nouveaux modules !",
        tuto_skins: "Personnalisez votre ARÈNE ici ! Débloquez des skins avec des GEMMES.",
        tuto_deck_intro: "Bienvenue dans votre DECK ! Ici, vous choisissez vos cartes de combat.",
        tuto_deck_levelup: "MAINTENEZ APPUYÉ sur une carte (quand jauge verte) pour l'améliorer !",
        tuto_deck_brain: "Le bouton IA BRAIN vous permet de modifier l'intelligence de vos troupes !",
        tuto_deck_shop: "Achetez de nouveaux MODULES dans la BOUTIQUE pour personnaliser votre stratégie !",
        tuto_inspect: "MAINTENEZ APPUYÉ sur une carte pour voir ses stats !",
        tuto_shop_inspect: "MAINTENEZ APPUYÉ sur une offre pour voir les détails !",
        tuto_brain_drag: "Glissez les modules dans la grille pour booster vos unités !",
        tuto_levelup_action: "Cliquez ici pour confirmer l'amélioration !",
        tuto_skip_confirm: "Passer tout le tutoriel ?",
        restart_tuto: "RELANCER TUTO",
        tuto_restart_confirm: "Relancer le tutoriel ?",
        brain_title: "IA BRAIN PUZZLE",
        brain_subtitle: "Glissez les modules pour booster l'IA (Gain++)",
        brain_stat_diff: "DIFFICULTÉ",
        brain_stat_gold: "GAIN OR",
        brain_inventory: "INVENTAIRE",
        brain_validate: "VALIDER & FERMER",

        // KINGDOM SPEECH
        k_idle_1: "Belle journée !", k_idle_2: "J'aime mon pixel.", k_idle_3: "On se bat quand ?",
        k_idle_4: "Je suis en pause.", k_idle_5: "C'est calme...", k_idle_6: "Zzz...", k_idle_7: "Salut !",
        k_idle_8: "Le Roi est aux toilettes ?", k_idle_9: "J'ai faim...",
        
        k_work_1: "Au travail...", k_work_2: "Encore de l'or !", k_work_3: "Tape, tape, tape.",
        k_work_4: "C'est lourd.", k_work_5: "Pour le Roi !", k_work_6: "J'adore miner.", k_work_7: "Chaud devant !",
        k_work_8: "Encore du travail...", k_work_9: "L'or brille !",

        k_drag_1: "Hé !", k_drag_2: "Pose-moi !", k_drag_3: "Je vole !", k_drag_4: "Wouhou !", k_drag_5: "Où on va ?",
        k_drag_6: "Lâche-moi !", k_drag_7: "Vertige !",

        // NOTIFICATIONS (Remplace les alertes)
        notif_elixir: "Pas assez d'élixir !",
        notif_gold: "Pas assez d'or !",
        notif_deck_full: "Deck complet (6 max) !",
        notif_deck_min: "Deck trop petit (5 min) !",
        notif_buy: "Carte débloquée !",
        notif_skin: "Nouveau Skin !",
        notif_duplicate: "Doublon converti en Or.",

        // --- UNITÉS ORIGINALES ---
        archer_name: "Pixie Bow", archer_desc: "Tire des flèches numériques.",
        knight_name: "Voxel Guard", knight_desc: "Combattant pixelisé résistant.",
        skeleton_name: "Glitch Bones", skeleton_desc: "Armée de bugs fragiles.",
        bomber_name: "Bit Bomber", bomber_desc: "Lance des bombes de données.",
        giant_name: "Mega Block", giant_desc: "Tank massif. Cible structures.",
        fireball_name: "Pixel Burn", fireball_desc: "Brûle une large zone.",
        ninja_name: "Shadow Sprite", ninja_desc: "Rapide, furtif et mortel.",
        wizard_name: "Code Mage", wizard_desc: "Magie source dévastatrice.",
        baby_dragon_name: "Nanosaur", baby_dragon_desc: "Volant, crache du feu binaire.",
        paladin_name: "Holo Knight", paladin_desc: "Soigne les alliés proches.",
        golem_name: "Tera Golem", golem_desc: "Unité colossale. Cible structures.",
        lightning_name: "System Shock", lightning_desc: "3 éclairs + Stun.",

        // --- LES 15 NOUVELLES UNITÉS ---
        goblin_name: "Data Gremlins", goblin_desc: "Petite troupe rapide et vicieuse.",
        spear_gob_name: "Spear Bugs", spear_gob_desc: "Attaquent air & sol à distance.",
        bat_name: "Byte Bats", bat_desc: "Nuée aérienne rapide mais fragile.",
        minion_name: "Flying Glitch", minion_desc: "Monstres volants polyvalents.",
        barbarian_name: "Barbarian.exe", barbarian_desc: "Guerriers brutes.",
        cannon_name: "Turret V1", cannon_desc: "Défense statique. Cible le sol.",
        hog_name: "Turbo Tusk", hog_desc: "Saute la rivière ! Cible structures.",
        valkyrie_name: "Spin Bot", valkyrie_desc: "Tourbillon de hache (Dégâts de zone).",
        musketeer_name: "Sniper.dll", musketeer_desc: "Tireuse d'élite redoutable.",
        miniteetra_name: "Mini Mecha", miniteetra_desc: "Petit robot mais frappe fort.",
        witch_name: "Necro Chip", witch_desc: "Invoque des Glitch Bones.",
        freeze_name: "Lag Spell", freeze_desc: "Fige tout sur une zone (4s).",
        teetra_name: "Mecha Byte", teetra_desc: "Armure lourde. Lent mais dévastateur.",
        angel_name: "Medic Drone", angel_desc: "Unité volante qui soigne.",
        xbow_name: "Auto-Blaster", xbow_desc: "Portée immense, cadence infernale.",

        // --- MODULES EXISTANTS ---
        block_v1_name: "Bloc Basique", block_v1_desc: "PV +5%",
        line_2_name: "Double Lien", line_2_desc: "Dégâts +5%",
        corner_sm_name: "Puce Coin", corner_sm_desc: "Vitesse +5%",
        cpu_v1_name: "CPU Central", cpu_v1_desc: "PV +10%",
        line_3_name: "Triple Lien", line_3_desc: "Elixir +5%",
        square_hole_name: "Noyau Vide", square_hole_desc: "PV +15%",
        overclock_name: "Overclock", overclock_desc: "Vitesse +15%",
        titan_plate_name: "Plaque Titan", titan_plate_desc: "PV +20%",
        lancer_mod_name: "Mod Lancier", lancer_mod_desc: "Dégâts +15%",
        tank_hull_name: "Coque Tank", tank_hull_desc: "PV +25% / Vitesse -10%",
        snake_bus_name: "Bus Données", snake_bus_desc: "Elixir +5%",
        zig_zag_name: "ZigZag", zig_zag_desc: "Vitesse +10%",
        pod_plus_name: "Pod Plus", pod_plus_desc: "PV +10% / Dégâts +5%",
        reactor_name: "Réacteur Noir", reactor_desc: "Elixir +10%",
        vampire_name: "Puce Vampire", vampire_desc: "Vol de Vie 20%",
        berserk_name: "IA Berserk", berserk_desc: "Dégâts +40% / PV -20%",
        fortress_name: "OS Forteresse", fortress_desc: "PV +50% / Vitesse -20%",
        glass_cannon_name: "Canon de Verre", glass_cannon_desc: "Dégâts +50% / PV -30%",
        sentry_name: "Bot Sentinelle", sentry_desc: "+1 Tour Centrale",
        swarm_core_name: "Noyau Essaim", swarm_core_desc: "Elixir +20% / PV -10%",
        omega_brain_name: "OMEGA BRAIN", omega_brain_desc: "TOUT +20%",
        nano_cloud_name: "Nuage Nano", nano_cloud_desc: "Regen HP (Vol de Vie 50%)",
        doomsday_name: "DOOMSDAY", doomsday_desc: "Dégâts +100% / PV +100% / LENT",
        tutorial_square_6x6_name: "Cadre 6x6", tutorial_square_6x6_desc: "+1 Tour Adv. / +1 Trophée",
        tutorial_square_4x4_name: "Cadre 4x4", tutorial_square_4x4_desc: "x2 Roi Adv. / x2 Roulette",

        // --- NOUVEAUX MODULES (30) ---
        chal_hp_1_name: "Défi Vitalité I", chal_hp_1_desc: "Ennemi PV +20%",
        chal_dmg_1_name: "Défi Force I", chal_dmg_1_desc: "Ennemi Dégâts +20%",
        chal_spd_1_name: "Défi Hâte I", chal_spd_1_desc: "Ennemi Vitesse +10%",
        chal_elix_1_name: "Défi Mana I", chal_elix_1_desc: "Ennemi Elixir +10%",
        chal_all_1_name: "Défi Global I", chal_all_1_desc: "Tout +10%",
        chal_hp_2_name: "Défi Vitalité II", chal_hp_2_desc: "Ennemi PV +50%",
        chal_dmg_2_name: "Défi Force II", chal_dmg_2_desc: "Ennemi Dégâts +50%",
        chal_spd_2_name: "Défi Hâte II", chal_spd_2_desc: "Ennemi Vitesse +20%",
        chal_god_mode_name: "MODE DIEU", chal_god_mode_desc: "TOUT +50% (Récompense x3)",
        chal_vampire_name: "Défi Vampire", chal_vampire_desc: "Ennemi Vol de Vie 20%",
        assist_weak_1_name: "Aide Faiblesse I", assist_weak_1_desc: "Ennemi PV -10%",
        assist_dull_1_name: "Aide Émoussé I", assist_dull_1_desc: "Ennemi Dégâts -10%",
        assist_slow_1_name: "Aide Lenteur I", assist_slow_1_desc: "Ennemi Vitesse -10%",
        assist_leak_1_name: "Aide Fuite I", assist_leak_1_desc: "Ennemi Elixir -10%",
        assist_weak_2_name: "Aide Faiblesse II", assist_weak_2_desc: "Ennemi PV -30%",
        assist_dull_2_name: "Aide Émoussé II", assist_dull_2_desc: "Ennemi Dégâts -30%",
        assist_slow_2_name: "Aide Lenteur II", assist_slow_2_desc: "Ennemi Vitesse -30%",
        assist_freeze_name: "Gel Système", assist_freeze_desc: "Ennemi Vitesse -50%",
        assist_fragile_name: "Code Fragile", assist_fragile_desc: "Ennemi PV -50%",
        assist_pacifist_name: "Mode Pacifiste", assist_pacifist_desc: "Ennemi Dégâts -50%",
        mix_berserk_name: "Mix Berserk", mix_berserk_desc: "Dégâts +50% / PV -20%",
        mix_tank_name: "Mix Tank", mix_tank_desc: "PV +50% / Vitesse -20%",
        mix_rush_name: "Mix Rush", mix_rush_desc: "Vitesse +50% / PV -20%",
        mix_swarm_name: "Mix Essaim", mix_swarm_desc: "Elixir +30% / PV -30%",
        mix_glass_name: "Mix Verre", mix_glass_desc: "Dégâts +100% / PV -50%",
        shape_t_sm_name: "Micro T", shape_t_sm_desc: "PV +5%",
        shape_x_sm_name: "Micro X", shape_x_sm_desc: "Dégâts +5%",
        shape_o_big_name: "Mega O", shape_o_big_desc: "PV +10%",
        shape_i_long_name: "Long I", shape_i_long_desc: "Vitesse +10%",
        shape_random_name: "Glitch Block", shape_random_desc: "Elixir +10%"
    },
    en: {
        deck_title: "MY DECK", deck_subtitle: "Select 5-6 cards",
        deck_error: "Invalid Deck! Need 5-6 cards.",
        shop_title: "SHOP", skins_title: "ARENAS", my_collection: "COLLECTION",
        settings: "SETTINGS", reset_data: "RESET DATA", close: "CLOSE",
        gold: "Gold", summoning: "OPENING...", awesome: "AWESOME!", battle: "BATTLE!",
        update_title: "VERSION 0.0.90", update_desc: "ALPHA COMING SOON!\n- Modular AI (Brain Puzzle)\n- 50+ Modules\n- Risk/Reward System",
        nav_home: "HOME", nav_deck: "DECK", nav_shop: "SHOP", nav_skins: "SKINS",
        summon_skin: "SUMMON", open_chest: "OPEN CHEST", open_module_chest: "MODULE CHEST", chest_price: "1000 GOLD",
        paused: "PAUSED", resume: "RESUME", surrender: "SURRENDER",
        close_hint: "TAP TO CLOSE", continue: "CONTINUE", locked_trophy: "Unlocks at",
        searching: "SEARCHING...",
        tuto_combat_win: "VICTORY! Well played!",
        tuto_kingdom: "Welcome to your KINGDOM! Assign cards (Mine, Farm, Forge) to produce GOLD.",
        tuto_brain: "This is the AI BRAIN! Place modules to modify the enemy. Try your new modules!",
        tuto_skins: "Customize your ARENA here! Unlock skins with GEMS.",
        tuto_deck_intro: "Welcome to your DECK! Here you choose your battle cards.",
        tuto_deck_levelup: "LONG PRESS a card when the bar is green to UPGRADE!",
        tuto_deck_brain: "The AI BRAIN button lets you modify your troops' intelligence!",
        tuto_deck_shop: "Buy new MODULES in the SHOP to customize your strategy!",
        tuto_inspect: "LONG PRESS on a card to see its stats!",
        tuto_shop_inspect: "LONG PRESS an offer to see details!",
        tuto_levelup_action: "Click here to confirm upgrade!",
        tuto_skip_confirm: "Skip all tutorials?",
        restart_tuto: "RESTART TUTO",
        tuto_restart_confirm: "Restart tutorial?",

        // KINGDOM SPEECH
        k_idle_1: "Nice day!", k_idle_2: "I love my pixel.", k_idle_3: "When do we fight?",
        k_idle_4: "I'm on break.", k_idle_5: "It's quiet...", k_idle_6: "Zzz...", k_idle_7: "Hi!",
        k_idle_8: "Is the King in the loo?", k_idle_9: "I'm hungry...",
        
        k_work_1: "Back to work...", k_work_2: "More gold!", k_work_3: "Tap, tap, tap.",
        k_work_4: "It's heavy.", k_work_5: "For the King!", k_work_6: "I love mining.", k_work_7: "Coming through!",
        k_work_8: "More work...", k_work_9: "Shiny gold!",

        k_drag_1: "Hey!", k_drag_2: "Put me down!", k_drag_3: "I'm flying!", k_drag_4: "Woohoo!", k_drag_5: "Where to?",
        k_drag_6: "Let go!", k_drag_7: "Dizzy!",

        notif_elixir: "Not enough elixir!", notif_gold: "Not enough gold!",
        notif_deck_full: "Deck full (6 max)!", notif_deck_min: "Deck too small (5 min)!",
        notif_buy: "Card Unlocked!", notif_skin: "New Skin!", notif_duplicate: "Duplicate -> Gold",

        archer_name: "Pixie Bow", archer_desc: "Digital arrows.",
        knight_name: "Voxel Guard", knight_desc: "Durable pixel tank.",
        giant_name: "Mega Block", giant_desc: "Targets buildings.",
        skeleton_name: "Glitch Bones", skeleton_desc: "Fragile bug swarm.",
        baby_dragon_name: "Nanosaur", baby_dragon_desc: "Flying binary fire.",
        bomber_name: "Bit Bomber", bomber_desc: "Ground splash.",
        fireball_name: "Pixel Burn", fireball_desc: "Area damage.",
        paladin_name: "Holo Knight", paladin_desc: "Heals allies.",
        ninja_name: "Shadow Sprite", ninja_desc: "Fast & Stealthy.",
        golem_name: "Tera Golem", golem_desc: "Ultimate Tank.",
        lightning_name: "System Shock", lightning_desc: "Damage + Stun.",
        wizard_name: "Code Mage", wizard_desc: "Source magic.",
        goblin_name: "Data Gremlins", goblin_desc: "Fast melee.",
        spear_gob_name: "Spear Bugs", spear_gob_desc: "Ranged chip.",
        bat_name: "Byte Bats", bat_desc: "Air swarm.",
        minion_name: "Flying Glitch", minion_desc: "Flying beast.",
        barbarian_name: "Barbarian.exe", barbarian_desc: "Medium melee.",
        cannon_name: "Turret V1", cannon_desc: "Static Defense.",
        hog_name: "Turbo Tusk", hog_desc: "Jumps river. Targets buildings.",
        valkyrie_name: "Spin Bot", valkyrie_desc: "Area damage melee.",
        musketeer_name: "Sniper.dll", musketeer_desc: "Long range shooter.",
        miniteetra_name: "Mini Mecha", miniteetra_desc: "Heavy hitter.",
        witch_name: "Necro Chip", witch_desc: "Summons Glitch Bones.",
        freeze_name: "Lag Spell", freeze_desc: "Stops units in place.",
        teetra_name: "Mecha Byte", teetra_desc: "Heavy Tank. Slow but deadly.",
        angel_name: "Medic Drone", angel_desc: "Heals friendly units.",
        xbow_name: "Auto-Blaster", xbow_desc: "Rapid fire siege.",

        // --- EXISTING MODULES ---
        block_v1_name: "Basic Block", block_v1_desc: "HP +5%",
        line_2_name: "Dual Link", line_2_desc: "DMG +5%",
        corner_sm_name: "Corner Chip", corner_sm_desc: "Speed +5%",
        cpu_v1_name: "Core CPU", cpu_v1_desc: "HP +10%",
        line_3_name: "Tri Link", line_3_desc: "Elixir +5%",
        square_hole_name: "Hollow Core", square_hole_desc: "HP +15%",
        overclock_name: "Overclock", overclock_desc: "Speed +15%",
        titan_plate_name: "Titan Plate", titan_plate_desc: "HP +20%",
        lancer_mod_name: "Lancer Mod", lancer_mod_desc: "DMG +15%",
        tank_hull_name: "Tank Hull", tank_hull_desc: "HP +25% / Speed -10%",
        snake_bus_name: "Data Bus", snake_bus_desc: "Elixir +5%",
        zig_zag_name: "ZigZag", zig_zag_desc: "Speed +10%",
        pod_plus_name: "Pod Plus", pod_plus_desc: "HP +10% / DMG +5%",
        reactor_name: "Dark Reactor", reactor_desc: "Elixir +10%",
        vampire_name: "Vampire Chip", vampire_desc: "Lifesteal 20%",
        berserk_name: "Berserk AI", berserk_desc: "DMG +40% / HP -20%",
        fortress_name: "Fortress OS", fortress_desc: "HP +50% / Speed -20%",
        glass_cannon_name: "Glass Cannon", glass_cannon_desc: "DMG +50% / HP -30%",
        sentry_name: "Sentry Bot", sentry_desc: "+1 Center Tower",
        swarm_core_name: "Swarm Core", swarm_core_desc: "Elixir +20% / HP -10%",
        omega_brain_name: "OMEGA BRAIN", omega_brain_desc: "ALL +20%",
        nano_cloud_name: "Nano Cloud", nano_cloud_desc: "HP Regen (Lifesteal 50%)",
        doomsday_name: "DOOMSDAY", doomsday_desc: "DMG +100% / HP +100% / SLOW",
        tutorial_square_6x6_name: "Frame 6x6", tutorial_square_6x6_desc: "+1 Enemy Tower / +1 Trophy",
        tutorial_square_4x4_name: "Frame 4x4", tutorial_square_4x4_desc: "x2 Enemy King / x2 Roulette",

        // --- NEW MODULES (30) ---
        chal_hp_1_name: "Vitality Challenge I", chal_hp_1_desc: "Enemy HP +20%",
        chal_dmg_1_name: "Power Challenge I", chal_dmg_1_desc: "Enemy DMG +20%",
        chal_spd_1_name: "Haste Challenge I", chal_spd_1_desc: "Enemy Speed +10%",
        chal_elix_1_name: "Mana Challenge I", chal_elix_1_desc: "Enemy Elixir +10%",
        chal_all_1_name: "Global Challenge I", chal_all_1_desc: "All Stats +10%",
        chal_hp_2_name: "Vitality Challenge II", chal_hp_2_desc: "Enemy HP +50%",
        chal_dmg_2_name: "Power Challenge II", chal_dmg_2_desc: "Enemy DMG +50%",
        chal_spd_2_name: "Haste Challenge II", chal_spd_2_desc: "Enemy Speed +20%",
        chal_god_mode_name: "GOD MODE", chal_god_mode_desc: "ALL +50% (Reward x3)",
        chal_vampire_name: "Vampire Challenge", chal_vampire_desc: "Enemy Lifesteal 20%",
        assist_weak_1_name: "Weakness Assist I", assist_weak_1_desc: "Enemy HP -10%",
        assist_dull_1_name: "Dull Assist I", assist_dull_1_desc: "Enemy DMG -10%",
        assist_slow_1_name: "Slow Assist I", assist_slow_1_desc: "Enemy Speed -10%",
        assist_leak_1_name: "Leak Assist I", assist_leak_1_desc: "Enemy Elixir -10%",
        assist_weak_2_name: "Weakness Assist II", assist_weak_2_desc: "Enemy HP -30%",
        assist_dull_2_name: "Dull Assist II", assist_dull_2_desc: "Enemy DMG -30%",
        assist_slow_2_name: "Slow Assist II", assist_slow_2_desc: "Enemy Speed -30%",
        assist_freeze_name: "System Freeze", assist_freeze_desc: "Enemy Speed -50%",
        assist_fragile_name: "Fragile Code", assist_fragile_desc: "Enemy HP -50%",
        assist_pacifist_name: "Pacifist Mode", assist_pacifist_desc: "Enemy DMG -50%",
        mix_berserk_name: "Mix Berserk", mix_berserk_desc: "DMG +50% / HP -20%",
        mix_tank_name: "Mix Tank", mix_tank_desc: "HP +50% / Speed -20%",
        mix_rush_name: "Mix Rush", mix_rush_desc: "Speed +50% / HP -20%",
        mix_swarm_name: "Mix Swarm", mix_swarm_desc: "Elixir +30% / HP -30%",
        mix_glass_name: "Mix Glass", mix_glass_desc: "DMG +100% / HP -50%",
        shape_t_sm_name: "Micro T", shape_t_sm_desc: "HP +5%",
        shape_x_sm_name: "Micro X", shape_x_sm_desc: "DMG +5%",
        shape_o_big_name: "Mega O", shape_o_big_desc: "HP +10%",
        shape_i_long_name: "Long I", shape_i_long_desc: "Speed +10%",
        shape_random_name: "Glitch Block", shape_random_desc: "Elixir +10%"
    }
};

// --- END OF js/data/texts.js ---

// --- START OF js/data/sprites_data.js ---
const PALETTE = {
    '.':null,'K':'#000','W':'#fff','S':'#f1c27d','B':'#8e44ad','G':'#2ecc71',
    'D':'#27ae60','A':'#3498db','Z':'#2980b9','O':'#d35400','L':'#f39c12',
    'I':'#95a5a6','N':'#1abc9c','R':'#c0392b','Y':'#f1c40f','X':'#e67e22',
    'M':'#c0392b','E':'#bdc3c7','T':'#TEAM','V':'#8e44ad','F':'#e74c3c','C':'#0ff',
    'H':'#555', 'P':'#fd79a8', 'U':'#6c5ce7', 'J':'#ffeaa7', 'g':'#555',
    'Q':'#5d4037' // Brown
};

const SPRITES_ASCII = {
    // --- 1. UNITÉS DE BASE ---
    archer: [ // Pixie Bow: Robotic archer with glowing bow
        [".....II.....","....IYYI....","...IYYYYI...","...IYYYYI...","...ITTTTI...","..ITTTTTTI..","..ITTTTTTI..",".ITTTTTTTTI.","...IIIIII...","...I.II.I...","..I..II..I..",".....II....."],
        [".....II.....","....IYYI....","...IYYYYI...","...IYYYYI...","...ITTTTI...","..ITTTTTTI..","..ITTTTTTI..",".ITTTTTTTTI.","...IIIIII...","..I..I..I...","...I...I....",".....II....."]
    ],
    knight: [ // Voxel Guard: Heavy armor, shield
        [".....II.....","....IIII....","...IITTII...","..IIITTIII..",".IITTTTTTII.","..ITTTTTTI..",".IIIITTIIII.",".IIIITTIIII.","...IITTII...","...IIIIII...","..II.II.II..",".....II....."],
        [".....II.....","....IIII....","...IITTII...","..IIITTIII..",".IITTTTTTII.","..ITTTTTTI..",".IIIITTIIII.",".IIIITTIIII.","...IITTII...","...IIIIII...","..I..II..I..",".....II....."]
    ],
    skeleton: [ // Glitch Bones: Digital skeleton
        [".....CC.....","....CKKC....","....CCCC....",".....CC.....","....CIIC....","....CIIC....","....CIIC....","...C.CC.C...","..C..CC..C..",".....CC.....","............","............"],
        [".....CC.....","....CKKC....","....CCCC....",".....CC.....","....CIIC....","....CIIC....","....CIIC....","...C.CC.C...","..C.C..C.C..","....C..C....","............","............"]
    ],
    giant: [ // Mega Block: Massive hulking robot
        [".....HH.....","....HHHH....","...HHHHHH...","...HKHKHH...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","...HHHHHH...","...H.HH.H...","..HH....HH.."],
        [".....HH.....","....HHHH....","...HHHHHH...","...HKHKHH...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","...HHHHHH...","...H.HH.H...","..H..HH..H.."]
    ],
    bomber: [ // Bit Bomber: Holding a glowing bomb
        [".....RR.....","....RRRR....","...RRRRRR...","...RRLRRR...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITRRRRTI..","..IRRLLRR...","...I.II.I...","..I..II..I..",".....II....."],
        [".....RR.....","....RRRR....","...RRRRRR...","...RRLRRR...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITRRRRTI..","..IRRLLRR...","...I.II.I...","..II....II..",".....II....."]
    ],
    fireball: ["LLLL","LYYL","LYYL","LLLL"],
    ninja: [ // Shadow Sprite: Stealthy
        [".....KK.....","....KKKK....","...KKKKKK...","...KKYKKK...","..KTTTTTTK..","..KTTTTTTK..","..KTTKTTTK..","..KTTTTTTK..","...KKKKKK...","...K.KK.K...","..K..KK..K..",".....KK....."],
        [".....KK.....","....KKKK....","...KKKKKK...","...KKYKKK...","..KTTTTTTK..","..KTTTTTTK..","..KTTKTTTK..","..KTTTTTTK..","...KKKKKK...","...K.KK.K...","..KK....KK..",".....KK....."]
    ],
    wizard: [ // Code Mage: Robed in data
        [".......V....","......VVV...",".....VVSVV..","....BBBBBBB.","....GEEGEEG.","CC...ggHgg..","CX...LLLLL..","..X.VBBLBBV.","...XVBBVBBV.","...VXBBVBBV.",".....BBVBB..",".....UU.UU.."],
        [".......V....","......VVV...",".....VVSVV..","....BBBBBBB.","....GEEGEEG.","CC...ggHgg..","CX...LLLLL..","..X.VBBLBBV.","...XVBBVBBV.","...VXBBVBBV.",".....BBVBB..",".....UU.UU.."]
    ],
    baby_dragon: [ // Nanosaur: Flying mech
        [".....GG.....","....GGGG....","...GGSGG....","..GGGGSGGG..",".GTTTTTTTTG.","..GTTTTTTG..","...GTTTTG...","...GG..GG...","...G....G...","............","............","............"],
        [".....GG.....","....GGGG....","...GGSGG....","..GGGGSGGG..",".GTTTTTTTTG.","..GTTTTTTG..","...GTTTTG...","...GG..GG...","...GG..GG...","............","............","............"]
    ],
    paladin: [ // Holo Knight: Glowing armor
        [".....CC.....","....CYYC....","...CYYYYC...","...CYYYYC...","..CTTTTTTC..","..CTTTTTTC..","..CTTYYYYC..","..CTTTTTTC..","...YYYYYY...","...Y.YY.Y...","..Y..YY..Y..",".....YY....."],
        [".....CC.....","....CYYC....","...CYYYYC...","...CYYYYC...","..CTTTTTTC..","..CTTTTTTC..","..CTTYYYYC..","..CTTTTTTC..","...YYYYYY...","...Y.YY.Y...","..Y...Y..Y..",".....YY....."]
    ],
    golem: [ // Tera Golem: Rock/Metal
        [".....HH.....","....HHHH....","...HHHHHH...","..HHHHHHHH..", "..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","...HHHHHH...","..HH....HH..",".HHH....HHH."],
        [".....HH.....","....HHHH....","...HHHHHH...","..HHHHHHHH..", "..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","..HTTTTTTH..","...HHHHHH...",".HHH....HHH.",".HH......HH."]
    ],
    lightning: ["YY","YY","YY"],

    // --- 2. NOUVELLES UNITÉS ---
    goblin: [ // Data Gremlins: Small green pests
        [".....GG.....","....GKKG....","...GGGGGG...","...GGSGGG...","...TTTTTT...","..GTTTTTTG..","...TTTTTT...","...GGGGGG...","...G.GG.G...","..G..GG..G..",".....GG....."],
        [".....GG.....","....GKKG....","...GGGGGG...","...GGSGGG...","...TTTTTT...","..GTTTTTTG..","...TTTTTT...","...GGGGGG...","...G.GG.G...","..G.G..G.G..","....G..G...."]
    ],
    spear_gob: [ // Spear Bugs: Ranged pests
        ["...GGGGG....","...GKGKG....","...GGGGGG...","..GGGSGGG.I.","..GTTTTTG.I.","..GTTTTTGGI.","..GTTTTTG.I.","..IGGGGGG...","...G.GG.G...","..G..GG..G.."],
        ["...GGGGG....","...GKGKG....","...GGGGGG.I.","..GGGGSGG.I.","..GTTTTTG.I.","..GTTTTTG.I.","..GTTTTTG.I.","..IGGGGGG...","...G.GG.G...","..GG....GG.."]
    ],
    bat: [ // Byte Bats: Purple fliers
        [".B...B...B..",".BB.BBB.BB..",".BBBBBBBBB..",".B.BBBBB.B..","....BBB.....","....BBB.....","............"],
        ["............",".B...B...B..",".BB.BBB.BB..",".BBBBBBBBB..",".B.BBBBB.B..","....BBB.....","....BBB....."]
    ],
    minion: [ // Flying Glitch: Blue fliers
        [".A...A...A..",".AA.AAA.AA..",".AAAAAAAAA..",".A.AAAAA.A..","....AAA.....","....AIA.....","...A.A.A...."],
        ["............",".A...A...A..",".AA.AAA.AA..",".AAAAAAAAA..",".A.AAAAA.A..","....AAA.....","....AIA....."]
    ],
    barbarian: [ // Barbarian.exe: Helmeted warriors
        [".....YY.....","....YSSY....","...SSSSSS...","...SSSSSS...","..KTTTTTTK..",".KTTTKKTTTK.","..KTTTTTTK..","...KKKKKK...","...K.KK.K...","..K..KK..K..",".....SS....."],
        [".....YY.....","....YSSY....","...SSSSSS...","...SSSSSS...","..KTTTTTTK..",".KTTTKKTTTK.","..KTTTTTTK..","...KKKKKK...","...K.KK.K...","..KK....KK..","....S..S...."]
    ],
    cannon: [
        ["......H.....",".....HH.....","....HHHH....","...KHHHH....","..KKHHHH....",".KKHHHHH....","KKKHHHHH....","K.KHHHHH....","..KKKKKK....","..KKKKKK...."],
        ["......H.....",".....HH.....","....HHHH....","...KHHHH....","..KKHHHH....",".KKHHHHH....","KKKHHHHH....","K.KHHHHH....","..KKKKKK....","..KKKKKK...."]
    ],
    hog: [ // Turbo Tusk: Rider on bot
        ["....KKKK....","....KSSK....","....SSSS....","..KTTTTTTK..","..KTTTTTTK..","...SSSSSS...","...OOOOOO...","..OOOOOOOO..",".O.OOOOOO.O.","...O.OO.O..."],
        ["....KKKK....","....KSSK....","....SSSS....","..KTTTTTTK..","..KTTTTTTK..","...SSSSSS...","...OOOOOO...","..OOOOOOOO..",".O.OOOOOO.O.","..O......O.."]
    ],
    valkyrie: [ // Spin Bot: Orange whirlwind
        ["....OOOO....","...OSSSSO...","...SSSSSS...","..KTTTTTTK..","...TTTTTT...","..OOTTTTOO..",".O.OTTTTO.O.","...KKKKKK...","...K.KK.K...","..K..KK..K..",".....SS....."],
        ["....OOOO....","...OSSSSO...","...SSSSSS...","..KTTTTTTK..","...TTTTTT...","..OOTTTTOO..",".O.OTTTTO.O.","...KKKKKK...","...K.KK.K...","..KK....KK..","....S..S...."]
    ],
    musketeer: [ // Sniper.dll: Gunner
        [".....KK.....","....KSSK....","...KSSSSK...","...KSSSSK...","..KTTTTTTK..","..KTTTTTT...","..KTTTTTTII.","..KTTTTTTII.","...KKKKKK...","...K.KK.K...","..K..KK..K.."],
        [".....KK.....","....KSSK....","...KSSSSK...","...KSSSSK...","..KTTTTTTK..","..KTTTTTT...","..KTTTTTTII.","..KTTTTTTII.","...KKKKKK...","...K.KK.K...","..KK....KK.."]
    ],
    miniteetra: [ // Mini Mecha
        [".....II.....","....ICCI....","...ICCCCI...","..ITTTTTTI..","...TTTTTT...","..ITTTTTTI..","..ITTTTTTI..","...IIIIII...","...I.II.I...","..I..II..I..",".....II....."],
        [".....II.....","....ICCI....","...ICCCCI...","..ITTTTTTI..","...TTTTTT...","..ITTTTTTI..","..ITTTTTTI..","...IIIIII...","...I.II.I...","..II....II..",".....II....."]
    ],
    witch: [ // Necro Chip
        [".....KK.....","....KSSK....","...KSSSSK...","...KSSSSK...","..BVVVVVVB..","..BVVVVVVB..","..BVVVVVVB..","..BVVVVVVB..","...BBBBBB...","...B.BB.B...","..B..BB..B.."],
        [".....KK.....","....KSSK....","...KSSSSK...","...KSSSSK...","..BVVVVVVB..","..BVVVVVVB..","..BVVVVVVB..","..BVVVVVVB..","...BBBBBB...","...B.BB.B...","..BB....BB.."]
    ],
    teetra: [ // Mecha Byte
        ["....III.....","...ICCCCI...","..ICCCCCCI..","..ITTTTTTI..","..ITTTTTTI..",".IITTTTTTII.",".IITTTTTTII.",".IITTTTTTII.","...IIIIII...","...I.II.I...","..I..II..I..",".....II....."],
        ["....III.....","...ICCCCI...","..ICCCCCCI..","..ITTTTTTI..","..ITTTTTTI..",".IITTTTTTII.",".IITTTTTTII.",".IITTTTTTII.","...IIIIII...","...I.II.I...","..II....II..",".....II....."]
    ],
    angel: [ // Medic Drone
        [".W...YY...W.",".WW.YSSY.WW.",".WWYSSSSYWW.","..WTTTTTTW..","...TTTTTT...","...TTTTTT...","...YYYYYY...","...Y.YY.Y...","..Y..YY..Y..",".....YY....."],
        [".W...YY...W.",".WW.YSSY.WW.",".WWYSSSSYWW.","..WTTTTTTW..","...TTTTTT...","...TTTTTT...","...YYYYYY...","...Y.YY.Y...","..Y...Y..Y..",".....YY....."]
    ],
    xbow: [".....II.....","..I.IIII.I..",".IIIIIIIIII.",".IIIIIIIIII.","....IIII....","....IIII....","...KKKKKK...","...KKKKKK...","...KKKKKK...","...KKKKKK..."],
    freeze: ["C"],

    // --- 3. STRUCTURES ROYAUME ---
    structure_castle: [
        [
            "......HH......",
            ".....HHHH.....",
            "....HHHHHH....",
            "...RRRRRRRR...",
            "..RRRRRRRRRR..",
            "..IIIIIIIIII..",
            ".IIIIIIIIIIII.",
            ".IIKIIIIIIKII.",
            ".IIKIIIIIIKII.",
            ".IIIIIIIIIIII.",
            ".IIIIIIIIIIII.",
            ".IIIIKKKKIIII.",
            ".IIIIKKKKIIII.",
            ".IIIIKKKKIIII."
        ]
    ],
    structure_mine: [
        [
            ".......I.......",
            "......III......",
            ".....IIIII.....",
            "....IIIIIII....",
            "...IIIIIIIII...",
            "..IIIIIIIIIII..",
            ".IIIQIIIIIQIII.",
            ".IIIQIIIIIQIII.",
            ".IIIQQQQQQQIII.",
            ".IIIIKKKKKIIII.",
            ".IIIIKKKKKIIII.",
            ".IIIIKKKKKIIII."
        ]
    ],
    structure_farm: [
        [
            "......RR......",
            ".....RRRR.....",
            "....RRRRRR....",
            "...RRRRRRRR...",
            "..WWWWWWWWWW..",
            "..WKWKWKWKWK..",
            "..WWWWWWWWWW..",
            "..WWWWKWWWWW..",
            "..WWWWKWWWWW..",
            "..WWWWKWWWWW.."
        ]
    ],
    structure_forge: [
        [
            "......HH......",
            ".....HHHH.....",
            "....HHHHHH....",
            "...OOOOOOOO...",
            "..OOOOOOOOOO..",
            "..HHHHHHHHHH..",
            ".HHHHKHHHHHHH.",
            ".HHHHKHHHHHHH.",
            ".HHHHHHHHHHHH.",
            ".HHRRHHHHHHHH.",
            ".HRRRRHHHHHHH.",
            ".HRRRRHHHHHHH."
        ]
    ],

    // --- 4. PROPS ROYAUME ---
    prop_tree: [
        [
            "......GG......",
            ".....GGGG.....",
            "....GGGGGG....",
            "...GGGGGGGG...",
            "..GGGGGGGGGG..",
            ".GGGGGGGGGGGG.",
            "..GGGGGGGGGG..",
            "...GGGGGGGG...",
            "......QQ......",
            "......QQ......",
            "......QQ......"
        ]
    ],
    prop_rock: [
        [
            ".....III.....",
            "....IIIII....",
            "...IIIIIII...",
            "..IIIIIIIII..",
            ".IIIIIIIIIII."
        ]
    ],
    prop_bush: [
        [
            ".....GG.....",
            "....GGGG....",
            "...GGGGGG...",
            "..GGGGGGGG..",
            ".GGGGGGGGGG.",
            "..GGGGGGGG.."
        ]
    ],

    // --- ELEMENTS DÉCOR ---
    grass: ["GDGD","DGDG","GDGD","DGDG"], water: ["AZAZ","ZAZA","AZAZ","ZAZA"], bridge: ["OOOO","OKOO","OOOO","OOKO"],
    tower: ["..KKKKKK..",".KTTTTTTK.",".KTTTTTTK.",".KTKTTKTK.",".KTTTTTTK.",".KTTTTTTK.",".KKKKKKKK.",".KKKKKKKK.",".KKKKKKKK.",".KKKKKKKK.",".KKKKKKKK.",".KKKKKKKK."],
    sand: ["YXYX","XYXY","YXYX","XYXY"], quicksand: ["XOXO","OXOX","XOXO","OXOX"], bone_bridge: ["WEWE","EKEW","WEWE","EKEW"],
    snow: ["EWEW","WEWE","EWEW","WEWE"], ice: ["NINI","ININ","NINI","ININ"], ice_bridge: ["IBIB","BIKB","IBIB","BIKB"],
    obsidian: ["KIKIKI","IKIKIK","KIKIKI","IKIKIK"], lava: ["RXMX","XRXR","RXMX","XRXR"], metal_bridge: ["IIII","IKII","IIII","IIKI"],
    grid: ["KKCK","KCKK","KKCK","KCKK"], void: ["KBKB","BKBK","KBKB","BKBK"], neon_bridge: ["CCCC","CKKC","CCCC","CKKC"],
    dirt: ["SKSK","KSKS","SKSK","KSKS"], stone: ["IIII","KIKI","IIII","KIKI"],
    star: ["KAKA","AKAK","KAKA","AKAK"], meteor: ["KKMK","KMKK","KKMK","KMKK"],
    gold_sand: ["YAYA","AYAY","YAYA","AYAY"]
};

// --- END OF js/data/sprites_data.js ---

// --- START OF js/data/cards.js ---
const RARITY_INFOS = {
    common: { color: '#bdc3c7', prob: 50 },    // Gris
    uncommon: { color: '#2ecc71', prob: 30 }, // Vert
    rare: { color: '#f1c40f', prob: 15 },     // Jaune
    legendary: { color: '#e67e22', prob: 4 }, // Orange
    god: { color: '#e74c3c', prob: 1 }        // Rouge
};

const UPGRADE_COSTS = [
    { cards: 0, gold: 0 },    // Lvl 1 (Base)
    { cards: 2, gold: 50 },   // -> Lvl 2
    { cards: 4, gold: 150 },  // -> Lvl 3
    { cards: 10, gold: 400 }, // -> Lvl 4
    { cards: 20, gold: 1000 },// -> Lvl 5
    { cards: 50, gold: 2000 },// -> Lvl 6
    { cards: 100, gold: 5000 }// -> Lvl 7 (Max?)
];

// --- STATS DE COMBAT (27 UNITÉS) ---
const CARDS = {
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

function getUnitStats(key, level) {
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

// --- END OF js/data/cards.js ---

// --- START OF js/data/modules.js ---
const MODULES = {
    'block_v1': {"shape": [[1]], "color": "#7f8c8d", "price": 200, "rarity": "common", "effect": {"hp": 1.05}, "reward": {"gold": 1.05}},
    'line_2': {"shape": [[1, 1]], "color": "#3498db", "price": 300, "rarity": "common", "effect": {"dmg": 1.05}, "reward": {"gold": 1.05}},
    'corner_sm': {"shape": [[1, 0], [1, 1]], "color": "#2ecc71", "price": 350, "rarity": "common", "effect": {"speed": 1.05}, "reward": {"gold": 1.05}},
    'cpu_v1': {"shape": [[1, 1], [1, 1]], "color": "#3498db", "price": 500, "rarity": "uncommon", "effect": {"hp": 1.1}, "reward": {"gold": 1.1}},
    'line_3': {"shape": [[1], [1], [1]], "color": "#9b59b6", "price": 600, "rarity": "uncommon", "effect": {"elixir": 1.05}, "reward": {"gold": 1.1}},
    'square_hole': {"shape": [[1, 1, 1], [1, 0, 1], [1, 1, 1]], "color": "#95a5a6", "price": 800, "rarity": "uncommon", "effect": {"hp": 1.15}, "reward": {"gold": 1.15}},
    'overclock': {"shape": [[1, 1, 1]], "color": "#e74c3c", "price": 1000, "rarity": "rare", "effect": {"speed": 1.15}, "reward": {"gold": 1.15}},
    'titan_plate': {"shape": [[1, 0], [1, 0], [1, 1]], "color": "#95a5a6", "price": 1500, "rarity": "rare", "effect": {"hp": 1.2}, "reward": {"gold": 1.2}},
    'lancer_mod': {"shape": [[0, 0, 1], [1, 1, 1]], "color": "#e67e22", "price": 1500, "rarity": "rare", "effect": {"dmg": 1.15}, "reward": {"gold": 1.2}},
    'tank_hull': {"shape": [[1, 1, 1], [1, 1, 1]], "color": "#2c3e50", "price": 1800, "rarity": "rare", "effect": {"hp": 1.25, "speed": 0.9}, "reward": {"gold": 1.25}},
    'snake_bus': {"shape": [[0, 1, 1], [1, 1, 0]], "color": "#1abc9c", "price": 2000, "rarity": "rare", "effect": {"elixir": 1.05}, "reward": {"gold": 1.15}},
    'zig_zag': {"shape": [[1, 1, 0], [0, 1, 1]], "color": "#f39c12", "price": 2000, "rarity": "rare", "effect": {"speed": 1.1}, "reward": {"gold": 1.15}},
    'pod_plus': {"shape": [[0, 1, 0], [1, 1, 1], [0, 1, 0]], "color": "#8e44ad", "price": 2500, "rarity": "legendary", "effect": {"hp": 1.1, "dmg": 1.05}, "reward": {"gold": 1.2}},
    'reactor': {"shape": [[0, 1, 0], [1, 1, 1]], "color": "#9b59b6", "price": 3000, "rarity": "legendary", "effect": {"elixir": 1.1}, "reward": {"gold": 1.25}},
    'vampire': {"shape": [[1, 0, 1], [1, 1, 1]], "color": "#c0392b", "price": 4000, "rarity": "legendary", "effect": {"lifesteal": 0.2}, "reward": {"gold": 1.3}},
    'berserk': {"shape": [[1, 0, 1], [1, 1, 1], [1, 0, 1]], "color": "#e74c3c", "price": 4500, "rarity": "legendary", "effect": {"dmg": 1.4, "hp": 0.8}, "reward": {"gold": 1.4}},
    'fortress': {"shape": [[1, 1, 1], [1, 0, 1], [1, 1, 1]], "color": "#34495e", "price": 5000, "rarity": "legendary", "effect": {"hp": 1.5, "speed": 0.8}, "reward": {"gold": 1.5}},
    'glass_cannon': {"shape": [[1], [1], [1], [1]], "color": "#e74c3c", "price": 5000, "rarity": "legendary", "effect": {"dmg": 1.5, "hp": 0.7}, "reward": {"gold": 1.6}},
    'sentry': {"shape": [[1]], "color": "#f1c40f", "price": 8000, "rarity": "god", "effect": {"special": "tower"}, "reward": {"gold": 1.5}},
    'swarm_core': {"shape": [[1, 0, 1], [0, 1, 0], [1, 0, 1]], "color": "#f39c12", "price": 7000, "rarity": "god", "effect": {"elixir": 1.2, "hp": 0.9}, "reward": {"gold": 1.6}},
    'omega_brain': {"shape": [[1, 1, 1], [1, 1, 1], [1, 1, 1]], "color": "#000", "price": 10000, "rarity": "god", "effect": {"hp": 1.2, "dmg": 1.2, "speed": 1.2, "elixir": 1.2}, "reward": {"gold": 2.0}},
    'nano_cloud': {"shape": [[1, 1], [0, 1], [0, 1]], "color": "#00cec9", "price": 9000, "rarity": "god", "effect": {"lifesteal": 0.5}, "reward": {"gold": 1.8}},
    'doomsday': {"shape": [[1, 1, 1, 1], [1, 1, 1, 1]], "color": "#660000", "price": 15000, "rarity": "god", "effect": {"dmg": 2.0, "hp": 2.0, "speed": 0.5}, "reward": {"gold": 3.0, "gems": 5, "trophy_mult": 2.0}},
    'tutorial_square_6x6': {"shape": [[1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1]], "color": "#e67e22", "price": 0, "rarity": "legendary", "effect": {"special": "tower_trophy"}, "reward": {"gold": 1.0}},
    'tutorial_square_4x4': {"shape": [[1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1]], "color": "#9b59b6", "price": 0, "rarity": "legendary", "effect": {"special": "double_king_roulette"}, "reward": {"gold": 1.0}},
    'chal_hp_1': {"shape": [[1, 1], [1, 0]], "color": "#2ecc71", "price": 1000, "rarity": "common", "effect": {"hp": 1.2}, "reward": {"gold": 1.2}},
    'chal_dmg_1': {"shape": [[1, 0], [1, 1]], "color": "#e74c3c", "price": 1000, "rarity": "common", "effect": {"dmg": 1.2}, "reward": {"gold": 1.2}},
    'chal_spd_1': {"shape": [[1, 1]], "color": "#f1c40f", "price": 1200, "rarity": "common", "effect": {"speed": 1.1}, "reward": {"gold": 1.2}},
    'chal_elix_1': {"shape": [[1], [1]], "color": "#9b59b6", "price": 1200, "rarity": "common", "effect": {"elixir": 1.1}, "reward": {"gold": 1.2}},
    'chal_all_1': {"shape": [[1, 1, 1]], "color": "#34495e", "price": 2000, "rarity": "uncommon", "effect": {"hp": 1.1, "dmg": 1.1, "speed": 1.1}, "reward": {"gold": 1.5}},
    'chal_hp_2': {"shape": [[1, 1], [1, 1]], "color": "#2ecc71", "price": 3000, "rarity": "rare", "effect": {"hp": 1.5}, "reward": {"gold": 1.5, "gems": 1}},
    'chal_dmg_2': {"shape": [[1, 1], [0, 1]], "color": "#e74c3c", "price": 3000, "rarity": "rare", "effect": {"dmg": 1.5}, "reward": {"gold": 1.5, "gems": 1}},
    'chal_spd_2': {"shape": [[1, 1], [1, 0]], "color": "#f1c40f", "price": 3500, "rarity": "legendary", "effect": {"speed": 1.2}, "reward": {"gold": 1.5, "gems": 1}},
    'chal_god_mode': {"shape": [[1, 1, 1], [1, 1, 1]], "color": "#000", "price": 8000, "rarity": "god", "effect": {"hp": 1.5, "dmg": 1.5, "speed": 1.5, "elixir": 1.5}, "reward": {"gold": 3.0, "gems": 10, "trophy_mult": 3.0}},
    'chal_vampire': {"shape": [[1, 0, 1]], "color": "#c0392b", "price": 4000, "rarity": "legendary", "effect": {"lifesteal": 0.2}, "reward": {"gold": 1.3}},
    'assist_weak_1': {"shape": [[1]], "color": "#bdc3c7", "price": 500, "rarity": "common", "effect": {"hp": 0.9}, "reward": {"gold": 0.9}},
    'assist_dull_1': {"shape": [[1]], "color": "#95a5a6", "price": 500, "rarity": "common", "effect": {"dmg": 0.9}, "reward": {"gold": 0.9}},
    'assist_slow_1': {"shape": [[1]], "color": "#7f8c8d", "price": 500, "rarity": "common", "effect": {"speed": 0.9}, "reward": {"gold": 0.9}},
    'assist_leak_1': {"shape": [[1]], "color": "#34495e", "price": 600, "rarity": "common", "effect": {"elixir": 0.9}, "reward": {"gold": 0.9}},
    'assist_weak_2': {"shape": [[1, 1]], "color": "#bdc3c7", "price": 1500, "rarity": "uncommon", "effect": {"hp": 0.7}, "reward": {"gold": 0.7}},
    'assist_dull_2': {"shape": [[1, 1]], "color": "#95a5a6", "price": 1500, "rarity": "uncommon", "effect": {"dmg": 0.7}, "reward": {"gold": 0.7}},
    'assist_slow_2': {"shape": [[1], [1]], "color": "#7f8c8d", "price": 1500, "rarity": "uncommon", "effect": {"speed": 0.7}, "reward": {"gold": 0.7}},
    'assist_freeze': {"shape": [[1, 1], [1, 1]], "color": "#3498db", "price": 4000, "rarity": "legendary", "effect": {"speed": 0.5}, "reward": {"gold": 0.5}},
    'assist_fragile': {"shape": [[1, 0, 1]], "color": "#e74c3c", "price": 4000, "rarity": "legendary", "effect": {"hp": 0.5}, "reward": {"gold": 0.5}},
    'assist_pacifist': {"shape": [[0, 1, 0], [1, 1, 1]], "color": "#fff", "price": 4000, "rarity": "legendary", "effect": {"dmg": 0.5}, "reward": {"gold": 0.5}},
    'mix_berserk': {"shape": [[1, 1]], "color": "#e67e22", "price": 2500, "rarity": "rare", "effect": {"dmg": 1.5, "hp": 0.8}, "reward": {"gold": 1.1}},
    'mix_tank': {"shape": [[1], [1]], "color": "#27ae60", "price": 2500, "rarity": "rare", "effect": {"hp": 1.5, "speed": 0.8}, "reward": {"gold": 1.1}},
    'mix_rush': {"shape": [[1, 0], [0, 1]], "color": "#f1c40f", "price": 2500, "rarity": "rare", "effect": {"speed": 1.5, "hp": 0.8}, "reward": {"gold": 1.1}},
    'mix_swarm': {"shape": [[0, 1], [1, 0]], "color": "#8e44ad", "price": 2500, "rarity": "rare", "effect": {"elixir": 1.3, "hp": 0.7}, "reward": {"gold": 1.0}},
    'mix_glass': {"shape": [[1]], "color": "#c0392b", "price": 3500, "rarity": "legendary", "effect": {"dmg": 2.0, "hp": 0.5}, "reward": {"gold": 1.2, "trophy_mult": 1.2}},
    'shape_t_sm': {"shape": [[1, 1, 1], [0, 1, 0]], "color": "#34495e", "price": 800, "rarity": "common", "effect": {"hp": 1.05}, "reward": {"gold": 1.05}},
    'shape_x_sm': {"shape": [[1, 0, 1], [0, 1, 0], [1, 0, 1]], "color": "#c0392b", "price": 800, "rarity": "common", "effect": {"dmg": 1.05}, "reward": {"gold": 1.05}},
    'shape_o_big': {"shape": [[1, 1, 1], [1, 0, 1], [1, 1, 1]], "color": "#27ae60", "price": 1200, "rarity": "uncommon", "effect": {"hp": 1.1}, "reward": {"gold": 1.1}},
    'shape_i_long': {"shape": [[1], [1], [1], [1]], "color": "#f39c12", "price": 1500, "rarity": "rare", "effect": {"speed": 1.1}, "reward": {"gold": 1.1}},
    'shape_random': {"shape": [[1, 0, 1], [1, 1, 0]], "color": "#9b59b6", "price": 1500, "rarity": "rare", "effect": {"elixir": 1.1}, "reward": {"gold": 1.1}},
};

// --- END OF js/data/modules.js ---

// --- START OF js/data/skins.js ---
const SKINS = {
    grass: { name: "Forest", ground: "grass", liquid: "water", bridge: "bridge", bg: "#27ae60", music:'battle' },
    desert: { name: "Desert", ground: "sand", liquid: "quicksand", bridge: "bone_bridge", bg: "#f1c40f", music:'battle' },
    snow: { name: "Frozen", ground: "snow", liquid: "ice", bridge: "ice_bridge", bg: "#bdc3c7", music:'battle' },
    volcano: { name: "Volcano", ground: "obsidian", liquid: "lava", bridge: "metal_bridge", bg: "#c0392b", music:'battle' },
    cyber:   { name: "Cyber", ground: "grid", liquid: "void", bridge: "neon_bridge", bg: "#2c3e50", music:'battle' },
    graveyard: { name: "Cemetery", ground: "dirt", liquid: "water", bridge: "stone", bg: "#34495e", music:'battle' },
    space: { name: "Space", ground: "star", liquid: "void", bridge: "neon_bridge", bg: "#000000", music:'battle' },
    beach: { name: "Beach", ground: "gold_sand", liquid: "water", bridge: "bridge", bg: "#3498db", music:'battle' }
};

// --- END OF js/data/skins.js ---

// --- START OF js/engine/audio.js ---
// --- AUDIO ENGINE ---
const AUDIO = {
    ctx: null, isOn: false,
    masterGain: null, musicGain: null, sfxGain: null,
    loops: [], currentMusic: null,

    init: function() {
        if(this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        const compressor = this.ctx.createDynamicsCompressor();
        compressor.threshold.value = -24; compressor.knee.value = 30;
        compressor.ratio.value = 12; compressor.attack.value = 0.003; compressor.release.value = 0.25;
        compressor.connect(this.ctx.destination);
        this.masterGain = this.ctx.createGain(); this.masterGain.gain.value = 0.5;
        this.masterGain.connect(compressor);
        this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = 0.5;
        this.musicGain.connect(this.masterGain);
        this.sfxGain = this.ctx.createGain(); this.sfxGain.gain.value = 0.7;
        this.sfxGain.connect(this.masterGain);
        this.isOn = true;
    },
    toggle: function() {
        if(!this.ctx) { this.init(); return true; }
        this.isOn = !this.isOn;
        if(!this.isOn) { this.stopMusic(); if(this.ctx.state === 'running') this.ctx.suspend(); }
        else { if(this.ctx.state === 'suspended') this.ctx.resume(); }
        return this.isOn;
    },
    playTone: function(freq, type, duration, vol=1, detune=0) {
        if(!this.isOn || !this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        let osc2 = null;
        if(type==='square'||type==='sawtooth') {
            osc2 = this.ctx.createOscillator(); osc2.type=type;
            osc2.frequency.setValueAtTime(freq,t); osc2.detune.value=type==='square'?10:5;
            osc2.connect(gain);
        }
        osc.type = type; osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(vol, t+0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t+duration);
        osc.connect(gain); gain.connect(this.sfxGain);
        osc.start(t); osc.stop(t+duration+0.1);
        if(osc2) { osc2.start(t); osc2.stop(t+duration+0.1); }
    },
    playNoise: function(duration, vol=1) {
        if(!this.isOn || !this.ctx) return;
        const bs = this.ctx.sampleRate * duration;
        const buf = this.ctx.createBuffer(1, bs, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for(let i=0; i<bs; i++) data[i]=Math.random()*2-1;
        const noise = this.ctx.createBufferSource(); noise.buffer = buf;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime+duration);
        noise.connect(gain); gain.connect(this.sfxGain);
        noise.start();
    },
    playSFX: function(type) {
        if(!this.isOn) return;
        switch(type) {
            case 'spawn': this.playTone(440,'square',0.1,0.4); break;
            case 'attack': this.playNoise(0.05,0.3); this.playTone(150,'sawtooth',0.1,0.2); break;
            case 'hit': this.playTone(100,'square',0.1,0.4); this.playNoise(0.1,0.3); break;
            case 'heal': this.playTone(523,'sine',0.2,0.3); break;
            case 'zap': this.playTone(1200,'sawtooth',0.2,0.3); break;
            case 'tower_destroy': this.playNoise(0.5,0.5); this.playTone(60,'triangle',0.6,0.5); break;
            case 'tick': this.playTone(800, 'square', 0.05, 0.1); break;
            case 'legendary': this.playTone(440, 'sawtooth', 0.5, 0.5); break;
        }
    },
    playMusic: function(theme, onComplete) {
        if(!this.isOn) return;
        if(this.currentMusic === theme && theme !== 'victory') return;

        this.stopMusic();
        this.currentMusic = theme;

        // Définition des notes
        const N = { c3:130.8, d3:146.8, e3:164.8, f3:174.6, g3:196.0, a3:220.0, b3:246.9,
                    c4:261.6, d4:293.7, e4:329.6, f4:349.2, g4:392.0, a4:440.0, b4:493.9,
                    c5:523.3, d5:587.3, e5:659.3, f5:698.5, g5:784.0, a5:880.0, _:0 };

        let tracks = [], speed = 200;

        if(theme === 'menu') {
            speed = 250;
            const melody = [N.e4,N._,N.g4,N._,N.b4,N._,N.g4,N._,N.a4,N._,N.c5,N._,N.g4,N._,N.e4,N._,N.d4,N._,N.f4,N._,N.a4,N._,N.f4,N._,N.e4,N._,N.g4,N._,N.c4,N._,N._,N._];
            const bass = [N.c3,N._,N._,N._,N.c3,N._,N._,N._,N.f3,N._,N._,N._,N.f3,N._,N._,N._,N.g3,N._,N._,N._,N.g3,N._,N._,N._,N.c3,N._,N._,N._,N.c3,N._,N.g3,N._];
            tracks.push({notes:melody, type:'sine', vol:0.3});
            tracks.push({notes:bass, type:'triangle', vol:0.4});
        }
        else if(theme === 'battle') {
            speed = 130;
            const lead = [N.a4,N._,N.a4,N.g4,N.a4,N._,N.c5,N._,N.b4,N._,N.g4,N._,N.e4,N._,N.g4,N._,N.a4,N._,N.a4,N.g4,N.a4,N._,N.e5,N._,N.d5, N._,N.c5,N._,N.b4,N._,N.g4,N.g4];
            const bass = [N.a3,N.a3,N.e3,N.a3,N.a3,N.a3,N.g3,N.e3,N.g3,N.g3,N.d3,N.g3,N.g3,N.g3,N.b3,N.g3];
            const drums = [1,0,1,0, 1,0,1,1, 1,0,1,0, 1,1,1,0];
            tracks.push({notes:lead, type:'square', vol:0.25});
            tracks.push({notes:bass, type:'triangle', vol:0.45});
            tracks.push({notes:drums, type:'noise', vol:0.15});
        }
        else if(theme === 'victory') {
            speed = 110;
            const melody = [N.c4,N.c4,N.c4,N._,N.c4,N.e4,N.g4,N._,N.c5,N._,N.g4,N.e4,N.c5,N._,N._,N._];
            const bass = [N.c3,N.g3,N.c3,N.g3,N.c3,N.g3,N.c3,N.g3,N.c3,N._,N.c3,N._,N.c3,N._,N._,N._];
            tracks.push({notes:melody, type:'square', vol:0.3});
            tracks.push({notes:bass, type:'triangle', vol:0.4});
        }

        let step = 0;
        // Lancer la boucle
        const interval = setInterval(()=>{
            if(!this.isOn) return;
            tracks.forEach(track => {
                const n = track.notes[step % track.notes.length];
                if(n > 1) this.playTone(n, track.type, speed/1000*0.9, track.vol, 0, 0, true);
                else if(n === 1 && track.type === 'noise') this.playNoise(0.05, track.vol, true);
            });
            step++;
            // Arrêt auto pour la victoire
            if(theme === 'victory' && step >= tracks[0].notes.length) {
                clearInterval(interval);
                this.currentMusic = null;
                if(onComplete) onComplete();
            }
        }, speed);
        this.loops.push(interval);
    },
    stopMusic: function() {
        this.loops.forEach(l => clearInterval(l));
        this.loops = [];
        this.currentMusic = null;
    }
};

// --- END OF js/engine/audio.js ---

// --- START OF js/core/state.js ---
const DEFAULT_PLAYER = {
    gold: 1000,       // Un peu d'or pour commencer
    trophies: 0,
    gems: 20,
    currentSkin: 'grass',
    unlockedSkins: ['grass'],
    // Deck de base équilibré
    deck: ['archer', 'knight', 'giant', 'fireball', 'skeleton'],
    // NOUVEAU SYSTÈME V2: cards = { key: { level:1, count:0 } }
    cards: {
        'archer': { level:1, count:0 },
        'knight': { level:1, count:2 },
        'giant': { level:1, count:0 },
        'skeleton': { level:1, count:0 },
        'fireball': { level:1, count:0 },
        'goblin': { level:1, count:0 }
    },
    tutorial_complete: false,
    tutorial_kingdom_done: false,
    tutorial_brain_done: false,
    tutorial_skins_done: false,
    tutorial_deck_done: false,
    shop_rotation: { last_refresh: 0, cards: [], bought: [false, false, false] },
    settings: { theme: 'dark', lang: 'fr' },
    // NOUVEAU SYSTÈME V3: MODULES IA
    modules: ['tutorial_square_6x6', 'tutorial_square_4x4'], // Liste des clés possédées ['cpu_v1', ...]
    ai_placements: [],  // Liste des placements { key, x, y, uid }
    // PROFIL
    nickname: 'Player',
    country: `[FLAG]`, 
    // We cannot use ICONS here because state.js is loaded before main.js/icons.js
    // We should use a text placeholder or initialize it in initPlayer AFTER icons are ready.
    // However, ICONS are init in main.js. state.js is imported by main.js.
    // So we can't use ICONS.flag here. 
    // I will use a string placeholder that I replace in UI or just a simple string.
    // Given the previous code tried to put HTML in state, which is risky.
    // Let's stick to a safe default and handle display in UI.
    avatar: 'knight',
    free_nick_change: true,
    // DEEP TUTORIALS
    tutorial_battle_drag: false,
    tutorial_levelup: false,
    tutorial_inspect: false,
    tutorial_brain_ui: false,
    tutorial_brain_drag: false
};

let LANG = 'fr';

function setLang(l) {
    LANG = l;
    window.LANG = l;
}

function initPlayer() {
    window.PLAYER = JSON.parse(JSON.stringify(DEFAULT_PLAYER));
    // Fix country if it's the placeholder
    if(window.PLAYER.country === '[FLAG]' && window.ICONS) {
         window.PLAYER.country = `<img src="${window.ICONS.flag}" class="pixel-icon">`;
    }
    window.LANG = window.PLAYER.settings.lang;
    LANG = window.PLAYER.settings.lang;
}

// Global helpers attached to window for compatibility
function hasCard(key) {
    return window.PLAYER && window.PLAYER.cards[key];
}

function addCard(key, amount=1) {
    if(!window.PLAYER) return false;
    if(!window.PLAYER.cards[key]) {
        window.PLAYER.cards[key] = { level: 1, count: 0 };
        return true; // Unlocked
    } else {
        window.PLAYER.cards[key].count += amount;
        return false; // Just added count
    }
}

function getCardLevel(key) {
    return (window.PLAYER && window.PLAYER.cards[key]) ? window.PLAYER.cards[key].level : 1;
}

function getCardCount(key) {
    return (window.PLAYER && window.PLAYER.cards[key]) ? window.PLAYER.cards[key].count : 0;
}

window.hasCard = hasCard;
window.addCard = addCard;
window.getCardLevel = getCardLevel;
window.getCardCount = getCardCount;

// --- END OF js/core/state.js ---

// --- START OF js/core/utils.js ---

function t(key) {
    const lang = window.LANG || LANG; // Use window as fallback/primary
    return (TEXTS[lang] && TEXTS[lang][key]) ? TEXTS[lang][key] : key;
}

window.t = t;

// --- END OF js/core/utils.js ---

// --- START OF js/engine/sprites.js ---

const SPRITE_CACHE = {};

function initSprites() {
    const teams = { blue: '#3498db', red: '#e74c3c' };
    Object.keys(SPRITES_ASCII).forEach(key => {
        const entry = SPRITES_ASCII[key];
        
        // Normalize: if entry is array of strings -> single frame. If array of arrays -> animation
        let frames = [];
        if(Array.isArray(entry) && typeof entry[0] === 'string') frames = [entry];
        else frames = entry;

        frames.forEach((art, frameIdx) => {
            const h = art.length; const w = art[0].length;
            ['blue', 'red'].forEach(team => {
                const cvs = document.createElement('canvas');
                cvs.width = w; cvs.height = h;
                const ctx = cvs.getContext('2d');
                for(let y=0; y<h; y++) {
                    for(let x=0; x<w; x++) {
                        const char = art[y][x];
                        if(!PALETTE[char]) continue;
                        let color = PALETTE[char];
                        if(char === 'T') color = teams[team];
                        ctx.fillStyle = color; ctx.fillRect(x, y, 1, 1);
                    }
                }
                // Key format: unit_blue_0 (for frame 0)
                // Also keep legacy format unit_blue for backward compat (uses frame 0)
                const baseKey = key + '_' + team;
                SPRITE_CACHE[baseKey + '_' + frameIdx] = cvs;
                if(frameIdx === 0) SPRITE_CACHE[baseKey] = cvs; // Default

                // Neutral/Blue default shortcut
                if(team === 'blue') {
                    SPRITE_CACHE[key + '_' + frameIdx] = cvs;
                    if(frameIdx === 0) SPRITE_CACHE[key] = cvs;
                }
            });
        });
        // Store frame count
        SPRITE_CACHE[key + '_frames'] = frames.length;
    });
}

// --- END OF js/engine/sprites.js ---

// --- START OF js/core/storage.js ---

function loadData() {
    const s = localStorage.getItem('pixel_clash_launch_v1');
    if(s) {
        try {
            const saved = JSON.parse(s);
            // MIGRATION V1 -> V2 (Array -> Object)
            if(saved.collection && Array.isArray(saved.collection)) {
                if(!saved.cards) saved.cards = {};
                saved.collection.forEach(k => {
                    if(!saved.cards[k]) saved.cards[k] = { level: 1, count: 0 };
                });
                delete saved.collection;
            }
            window.PLAYER = { ...window.PLAYER, ...saved };
            
            // Sécurité settings
            if(!window.PLAYER.settings) window.PLAYER.settings = { theme: 'dark', lang: 'fr' };
            // Sécurité cards
            if(!window.PLAYER.cards) window.PLAYER.cards = JSON.parse(JSON.stringify(DEFAULT_PLAYER.cards));

            // Sécurité Modules V3
            if(!window.PLAYER.modules) window.PLAYER.modules = [];
            if(!window.PLAYER.ai_placements) window.PLAYER.ai_placements = [];

            // Sécurité Profil
            if(!window.PLAYER.nickname) window.PLAYER.nickname = 'Player';
            if(!window.PLAYER.country) window.PLAYER.country = `[FLAG]`; // Safe default, fixed in UI or Init
            if(!window.PLAYER.avatar) window.PLAYER.avatar = 'knight';
            if(typeof window.PLAYER.free_nick_change === 'undefined') window.PLAYER.free_nick_change = true;

            // Deep Tutorials
            if(typeof window.PLAYER.tutorial_battle_drag === 'undefined') window.PLAYER.tutorial_battle_drag = false;
            if(typeof window.PLAYER.tutorial_levelup === 'undefined') window.PLAYER.tutorial_levelup = false;
            if(typeof window.PLAYER.tutorial_inspect === 'undefined') window.PLAYER.tutorial_inspect = false;
            if(typeof window.PLAYER.tutorial_brain_ui === 'undefined') window.PLAYER.tutorial_brain_ui = false;
            if(typeof window.PLAYER.tutorial_brain_drag === 'undefined') window.PLAYER.tutorial_brain_drag = false;
            
        } catch(e) {
            console.error("Save Error", e);
        }
    }
}

function saveData(skipUI = false) {
    if(window.PLAYER) {
        localStorage.setItem('pixel_clash_launch_v1', JSON.stringify(window.PLAYER));
        if(!skipUI && typeof window.updateMetaUI === 'function') window.updateMetaUI();
    }
}

function validateSaveData() {
    if(!window.PLAYER) return;
    if(isNaN(window.PLAYER.gold)) window.PLAYER.gold = 500;
    
    // Init Tutorial Flags if missing
    if(typeof window.PLAYER.tutorial_kingdom_done === 'undefined') window.PLAYER.tutorial_kingdom_done = false;
    if(typeof window.PLAYER.tutorial_brain_done === 'undefined') window.PLAYER.tutorial_brain_done = false;
    if(typeof window.PLAYER.tutorial_skins_done === 'undefined') window.PLAYER.tutorial_skins_done = false;
    if(typeof window.PLAYER.tutorial_deck_done === 'undefined') window.PLAYER.tutorial_deck_done = false;

    // Ensure Tutorial Modules are present
    const tutMods = ['tutorial_square_6x6', 'tutorial_square_4x4'];
    tutMods.forEach(m => {
        if(!window.PLAYER.modules.includes(m)) window.PLAYER.modules.push(m);
    });

    // Vérif intégrité deck
    window.PLAYER.deck = window.PLAYER.deck.filter(k => CARDS[k]);
    // On ne remplit pas le deck automatiquement pour laisser le joueur choisir,
    // sauf si vide au tout premier lancement.
    const available = Object.keys(window.PLAYER.cards);
    if(window.PLAYER.deck.length === 0 && available.length > 0) {
        // Fallback minimal
        window.PLAYER.deck = available.slice(0, 5);
    }
}

// --- END OF js/core/storage.js ---

// --- START OF js/ui/icons.js ---

const ICONS = {};

const PIXEL_MAPS = {
    gold: [
        "0011100",
        "0111110",
        "1110111",
        "1110111",
        "1111111",
        "0111110",
        "0011100"
    ],
    gem: [
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "0111110",
        "0011100",
        "0001000"
    ],
    trophy: [
        "1111111",
        "0111110",
        "0011100",
        "0011100",
        "0001000",
        "0011100",
        "0111110"
    ],
    heart: [
        "0110110",
        "1111111",
        "1111111",
        "1111111",
        "0111110",
        "0011100",
        "0001000"
    ],
    sword: [
        "0000001",
        "0000011",
        "0000110",
        "0001100",
        "0011000",
        "0110000",
        "1100000"
    ],
    elixir: [
        "0011100",
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "1111111",
        "0111110"
    ],
    speed: [
        "0001100",
        "0011100",
        "0111000",
        "1111110",
        "0011111",
        "0001110",
        "0000000"
    ],
    hand: [
        "0010000",
        "0110000",
        "1110000",
        "1111100",
        "1111110",
        "1111110",
        "0111100"
    ],
    pointer: [
        "1100000",
        "1110000",
        "1111000",
        "1111100",
        "1111110",
        "1110000",
        "1000000"
    ],
    scroll: [
        "0111110",
        "1111111",
        "1000001",
        "1000001",
        "1000001",
        "1111111",
        "0111110"
    ],
    user: [
        "0011100",
        "0111110",
        "0111110",
        "0011100",
        "0111110",
        "1111111",
        "1111111"
    ],
    gear: [
        "0101010",
        "1111111",
        "0111110",
        "1101011",
        "0111110",
        "1111111",
        "0101010"
    ],
    sound_on: [
        "0010000",
        "0110000",
        "1111101",
        "1111100",
        "1111101",
        "0110000",
        "0010000"
    ],
    sound_off: [
        "0010000",
        "0110000",
        "1111100",
        "1111100",
        "1111100",
        "0110000",
        "0010000"
    ],
    check: [
        "0000001",
        "0000011",
        "0000110",
        "0001100",
        "1011000",
        "1110000",
        "0100000"
    ],
    cross: [
        "1000001",
        "0100010",
        "0010100",
        "0001000",
        "0010100",
        "0100010",
        "1000001"
    ],
    lock: [
        "0011100",
        "0100010",
        "0100010",
        "1111111",
        "1111111",
        "1111111",
        "1111111"
    ],
    flag: [
        "1111100",
        "1111100",
        "1111100",
        "1000000",
        "1000000",
        "1000000",
        "1000000"
    ],
    clan: [
        "0010000",
        "0111000",
        "1111100",
        "0111000",
        "0010000",
        "0000000",
        "0000000"
    ],
    construction: [
        "1101101",
        "1011011",
        "0110110",
        "1101101",
        "1011011",
        "0110110",
        "1111111"
    ],
    circle: [
        "0011100",
        "0111110",
        "1111111",
        "1111111",
        "1111111",
        "0111110",
        "0011100"
    ]
};

const COLORS = {
    gold: '#f1c40f',
    gem: '#3498db',
    trophy: '#f1c40f',
    heart: '#e74c3c',
    sword: '#e74c3c',
    elixir: '#9b59b6',
    speed: '#f1c40f',
    hand: '#ffffff',
    scroll: '#f39c12',
    user: '#ecf0f1',
    gear: '#95a5a6',
    sound_on: '#fff',
    sound_off: '#7f8c8d',
    check: '#2ecc71',
    cross: '#e74c3c',
    lock: '#7f8c8d',
    flag: '#fff',
    clan: '#e67e22',
    construction: '#f39c12',
    white: '#ffffff',
    blue: '#3498db',
    purple: '#9b59b6',
    yellow: '#f1c40f',
    pointer: '#ffffff'
};

function initIcons() {
    Object.keys(PIXEL_MAPS).forEach(key => {
        ICONS[key] = generateIcon(key);
    });
    
    // Rarity variants
    ICONS['rarity_common'] = generateIcon('circle', 'white');
    ICONS['rarity_uncommon'] = generateIcon('circle', 'check'); // Using check color (green)
    ICONS['rarity_rare'] = generateIcon('circle', 'yellow');
    ICONS['rarity_legendary'] = generateIcon('circle', 'clan'); // Using clan color (orange)
    ICONS['rarity_god'] = generateIcon('circle', 'heart'); // Using heart color (red)
    
    window.ICONS = ICONS;
    replaceIconsInDOM();
}

function replaceIconsInDOM() {
    const elements = document.querySelectorAll('[data-icon]');
    elements.forEach(el => {
        const key = el.getAttribute('data-icon');
        if(ICONS[key]) {
            const img = document.createElement('img');
            img.src = ICONS[key];
            img.className = 'pixel-icon';
            if(el.className) img.classList.add(...el.classList);
            el.replaceWith(img);
        }
    });
}

function generateIcon(key, colorOverride=null) {
    const map = PIXEL_MAPS[key];
    if(!map) return '';
    
    const size = 7;
    const scale = 4;
    const canvas = document.createElement('canvas');
    canvas.width = size * scale;
    canvas.height = size * scale;
    const ctx = canvas.getContext('2d');
    
    const color = colorOverride ? COLORS[colorOverride] : COLORS[key];
    
    ctx.fillStyle = color;
    
    for(let y=0; y<size; y++) {
        for(let x=0; x<size; x++) {
            if(map[y][x] === '1') {
                ctx.fillRect(x*scale, y*scale, scale, scale);
            }
        }
    }
    
    // Outline (Optional, simple box)
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 1;
    // ctx.strokeRect(0,0,canvas.width,canvas.height);
    
    return canvas.toDataURL();
}

// --- END OF js/ui/icons.js ---

// --- START OF js/ui/notifications.js ---

let notifCallback = null;

function showNotif(title, msg, onOk = null) {
    const el = document.getElementById('notification-overlay');
    if(!el) return;
    document.getElementById('notif-title').textContent = title;
    document.getElementById('notif-message').textContent = msg;
    el.style.display = 'flex';
    notifCallback = onOk;
    if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
}

function closeNotification() {
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

// --- END OF js/ui/notifications.js ---

// --- START OF js/ui/tutorial.js ---

const TUTORIALS = {
    BATTLE_DRAG: 'tutorial_battle_drag',
    LEVEL_UP: 'tutorial_levelup',
    LEVEL_UP_ACTION: 'tutorial_levelup_action',
    INSPECT: 'tutorial_inspect',
    BRAIN: 'tutorial_brain_ui',
    BRAIN_DRAG: 'tutorial_brain_drag'
};

function showTutorialOverlay(targetElement, text, key, onComplete) {
    if(!targetElement || !targetElement.isConnected) return;
    
    // Check if already seen
    if(window.PLAYER && window.PLAYER[key]) return;

    // Check visibility (rudimentary)
    if(targetElement.offsetParent === null) return;

    const rect = targetElement.getBoundingClientRect();
    const handX = rect.left + rect.width/2;
    const handY = rect.top + rect.height/2;

    // Check if overlay already exists for THIS key
    let overlay = document.getElementById('tuto-overlay-' + key);
    if(overlay) {
        // Update position (Tracking)
        const hand = overlay.querySelector('.tuto-hand');
        if(hand) {
            hand.style.left = handX + 'px';
            hand.style.top = handY + 'px';
        }
        return;
    }

    // CLEANUP: Remove ANY other tutorial overlay to prevent stacking
    const existing = document.querySelectorAll('[id^="tuto-overlay-"]');
    existing.forEach(el => el.remove());

    // Create Overlay
    overlay = document.createElement('div');
    overlay.id = 'tuto-overlay-' + key;
    overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:9999; pointer-events:none;";
    
    // Hand Cursor Animation (8-bit Pointer)
    const hand = document.createElement('div');
    hand.className = 'tuto-hand';
    hand.innerHTML = `<img src="${window.ICONS.pointer}" class="pixel-icon" style="width:64px; height:64px;">`;
    hand.style.cssText = `
        position:absolute; 
        left:${handX}px; 
        top:${handY}px; 
        animation: point 1s infinite alternate;
        filter: drop-shadow(2px 2px 0 black);
        pointer-events: none;
        z-index: 10000;
        transition: left 0.1s, top 0.1s;
    `;
    
    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.innerHTML = text;
    tooltip.className = "pixel-btn blue";
    tooltip.style.cssText = `
        position:absolute;
        left:50%; top:20%; transform:translateX(-50%);
        font-size:0.8rem; padding:15px; width:80%; max-width:300px;
        pointer-events:auto;
        display:flex; flex-direction:column; align-items:center; gap:10px;
    `;
    
    // Buttons Container
    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '10px';
    btnContainer.style.marginTop = '10px';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "OK";
    closeBtn.className = "pixel-btn green";
    closeBtn.style.margin = "0";
    closeBtn.onclick = () => {
        completeTutorial(key);
        document.body.removeChild(overlay);
        if(onComplete) onComplete();
    };
    btnContainer.appendChild(closeBtn);

    // Skip Button (Small)
    const skipBtn = document.createElement('button');
    skipBtn.innerHTML = "SKIP >>";
    skipBtn.className = "pixel-btn";
    skipBtn.style.cssText = "margin:0; background:#7f8c8d; font-size:0.6rem; padding:5px 10px;";
    skipBtn.onclick = () => {
        document.body.removeChild(overlay);
        // Show confirm
        if(window.showConfirm) {
            window.showConfirm("SKIP TUTORIAL?", window.t('tuto_skip_confirm'), () => {
                skipAllTutorials();
            });
        } else {
            skipAllTutorials();
        }
    };
    btnContainer.appendChild(skipBtn);

    tooltip.appendChild(btnContainer);

    overlay.appendChild(hand);
    overlay.appendChild(tooltip);
    
    // Style for pointer animation
    if(!document.getElementById('anim-point')) {
        const style = document.createElement('style');
        style.id = 'anim-point';
        style.innerHTML = `@keyframes point { from { transform: translateY(0) scale(1); } to { transform: translateY(10px) scale(0.9); } }`;
        document.head.appendChild(style);
    }

    document.body.appendChild(overlay);
}

function completeTutorial(key) {
    if(window.PLAYER) {
        window.PLAYER[key] = true;
        saveData();
    }
    // Force remove overlay if it exists
    const overlay = document.getElementById('tuto-overlay-' + key);
    if(overlay) overlay.remove();
}

function skipAllTutorials() {
    if(!window.PLAYER) return;
    Object.values(TUTORIALS).forEach(key => {
        window.PLAYER[key] = true;
    });
    // Also mark hardcoded string keys if any (legacy)
    window.PLAYER['tutorial_brain_drag'] = true;
    
    saveData();
    // Remove all overlays
    const existing = document.querySelectorAll('[id^="tuto-overlay-"]');
    existing.forEach(el => el.remove());
}

// --- END OF js/ui/tutorial.js ---

// --- START OF js/system/leaderboard.js ---

const Leaderboard = {
    init: function() {
        console.log("[LEADERBOARD] Initialized");
    },
    getTopPlayers: function() {
        // Fake data for demo
        const flag = (window.ICONS && window.ICONS.flag) ? `<img src="${window.ICONS.flag}" class="pixel-icon">` : "[FLAG]";
        
        return {
            list: [
                { rank: 1, name: "PixelKing", trophies: 5000, country: flag },
                { rank: 2, name: "DarkLord", trophies: 4800, country: flag },
                { rank: 3, name: "Slayer99", trophies: 4500, country: flag },
                { rank: 4, name: "ClashGod", trophies: 4200, country: flag },
                { rank: 5, name: "NoobMaster", trophies: 4000, country: flag },
                { rank: 150, name: "Moi", trophies: window.PLAYER ? window.PLAYER.trophies : 0, country: window.PLAYER ? window.PLAYER.country : flag, isMe: true }
            ]
        };
    }
};

// --- END OF js/system/leaderboard.js ---

// --- START OF js/system/time.js ---

const Time = {
    offset: 0,
    isVerified: false,
    
    init: function() {
        // Offline Mode: Use local time directly
        console.log("[SECURE TIME] Offline Mode. Using local time.");
        this.offset = 0;
        this.isVerified = true;
        
        // Integrity Check
        this.checkSaveIntegrity();
    },

    now: function() {
        return Date.now() + this.offset;
    },

    checkSaveIntegrity: function() {
        if(!window.PLAYER) return; // Wait for player init
        const now = this.now();
        
        // Check Last Login
        if(window.PLAYER.last_login && window.PLAYER.last_login > now + 60000) { // 1 min buffer
            console.error("[ANTI-CHEAT] Time manipulation detected!");
            showNotif("SÉCURITÉ", "Horloge système incorrecte detected. Veuillez remettre à l'heure.", () => {
                // Punish or Reset? For now, just warn.
            });
        }
        window.PLAYER.last_login = now;
        saveData();
    }
};

// --- END OF js/system/time.js ---

// --- START OF js/system/background.js ---

const Background = {
    _isPaused: false, // Verrou pour éviter les doubles déclenchements

    init: function() {
        // 1. Détection Web Standard
        document.addEventListener('visibilitychange', () => {
            if(document.hidden) this.onPause();
            else this.onResume();
        });

        // 2. FIX APK/MOBILE (Essentiel pour WebIntoApp)
        // Déclenche la pause dès que l'app perd le focus (Home, changement d'app)
        window.addEventListener('blur', () => this.onPause());
        window.addEventListener('focus', () => this.onResume());
    },

    onPause: function() {
        if (this._isPaused) return;
        this._isPaused = true;

        console.log("[SYSTEM] App Backgrounded (Pause forced)");

        // 1. METTRE LE JEU EN PAUSE (Au lieu d'abandonner)
        // On vérifie si une partie est en cours ('playing') ou en décompte ('countdown')
        if(window.GAME && (window.GAME.state === 'playing' || window.GAME.state === 'countdown')) {
             if(typeof window.togglePauseGame === 'function') {
                 // Ceci ouvre le menu pause et arrête la boucle de gameplay logique
                 window.togglePauseGame();
             }
        }

        // 2. COUPER LE SON (Mute matériel)
        // C'est ça qui garantit que la musique s'arrête, même si le jeu tourne en fond
        if(AUDIO && AUDIO.ctx) {
            if(AUDIO.ctx.state === 'running') {
                AUDIO.ctx.suspend();
            }
        }
    },

    onResume: function() {
        if (!this._isPaused) return;
        this._isPaused = false;

        console.log("[SYSTEM] App Foregrounded");

        // 1. RELANCER LE SON (Seulement si l'utilisateur l'avait activé)
        if(AUDIO && AUDIO.ctx && AUDIO.isOn) {
            if(AUDIO.ctx.state === 'suspended') {
                AUDIO.ctx.resume();
            }
        }

        // NOTE: On ne relance pas le jeu automatiquement (resumeGame).
        // On laisse le joueur sur le menu "PAUSE" pour qu'il puisse reprendre quand il est prêt.
    }
};

// --- END OF js/system/background.js ---

// --- START OF js/system/quests.js ---

const QUESTS_DATA = [
    { id: 'win_1', desc: "Gagner 1 Combat", target: 1, reward: { gold: 100 }, type: 'win' },
    { id: 'play_10', desc: "Jouer 10 Cartes", target: 10, reward: { gold: 50 }, type: 'play_card' },
    { id: 'kill_50', desc: "Tuer 50 Unités", target: 50, reward: { gems: 2 }, type: 'kill_unit' },
    { id: 'open_chest', desc: "Ouvrir 1 Coffre", target: 1, reward: { gold: 200 }, type: 'open_chest' }
];

function initQuests() {
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

function updateQuestProgress(type, amount=1) {
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

function claimQuest(index) {
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

// --- END OF js/system/quests.js ---

// --- START OF js/system/main.js ---

const SYSTEM = {
    Time,
    Background,
    Leaderboard,
    init: function() {
        console.log("[SYSTEM] Initializing...");
        this.Time.init();
        this.Background.init();
        this.Leaderboard.init();
    }
};

// --- END OF js/system/main.js ---

// --- START OF js/ui/settings.js ---

function toggleSettings() {
    const el = document.getElementById('settings-modal');

    // Inject Restart Tutorial Button if missing
    if(!document.getElementById('btn-restart-tuto')) {
        const btn = document.createElement('button');
        btn.id = 'btn-restart-tuto';
        btn.className = 'pixel-btn';
        btn.style.cssText = "width:100%; margin:10px 0; background:#e67e22;";
        // btn.setAttribute('data-lang', 'restart_tuto'); 
        // We set text content directly with translation to be safe, or use attribute if system supports it dynamic
        btn.textContent = t('restart_tuto'); 
        btn.onclick = confirmRestartTutorial;
        
        // Insert before Close button (last child usually) or Reset Data
        const container = el.children[0];
        // Find Reset Data button to insert before, or just before last child (Close)
        // Let's insert before the "FERMER" button which is likely the last one
        const closeBtn = container.lastElementChild;
        container.insertBefore(btn, closeBtn);
    }
    
    // Update label just in case lang changed
    const btn = document.getElementById('btn-restart-tuto');
    if(btn) btn.textContent = t('restart_tuto');

    el.style.display = (el.style.display === 'flex') ? 'none' : 'flex';
}

function switchLanguage() {
    const newLang = (LANG === 'fr') ? 'en' : 'fr';
    setLang(newLang);
    if(window.PLAYER) window.PLAYER.settings.lang = newLang;
    
    // Call global update
    if(window.updateAllText) window.updateAllText();
    saveData();
}

function toggleDayNight() {
    if(window.PLAYER) {
        window.PLAYER.settings.theme = (window.PLAYER.settings.theme === 'dark') ? 'light' : 'dark';
        applyTheme();
        if(window.updateButtonLabels) window.updateButtonLabels();
        saveData();
    }
}

function applyTheme() {
    if(!window.PLAYER) return;
    if(window.PLAYER.settings.theme === 'light') document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
}

function showConfirm(title, message, onYes) {
    const el = document.getElementById('confirm-modal');
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    
    const btnYes = document.getElementById('btn-confirm-yes');
    const btnNo = document.getElementById('btn-confirm-no');
    
    // Clean up old listeners
    const newYes = btnYes.cloneNode(true);
    const newNo = btnNo.cloneNode(true);
    btnYes.parentNode.replaceChild(newYes, btnYes);
    btnNo.parentNode.replaceChild(newNo, btnNo);
    
    newYes.onclick = () => {
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
        el.style.display = 'none';
        if(onYes) onYes();
    };
    
    newNo.onclick = () => {
        if(AUDIO.isOn) AUDIO.playSFX('hit');
        el.style.display = 'none';
    };
    
    el.style.display = 'flex';
    if(AUDIO.isOn) AUDIO.playSFX('spawn');
}

function confirmReset() {
    showConfirm("ATTENTION", t('reset_data') + " ?", () => {
        localStorage.removeItem('pixel_clash_launch_v1');
        location.reload();
    });
}

function confirmRestartTutorial() {
    showConfirm("TUTORIAL", t('tuto_restart_confirm'), () => {
         Object.values(TUTORIALS).forEach(k => {
             if(window.PLAYER) window.PLAYER[k] = false;
         });
         saveData();
         location.reload();
    });
}

window.toggleSettings = toggleSettings;
window.switchLanguage = switchLanguage;
window.toggleDayNight = toggleDayNight;
window.confirmReset = confirmReset;
window.showConfirm = showConfirm;
window.confirmRestartTutorial = confirmRestartTutorial;

// --- END OF js/ui/settings.js ---

// --- START OF js/ui/deck.js ---

let deckCanvas = null;
let deckCtx = null;

function renderDeckVisuals(animate=false) {
    if(!deckCanvas) {
        deckCanvas = document.getElementById('deck-visuals-canvas');
        if(deckCanvas) {
            deckCtx = deckCanvas.getContext('2d');
            deckCtx.imageSmoothingEnabled = false;
        }
    }
    if(!deckCtx || !deckCanvas) return;

    // Resize
    const parent = deckCanvas.parentElement;
    if(parent.clientWidth !== deckCanvas.width || parent.clientHeight !== deckCanvas.height) {
        deckCanvas.width = parent.clientWidth;
        deckCanvas.height = parent.clientHeight;
        deckCtx.imageSmoothingEnabled = false;
    }

    const w = deckCanvas.width;
    const h = deckCanvas.height;

    // Clear
    deckCtx.clearRect(0, 0, w, h);

    // Draw Background (Simple Ground)
    const horizon = h * 0.6;
    
    // Sky
    deckCtx.fillStyle = '#2c3e50';
    deckCtx.fillRect(0, 0, w, horizon);
    
    // Ground
    deckCtx.fillStyle = '#27ae60';
    deckCtx.fillRect(0, horizon, w, h - horizon);
    
    // Grass noise
    deckCtx.fillStyle = 'rgba(0,0,0,0.1)';
    for(let i=0; i<20; i++) {
        const rx = (i * 12345) % w;
        const ry = horizon + ((i * 6789) % (h - horizon));
        deckCtx.fillRect(rx, ry, 2, 2);
    }

    // Draw Units
    if(!window.PLAYER) return;
    const deck = window.PLAYER.deck;
    if(deck.length === 0) {
        deckCtx.fillStyle = '#7f8c8d';
        deckCtx.font = '10px monospace';
        deckCtx.textAlign = 'center';
        deckCtx.fillText("DECK VIDE", w/2, h/2);
        return;
    }

    const spacing = w / (deck.length + 1);
    const yPos = h * 0.75; // Feet position

    deck.forEach((key, idx) => {
        // Animation Frame
        let frame = 0;
        if(animate) {
            const frameCount = SPRITE_CACHE[key + '_frames'] || 1;
            if(frameCount > 1) {
                // Slower animation for idle look
                const t = Date.now() / 500; 
                frame = Math.floor(t % frameCount);
            }
        }

        const s = SPRITE_CACHE[key + '_blue_' + frame] || SPRITE_CACHE[key + '_blue_0'] || SPRITE_CACHE[key];
        
        if(s) {
            const cx = spacing * (idx + 1);
            
            // Shadow
            deckCtx.fillStyle = 'rgba(0,0,0,0.3)';
            deckCtx.beginPath();
            deckCtx.ellipse(cx, yPos + 10, 10, 4, 0, 0, Math.PI*2);
            deckCtx.fill();

            // Draw Sprite
            // Scale up slightly?
            deckCtx.drawImage(s, cx - 16, yPos - 16, 32, 32);
        }
    });
}

function loopDeckVisuals() {
    const tabDeck = document.getElementById('tab-deck');
    if(tabDeck && tabDeck.classList.contains('active')) {
        renderDeckVisuals(true);
        
        // Deep Tutorial: Brain (After Deck & LevelUp)
        // Ensure overlay targets the button and is removed on click
        // FIX: Do NOT show if "Level Up Action" (Upgrade confirmation) is still pending!
        // The user must complete the upgrade tutorial first.
        // ALSO: Do NOT show if the Card Info Overlay is open (visual overlap check)
        const overlay = document.getElementById('card-info-overlay');
        const isOverlayOpen = overlay && overlay.style.display !== 'none';

        const canShowBrainTuto = window.PLAYER.tutorial_deck_done && 
                                 window.PLAYER.tutorial_levelup && 
                                 window.PLAYER.tutorial_levelup_action && // Must have finished upgrade action
                                 !window.PLAYER.tutorial_brain_ui &&
                                 !isOverlayOpen; // Strict visual check

        if(canShowBrainTuto) {
            const btn = document.querySelector('#tab-deck .pixel-btn.purple');
            if(btn) {
                if(window.showTutorialOverlay && window.TUTORIALS) {
                    window.showTutorialOverlay(btn, t('tuto_deck_brain'), window.TUTORIALS.BRAIN, () => {
                        // Callback on OK click, but user might click button directly
                    });
                    
                    // Attach click listener to button to clear tutorial if clicked directly
                    const clearTuto = () => {
                        const overlay = document.getElementById('tuto-overlay-' + window.TUTORIALS.BRAIN);
                        if(overlay) overlay.remove();
                        window.completeTutorial(window.TUTORIALS.BRAIN);
                    };
                    btn.addEventListener('click', clearTuto, {once:true});
                }
            }
        }
    }
    requestAnimationFrame(loopDeckVisuals);
}

// --- END OF js/ui/deck.js ---

// --- START OF js/game/brain.js ---

let brainDrag = { active:false, key:null, uid:null, ox:0, oy:0, fromGrid:false };
let brainInfoTimer = null;
const BRAIN_GRID_SIZE = 6;
const CELL_SIZE = 48; // px

function openBrainModal() {
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

function showModuleInfo(key) {
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

function closeBrainModal() {
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

// --- END OF js/game/brain.js ---

// --- START OF js/ui/roulette.js ---

function startModuleRoulette() {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = "MODULES...";

    const pool = Object.keys(MODULES);
    if(pool.length === 0) pool.push('block_v1');

    const winnerKey = pool[Math.floor(Math.random() * pool.length)];
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90;

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : pool[Math.floor(Math.random() * pool.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', MODULES[key].rarity || 'common');
        
        const m = MODULES[key];
        const preview = document.createElement('div');
        const miniSize = 8;
        preview.style.cssText = `position:relative; width:${m.shape[0].length * miniSize}px; height:${m.shape.length * miniSize}px;`;
        
        for(let r=0; r<m.shape.length; r++) {
            for(let c=0; c<m.shape[0].length; c++) {
                if(m.shape[r][c] === 1) {
                     const b = document.createElement('div');
                     b.style.cssText = `position:absolute; left:${c*miniSize}px; top:${r*miniSize}px; width:${miniSize}px; height:${miniSize}px; background:${m.color}; border:1px solid #fff;`;
                     preview.appendChild(b);
                }
            }
        }
        cardDiv.appendChild(preview);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight;
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showModuleRouletteResult(winnerKey);
    }, 5500);
}

function showModuleRouletteResult(key) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    window.PLAYER.modules.push(key);
    title.innerHTML = `<span style="color:#2ecc71">NOUVEAU MODULE !</span>`;
    spawnConfetti(window.innerWidth/2, window.innerHeight/2);
    if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));

    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    const m = MODULES[key];
    document.getElementById('roulette-name').textContent = t(key+'_name');
    document.getElementById('roulette-rarity').textContent = m.rarity.toUpperCase();
    document.getElementById('roulette-rarity').style.color = RARITY_INFOS[m.rarity] ? RARITY_INFOS[m.rarity].color : '#fff';

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    
    const miniSize = 12;
    const rows = m.shape.length;
    const cols = m.shape[0].length;
    const offX = (64 - (cols*miniSize))/2;
    const offY = (64 - (rows*miniSize))/2;
    
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(m.shape[r][c] === 1) {
                ctx.fillStyle = m.color;
                ctx.fillRect(offX + c*miniSize, offY + r*miniSize, miniSize-1, miniSize-1);
            }
        }
    }

    const btn = document.querySelector('#roulette-result .pixel-btn');
    btn.textContent = t('awesome');
    btn.onclick = closeRoulette;
}

function startRoulette(isTutorial = false, isDefeat = false) {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = isDefeat ? "CONSOLATION..." : t('summoning');

    const pool = [];
    Object.keys(CARDS).forEach(k => {
        const r = CARDS[k].rarity;
        if(isTutorial && (r === 'legendary' || r === 'epic')) return;
        if(isDefeat && r !== 'common') return;
        const prob = RARITY_INFOS[r].prob;
        for(let i=0; i<prob; i++) pool.push(k);
    });

    if(pool.length === 0) pool.push('archer');

    const winnerKey = pool[Math.floor(Math.random() * pool.length)];
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90;

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : pool[Math.floor(Math.random() * pool.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', CARDS[key].rarity);
        const img = document.createElement('canvas');
        img.width = 48; img.height = 48;
        const ctx = img.getContext('2d');
        const s = SPRITE_CACHE[key];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 48, 48);
        cardDiv.appendChild(img);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight;
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showRouletteResult(winnerKey, isTutorial);
    }, 5500);
}

function showRouletteResult(key, isTutorial) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    const isNew = window.addCard(key, 1);
    
    if(isNew) {
        title.innerHTML = `<span style="color:#2ecc71">${t('awesome')}</span>`;
        spawnConfetti(window.innerWidth/2, window.innerHeight/2);
        if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));
    } else {
        title.innerHTML = `DOUBLON (+1)`;
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    }

    if(isTutorial) {
        window.PLAYER.tutorial_complete = true;
        title.innerHTML = `<span style="color:#2ecc71">CADEAU !</span>`;
    }

    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    document.getElementById('roulette-name').textContent = t(key+'_name');
    const rData = CARDS[key];
    document.getElementById('roulette-rarity').textContent = rData.rarity.toUpperCase();
    document.getElementById('roulette-rarity').style.color = RARITY_INFOS[rData.rarity].color;

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    const s = SPRITE_CACHE[key];
    if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 64, 64);

    if(rData.rarity === 'legendary') {
        if(AUDIO.isOn) AUDIO.playSFX('legendary');
        c.style.animation = 'pop 0.5s infinite alternate';
    } else { c.style.animation = 'none'; }

    const btn = document.querySelector('#roulette-result .pixel-btn');
    if(window.PLAYER.pending_roulette) {
        btn.textContent = "ENCORE UNE !";
    } else {
        btn.textContent = t('awesome');
    }
    btn.onclick = closeRoulette;
}

function closeRoulette() {
    if(window.PLAYER.pending_roulette) {
        window.PLAYER.pending_roulette = false;
        saveData();
        startRoulette();
        return;
    }
    document.getElementById('roulette-modal').style.display='none';
}

function startSkinRoulette() {
    const modal = document.getElementById('roulette-modal');
    const tape = document.getElementById('roulette-tape');
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');

    modal.style.display = 'flex';
    resultDiv.style.display = 'none';
    tape.style.transition = 'none';
    tape.style.transform = 'translateX(0px)';
    tape.innerHTML = '';
    title.textContent = "SELECTION...";

    const allSkins = Object.keys(SKINS);
    const winnerKey = allSkins[Math.floor(Math.random() * allSkins.length)];
    
    const WIN_INDEX = 45;
    const TOTAL_ITEMS = 55;
    const CARD_WIDTH = 90; 

    for(let i=0; i < TOTAL_ITEMS; i++) {
        let key = (i === WIN_INDEX) ? winnerKey : allSkins[Math.floor(Math.random() * allSkins.length)];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'roulette-card';
        cardDiv.setAttribute('data-rarity', 'epic');
        
        const skinData = SKINS[key];
        const preview = document.createElement('div');
        preview.style.cssText = `width:48px; height:48px; background:${skinData.bg}; border:2px solid #fff; box-shadow:0 0 5px rgba(0,0,0,0.5);`;
        cardDiv.appendChild(preview);
        tape.appendChild(cardDiv);
    }

    const jitter = Math.floor(Math.random() * 60) - 30;
    const targetPos = (WIN_INDEX * CARD_WIDTH) + (CARD_WIDTH/2) + jitter;
    const centerOffset = document.querySelector('.roulette-container').clientWidth / 2;
    const finalTranslate = -(targetPos - centerOffset);

    tape.offsetHeight; 
    if(AUDIO.isOn) AUDIO.playSFX('spawn');

    setTimeout(() => {
        tape.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        tape.style.transform = `translateX(${finalTranslate}px)`;
        let ticks = 0;
        const tickInt = setInterval(() => {
            ticks++;
            if(ticks > 25) clearInterval(tickInt);
            if(AUDIO.isOn) AUDIO.playSFX('tick');
        }, 150 + (ticks*10));
    }, 100);

    setTimeout(() => {
        showSkinResult(winnerKey);
    }, 5500);
}

function showSkinResult(key) {
    const resultDiv = document.getElementById('roulette-result');
    const title = document.getElementById('roulette-title');
    
    const isNew = !window.PLAYER.unlockedSkins.includes(key);
    
    if(isNew) {
        window.PLAYER.unlockedSkins.push(key);
        title.innerHTML = `NOUVEAU SKIN !`;
        spawnConfetti(window.innerWidth/2, window.innerHeight/2);
        if(AUDIO.isOn) AUDIO.playMusic('victory', () => AUDIO.playMusic('menu'));
    } else {
        window.PLAYER.gold += 50;
        title.innerHTML = `DOUBLON (+50 Or)`;
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    }
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();

    resultDiv.style.display = 'flex';
    document.getElementById('roulette-name').textContent = SKINS[key].name;
    document.getElementById('roulette-rarity').textContent = "ARENA";
    document.getElementById('roulette-rarity').style.color = "#fff";

    const c = document.getElementById('roulette-canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0,0,64,64);
    ctx.fillStyle = SKINS[key].bg;
    ctx.fillRect(0,0,64,64);
}

window.closeRoulette = closeRoulette;

function spawnConfetti(x, y) {
    const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
    for(let i=0; i<30; i++) {
        const div = document.createElement('div');
        div.style.cssText = `position:fixed; left:${x}px; top:${y}px; width:6px; height:6px; background:${colors[Math.floor(Math.random()*colors.length)]}; z-index:500; pointer-events:none;`;
        document.body.appendChild(div);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        
        let t = 0;
        const loop = () => {
            t += 0.05;
            vx *= 0.95;
            vy += 0.5; // gravity
            div.style.left = (parseFloat(div.style.left) + vx) + 'px';
            div.style.top = (parseFloat(div.style.top) + vy) + 'px';
            
            if(t < 2.0) requestAnimationFrame(loop);
            else div.remove();
        };
        requestAnimationFrame(loop);
    }
}

// --- END OF js/ui/roulette.js ---

// --- START OF js/ui/skins.js ---

function openGachaDraw() {
    if(!window.PLAYER) return;
    if(window.PLAYER.gems < 10) { showNotif("ARÈNES", "Pas assez de gemmes !"); return; }
    window.PLAYER.gems -= 10;
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startSkinRoulette();
}

function renderSkins() {
    const l = document.getElementById('skin-list');
    if(!l) return;
    l.innerHTML = '';
    if(!window.PLAYER) return;
    
    Object.keys(SKINS).forEach(key => {
        if(window.PLAYER.unlockedSkins.includes(key)) {
            const isActive = window.PLAYER.currentSkin === key;
            const d = document.createElement('div');
            d.className = 'skin-item ' + (isActive?'active':'');
            const icon = `<div style="width:20px; height:20px; background:${SKINS[key].bg}; border:1px solid white;"></div>`;
            d.innerHTML = `${icon} <span style="flex:1;">${SKINS[key].name}</span> ${isActive ? `<img src="${ICONS.check}" class="pixel-icon">` : ''}`;
            d.onclick = () => {
                window.PLAYER.currentSkin = key;
                if(AUDIO.isOn) AUDIO.playSFX('spawn');
                saveData();
                if(window.updateMetaUI) window.updateMetaUI();
            };
            l.appendChild(d);
        }
    });
}

window.openGachaDraw = openGachaDraw;
function closeSkinModal() { document.getElementById('skin-modal').style.display='none'; };
window.closeSkinModal = closeSkinModal;

// --- END OF js/ui/skins.js ---

// --- START OF js/ui/collection.js ---

function renderCollection() {
    const g = document.getElementById('collection');
    if(!g) return;
    
    // CONTEXT CHECK: Only run tutorials if the Deck tab is active
    const isDeckActive = document.getElementById('tab-deck').classList.contains('active');
    
    g.innerHTML = '';

    const rarityOrder = { legendary:0, epic:1, rare:2, common:3 };
    const sortedKeys = Object.keys(CARDS).sort((a,b) => {
        const inDeckA = window.PLAYER.deck.includes(a);
        const inDeckB = window.PLAYER.deck.includes(b);
        if(inDeckA && !inDeckB) return -1;
        if(!inDeckA && inDeckB) return 1;
        
        const rA = rarityOrder[CARDS[a].rarity];
        const rB = rarityOrder[CARDS[b].rarity];
        if(rA !== rB) return rA - rB;

        const hasA = window.hasCard(a);
        const hasB = window.hasCard(b);
        if(hasA && !hasB) return -1;
        if(!hasA && hasB) return 1;
        
        return 0;
    });

    renderDeckVisuals();

    let canUpgradeAny = false;
    let firstUpgradeable = null;

    sortedKeys.forEach(key => {
        const cardData = CARDS[key];
        const has = window.hasCard(key);
        const inDeck = window.PLAYER.deck.includes(key);

        const el = document.createElement('div');
        el.className = `pixel-card ${has?'':'locked'} ${inDeck?'in-deck':''}`;
        el.setAttribute('data-rarity', cardData.rarity);

        el.innerHTML = `
            <div class="card-cost">${cardData.cost}</div>
            <div class="card-name">${t(key+'_name')}</div>
        `;

        const c = document.createElement('canvas');
        c.width=64; c.height=64; c.className='card-preview';
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        const s = SPRITE_CACHE[key + '_blue_0'] || SPRITE_CACHE[key + '_blue'] || SPRITE_CACHE[key];
        if(s) ctx.drawImage(s,0,0,s.width,s.height,0,0,64,64);
        el.appendChild(c);

        if(has) {
            const lvl = window.getCardLevel(key);
            const count = window.getCardCount(key);
            
            const lvlBadge = document.createElement('div');
            lvlBadge.className = 'card-level';
            lvlBadge.innerHTML = `Lv.${lvl}`;
            el.appendChild(lvlBadge);

            if(lvl < UPGRADE_COSTS.length) {
                 const reqCards = UPGRADE_COSTS[lvl].cards;
                 const reqGold = UPGRADE_COSTS[lvl].gold;
                 
                 const progWrap = document.createElement('div');
                 progWrap.className = 'card-progress-wrap';
                 const pct = Math.min(100, (count / reqCards) * 100);
                 progWrap.innerHTML = `<div class="card-progress-fill" style="width:${pct}%"></div>`;
                 el.appendChild(progWrap);

                 if(count >= reqCards && window.PLAYER.gold >= reqGold) {
                     const upBtn = document.createElement('div');
                     upBtn.className = 'upgrade-btn-mini';
                     upBtn.innerHTML = 'UP !';
                     upBtn.onclick = (e) => { e.stopPropagation(); upgradeCard(key); };
                     el.appendChild(upBtn);
                     canUpgradeAny = true;
                     if(!firstUpgradeable) firstUpgradeable = el;
                 }
            } else {
                 const maxLbl = document.createElement('div');
                 maxLbl.style.cssText = "position:absolute; bottom:10px; width:100%; text-align:center; font-size:0.5rem; color:#f1c40f;";
                 maxLbl.innerHTML = "MAX";
                 el.appendChild(maxLbl);
            }

            let pt;
            const start = () => { pt = setTimeout(() => showCardInfo(key), 500); };
            const end = () => { clearTimeout(pt); };

            el.addEventListener('mousedown', start);
            el.addEventListener('touchstart', start, {passive:true});
            el.addEventListener('mouseup', () => { end(); toggleDeck(key); });
            el.addEventListener('touchend', (e) => { e.preventDefault(); end(); toggleDeck(key); });
        }
        g.appendChild(el);
    });

    updateDeckStatus();

    // Deep Tutorials (Sequenced: Deck > LevelUp > Inspect)
    if(!isDeckActive) return; // Only show overlays if deck tab is active

    if(window.PLAYER.tutorial_deck_done) {
        if(canUpgradeAny && !window.PLAYER.tutorial_levelup) {
            // Step 1: Click the card
            showTutorialOverlay(firstUpgradeable, t('tuto_deck_levelup'), TUTORIALS.LEVEL_UP);
        } else if(window.PLAYER.tutorial_levelup && !window.PLAYER.tutorial_inspect && sortedKeys.length > 0) {
            // Inspect Tutorial
            const firstCard = g.querySelector('.pixel-card');
            if(firstCard) showTutorialOverlay(firstCard, t('tuto_inspect'), TUTORIALS.INSPECT);
        }
    }
}

function toggleDeck(key) {
    if(document.getElementById('card-info-overlay').style.display === 'flex') return;

    const idx = window.PLAYER.deck.indexOf(key);
    if(idx >= 0) {
        window.PLAYER.deck.splice(idx,1);
        if(AUDIO.isOn) AUDIO.playSFX('hit');
    } else {
        if(window.PLAYER.deck.length < 6) {
             window.PLAYER.deck.push(key);
             if(AUDIO.isOn) AUDIO.playSFX('spawn');
        } else {
             showNotif("DECK", t('notif_deck_full'));
        }
    }
    saveData();
    renderCollection(); 
}

function updateDeckStatus() {
    const count = window.PLAYER.deck.length;
    const sizeEl = document.getElementById('deck-size');
    const msgEl = document.getElementById('deck-valid-msg');

    if(sizeEl) sizeEl.innerHTML = count;

    if(count < 5) {
        if(msgEl) { msgEl.style.display = 'block'; msgEl.innerHTML = "MINIMUM 5 CARTES REQUISES"; msgEl.style.color = '#e74c3c'; }
        if(sizeEl) sizeEl.style.color = '#e74c3c';
    } else {
        if(msgEl) { msgEl.style.display = 'none'; }
        if(sizeEl) sizeEl.style.color = '#2ecc71';
    }
}

function showCardInfo(key) {
    // Action-Based Completion: If we open the info, we completed the "Level Up (Step 1)" or "Inspect" tutorial
    completeTutorial(TUTORIALS.LEVEL_UP);
    completeTutorial(TUTORIALS.INSPECT);

    const d = CARDS[key];
    const rarityColor = RARITY_INFOS[d.rarity].color;
    document.getElementById('info-card-name').innerHTML = `${t(key+'_name')}<br><span style="font-size:0.5rem; color:${rarityColor}">${d.rarity.toUpperCase()}</span>`;
    
    const statsHtml = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px; width:100%; font-size:0.6rem; text-align:left;">
            <div style="color:#2ecc71;"><img src="${ICONS.heart}" class="pixel-icon"> HP: ${d.hp||'-'}</div>
            <div style="color:#e74c3c;"><img src="${ICONS.sword}" class="pixel-icon"> DMG: ${d.dmg||'-'}</div>
            <div style="color:#3498db;"><img src="${ICONS.elixir}" class="pixel-icon"> ELIXIR: ${d.cost}</div>
            <div style="color:#f1c40f;"><img src="${ICONS.speed}" class="pixel-icon"> SPD: ${d.speed}</div>
        </div>
        <div style="margin-top:10px; padding:5px; border-top:2px dashed #555; font-style:italic; color:#bdc3c7;">
            "${t(key+'_desc')}"
        </div>
    `;
    
    document.getElementById('info-card-stats').innerHTML = statsHtml;
    document.getElementById('info-card-stats').style.background = "#222";
    document.getElementById('info-card-stats').style.border = "4px solid #fff";

    const c = document.getElementById('info-card-preview');
    c.style.imageRendering = "pixelated";
    const ctx = c.getContext('2d');
    c.width = 64; c.height = 64; 
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0,0,64,64);
    
    const s = SPRITE_CACHE[key+'_blue_0'] || SPRITE_CACHE[key+'_blue'] || SPRITE_CACHE[key];
    if(s) {
        const scale = Math.min(64 / s.width, 64 / s.height);
        const w = s.width * scale;
        const h = s.height * scale;
        const x = (64 - w) / 2;
        const y = (64 - h) / 2;
        ctx.drawImage(s, 0, 0, s.width, s.height, x, y, w, h);
    }

    const lvl = window.getCardLevel(key);
    const count = window.getCardCount(key);
    const costData = (lvl < UPGRADE_COSTS.length) ? UPGRADE_COSTS[lvl] : null;
    
    const existingBtn = document.getElementById('info-upgrade-btn');
    if(existingBtn) existingBtn.remove();

    if(costData && count >= costData.cards && window.PLAYER.gold >= costData.gold) {
        const upBtn = document.createElement('button');
        upBtn.id = 'info-upgrade-btn';
        upBtn.className = 'pixel-btn green';
        upBtn.style.cssText = "margin-top:20px; width:200px; animation: pop 0.5s infinite alternate;";
        upBtn.innerHTML = `UPGRADE<br><span style="font-size:0.6rem">${costData.cards} Cards + ${costData.gold} Gold</span>`;
        upBtn.onclick = (e) => {
            e.stopPropagation(); // Prevent closing the overlay when clicking upgrade
            upgradeCard(key);
            showCardInfo(key); 
        };
        const container = document.querySelector('#card-info-overlay > div');
        container.insertBefore(upBtn, container.lastElementChild);

        // Step 2: Trigger Upgrade Action Tutorial if not done
        if(!window.PLAYER[TUTORIALS.LEVEL_UP_ACTION]) {
            // Need a slight delay to ensure button is in DOM and layout
            setTimeout(() => {
                showTutorialOverlay(upBtn, t('tuto_levelup_action'), TUTORIALS.LEVEL_UP_ACTION);
            }, 200);
        }
    }

    document.getElementById('card-info-overlay').style.display = 'flex';
}

function upgradeCard(key) {
    if(!window.hasCard(key)) return;
    const currentLvl = window.getCardLevel(key);
    if(currentLvl >= UPGRADE_COSTS.length) {
         showNotif("UPGRADE", "Niveau Max atteint !");
         return;
    }
    
    const costData = UPGRADE_COSTS[currentLvl]; 
    const count = window.getCardCount(key);
    
    if(count >= costData.cards && window.PLAYER.gold >= costData.gold) {
        window.PLAYER.cards[key].count -= costData.cards;
        window.PLAYER.gold -= costData.gold;
        window.PLAYER.cards[key].level++;
        
        if(AUDIO.isOn) AUDIO.playSFX('legendary');
        
        // Action-Based Completion: We did the upgrade!
        completeTutorial(TUTORIALS.LEVEL_UP_ACTION);

        saveData();
        if(window.updateMetaUI) window.updateMetaUI();
        
        showLevelUpModal(key, window.PLAYER.cards[key].level);
    } else {
        showNotif("UPGRADE", "Ressources insuffisantes !");
    }
}

function showLevelUpModal(key, level) {
    let modal = document.getElementById('levelup-modal');
    if(!modal) {
        modal = document.createElement('div');
        modal.id = 'levelup-modal';
        modal.innerHTML = `
            <h1 style="color:#f1c40f; text-shadow:0 0 10px orange; font-size:2rem;">LEVEL UP!</h1>
            <div id="levelup-card-container">
                <canvas id="levelup-canvas" width="64" height="64"></canvas>
                <div style="position:absolute; top:-20px; left:-20px;" class="firework"></div>
                <div style="position:absolute; top:-20px; right:-20px;" class="firework" style="animation-delay:0.2s"></div>
                <div style="position:absolute; bottom:-20px; left:-20px;" class="firework" style="animation-delay:0.4s"></div>
                <div style="position:absolute; bottom:-20px; right:-20px;" class="firework" style="animation-delay:0.6s"></div>
            </div>
            <h2 id="levelup-title" style="color:white; margin:10px;">NAME Lv.X</h2>
            <div id="levelup-stats" style="color:#2ecc71; font-size:0.8rem; line-height:1.5;">STATS UP!</div>
            <button class="pixel-btn" onclick="document.getElementById('levelup-modal').style.display='none'">CONTINUER</button>
        `;
        document.body.appendChild(modal);
    }
    
    const canvas = document.getElementById('levelup-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,64,64);
    const s = SPRITE_CACHE[key];
    if(s) ctx.drawImage(s,0,0,s.width,s.height,0,0,64,64);
    
    document.getElementById('levelup-title').innerHTML = `${t(key+'_name')} Lv.${level}`;
    
    // Show stat increase
    const prevStats = getUnitStats(key, level-1);
    const newStats = getUnitStats(key, level);
    
    let statText = "";
    if(prevStats.hp) statText += `HP: ${prevStats.hp} -> ${newStats.hp} (+10%)<br>`;
    if(prevStats.dmg) statText += `DMG: ${prevStats.dmg} -> ${newStats.dmg} (+10%)<br>`;
    
    document.getElementById('levelup-stats').innerHTML = statText;
    
    modal.style.display = 'flex';
}

window.upgradeCard = upgradeCard;

// --- END OF js/ui/collection.js ---

// --- START OF js/ui/shop.js ---

function checkShopRefresh() {
    const now = SYSTEM.Time.now();
    const FIVE_MIN = 5 * 60 * 1000;
    
    if(!window.PLAYER) return;
    if(!window.PLAYER.shop_rotation) window.PLAYER.shop_rotation = { last_refresh: 0, cards: [], bought: [false,false,false] };

    if(now - window.PLAYER.shop_rotation.last_refresh > FIVE_MIN) {
        window.PLAYER.shop_rotation.last_refresh = now;
        window.PLAYER.shop_rotation.bought = [false, false, false];
        window.PLAYER.shop_rotation.cards = [];
        
        const cardKeys = Object.keys(CARDS);
        const modKeys = Object.keys(MODULES);

        for(let i=0; i<3; i++) {
            const isModule = Math.random() < 0.3; 
            if(isModule && modKeys.length > 0) {
                 const k = modKeys[Math.floor(Math.random() * modKeys.length)];
                 window.PLAYER.shop_rotation.cards.push(k);
            } else {
                 const k = cardKeys[Math.floor(Math.random() * cardKeys.length)];
                 window.PLAYER.shop_rotation.cards.push(k);
            }
        }
        saveData(true); // Skip UI update to prevent recursion loop
    }
}

function renderRotatingShop() {
    checkShopRefresh();
    const container = document.getElementById('shop-rotation');
    if(!container) return;
    container.innerHTML = '';
    
    const diff = SYSTEM.Time.now() - window.PLAYER.shop_rotation.last_refresh;
    const remaining = Math.max(0, (5 * 60 * 1000) - diff);
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    
    const header = document.createElement('div');
    header.style.cssText = "width:100%; text-align:center; color:#f1c40f; font-size:0.7rem; margin-bottom:10px;";
    header.innerHTML = `OFFRES FLASH: ${min}:${sec.toString().padStart(2,'0')}`;
    container.appendChild(header);
    
    if(window.shopTimer) clearTimeout(window.shopTimer);
    window.shopTimer = setTimeout(renderRotatingShop, 1000);

    window.PLAYER.shop_rotation.cards.forEach((key, idx) => {
        const bought = window.PLAYER.shop_rotation.bought[idx];
        
        let data, typeName, price, name;
        if(MODULES[key]) {
            data = MODULES[key];
            typeName = "MODULE";
            price = data.price;
            name = t(key+'_name');
        } else {
            data = CARDS[key];
            typeName = "UNIT";
            price = 100;
            if(data.rarity === 'rare') price = 300;
            if(data.rarity === 'epic') price = 1000;
            if(data.rarity === 'legendary') price = 4000;
            name = t(key+'_name');
        }

        const div = document.createElement('div');
        div.className = 'shop-item';
        if(bought) div.style.opacity = '0.5';
        
        const rarityIcon = {
            common:`<img src="${ICONS.rarity_common}" class="pixel-icon">`, 
            rare:`<img src="${ICONS.rarity_rare}" class="pixel-icon">`, 
            epic:`<img src="${ICONS.rarity_epic}" class="pixel-icon">`, 
            legendary:`<img src="${ICONS.rarity_legendary}" class="pixel-icon">`
        }[data.rarity] || `<img src="${ICONS.rarity_common}" class="pixel-icon">`;
        
        let btnHtml = '';
        if(bought) {
            btnHtml = `<span style="color:#2ecc71; font-size:0.6rem;">ACHETÉ</span>`;
        } else {
            btnHtml = `<button class="pixel-btn blue" onclick="window.buyDaily(${idx}, '${key}', ${price})" style="font-size:0.6rem; padding:5px 10px;">${price}Gold</button>`;
        }

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:1.2rem;">${rarityIcon}</span>
                <div style="display:flex; flex-direction:column; align-items:flex-start;">
                    <div style="font-weight:bold;">${name}</div>
                    <div style="font-size:0.5rem; color:#aaa;">${typeName} | ${data.rarity.toUpperCase()}</div>
                </div>
            </div>
            ${btnHtml}
        `;
        
        setupLongPress(div, () => {
            if(MODULES[key]) showModuleInfo(key);
            else showCardInfo(key);
        });

        container.appendChild(div);

        // Tutorial Trigger on first item
        if(idx === 0 && window.PLAYER && !window.PLAYER['tutorial_shop_inspect']) {
            setTimeout(() => {
                showTutorialOverlay(div, t('tuto_shop_inspect'), 'tutorial_shop_inspect');
            }, 500);
        }
    });
}

function setupLongPress(element, callback) {
    let timer;
    const start = () => { timer = setTimeout(callback, 500); };
    const end = () => { clearTimeout(timer); };
    
    element.addEventListener('mousedown', start);
    element.addEventListener('touchstart', start, {passive:true});
    element.addEventListener('mouseup', end);
    element.addEventListener('touchend', end);
    element.addEventListener('mouseleave', end);
}

function buyDaily(idx, key, price) {
    if(window.PLAYER.gold >= price) {
        window.PLAYER.gold -= price;
        window.PLAYER.shop_rotation.bought[idx] = true;
        
        if(MODULES[key]) {
            window.PLAYER.modules.push(key);
            showNotif("BOUTIQUE", `+1 Module: ${t(key+'_name')}`);
        } else {
            addCard(key, 1);
            showNotif("BOUTIQUE", `+1 ${t(key+'_name')}`);
        }
        
        if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
        saveData();
        renderRotatingShop(); 
        if(window.updateMetaUI) window.updateMetaUI(); // refresh gold
    } else {
        showNotif("BOUTIQUE", t('notif_gold'));
    }
}

function renderShop() {
    // Add IAP Buttons dynamically if not present
    const shopTab = document.getElementById('tab-shop');
    let iapContainer = document.getElementById('iap-container');
    
    if(!iapContainer && shopTab) {
        iapContainer = document.createElement('div');
        iapContainer.id = 'iap-container';
        iapContainer.style.cssText = "width:90%; border-bottom: 2px dashed #555; padding-bottom: 20px; margin-bottom: 20px; text-align:center; display:flex; flex-direction:column; gap:10px; align-items:center;";
        
        iapContainer.innerHTML = `
            <div style="display:flex; gap:10px; width:100%; justify-content:center;">
                <button class="pixel-btn green" onclick="buyIAP('gems_20')" style="flex:1;">
                    <span>20 <img src="${ICONS.gem}" class="pixel-icon"></span><br>
                    <span style="font-size:0.6rem;">0.99€</span>
                </button>
                <button class="pixel-btn red" onclick="buyIAP('no_ads')" style="flex:1;">
                    <span>NO ADS</span><br>
                    <span style="font-size:0.6rem;">4.99€</span>
                </button>
            </div>

            <button class="pixel-btn purple" onclick="openChest()" style="width:100%; max-width:300px;">
                <span data-lang="open_chest">COFFRE MYSTÈRE</span><br>
                <span style="font-size:0.7rem; color:#f1c40f;">1000 <img src="${ICONS.gold}" class="pixel-icon"></span>
            </button>
            
            <button class="pixel-btn blue" onclick="openModuleChest()" style="width:100%; max-width:300px;">
                <span data-lang="open_module_chest">COFFRE MODULES</span><br>
                <span style="font-size:0.7rem; color:#f1c40f;">500 <img src="${ICONS.gold}" class="pixel-icon"></span>
            </button>
        `;
        
        // Insert before the rotation container
        const rotation = document.getElementById('shop-rotation');
        // Remove old buttons if hardcoded in HTML (cleaning up from previous steps if needed)
        const oldBtns = shopTab.querySelector('div[style*="border-bottom"]');
        if(oldBtns && oldBtns !== rotation) oldBtns.remove();
        
        shopTab.insertBefore(iapContainer, rotation);
    }

    renderRotatingShop();
    const l = document.getElementById('shop-list');
    if(l) l.innerHTML = ''; 
}

function buy(key, price) {
    if(window.PLAYER.gold >= price) {
        window.PLAYER.gold -= price;
        const isNew = addCard(key, 1);
        if(AUDIO.isOn) AUDIO.playSFX('spawn'); 
        saveData();
        showNotif("BOUTIQUE", isNew ? `${t(key+'_name')} Obtenu !` : `+1 ${t(key+'_name')}`);
    } else {
        showNotif("BOUTIQUE", t('notif_gold'));
    }
}

function buyIAP(sku) {
    showNotif("IAP", "Contacting Store...", () => {
        setTimeout(() => {
            if(sku === 'gems_20') {
                window.PLAYER.gems += 20;
                showNotif("SUCCESS", "+20 GEMMES !");
            }
            if(sku === 'no_ads') {
                window.PLAYER.no_ads = true;
                document.body.classList.add('no-ads');
                showNotif("SUCCESS", "PUBLICITÉS SUPPRIMÉES !");
            }
            saveData();
            if(window.updateMetaUI) window.updateMetaUI();
            if(window.AUDIO && window.AUDIO.isOn) window.AUDIO.playMusic('victory', () => window.AUDIO.playMusic('menu'));
        }, 1000);
    });
}

function openChest() {
    const PRICE = 1000;
    if(window.PLAYER.gold < PRICE) { showNotif("BOUTIQUE", t('notif_gold')); return; }

    window.PLAYER.gold -= PRICE;
    if(window.updateQuestProgress) window.updateQuestProgress('open_chest', 1);
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startRoulette();
}

function openModuleChest() {
    const PRICE = 500;
    if(window.PLAYER.gold < PRICE) { showNotif("BOUTIQUE", t('notif_gold')); return; }

    window.PLAYER.gold -= PRICE;
    if(window.updateQuestProgress) window.updateQuestProgress('open_chest', 1);
    saveData();
    if(window.updateMetaUI) window.updateMetaUI();
    startModuleRoulette();
}

function openFreeTutorialChest() {
    document.getElementById('game-over-modal').style.display='none';
    document.getElementById('game-view').style.display='none';
    document.getElementById('meta-view').classList.remove('hidden');
    startRoulette(true); // Tutorial mode
}

window.buyDaily = buyDaily;
window.buy = buy;
window.buyIAP = buyIAP;
window.openChest = openChest;
window.openModuleChest = openModuleChest;
window.openFreeTutorialChest = openFreeTutorialChest;

// --- END OF js/ui/shop.js ---

// --- START OF js/ui/leaderboard_ui.js ---

let drawer = {
    el: null,
    isOpen: false,
    startY: 0,
    currentY: 0,
    threshold: 50,
    active: false
};

function setupLeaderboardDrawer() {
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

// --- END OF js/ui/leaderboard_ui.js ---

// --- START OF js/ui/profile.js ---

function initProfile() {
    renderProfileDrawer();
    checkPostTutorialProfile();
}

function checkPostTutorialProfile() {
    // If tutorial is complete but nickname is still default "Player", open drawer
    if(window.PLAYER.tutorial_complete && window.PLAYER.nickname === 'Player') {
        setTimeout(() => {
            openProfileDrawer();
            showNotif("PROFIL", "Créez votre Pseudo !");
        }, 1000);
    }
}

function openProfileDrawer() {
    const drawer = document.getElementById('profile-drawer');
    const toggle = document.getElementById('profile-toggle');
    const overlay = document.getElementById('profile-overlay');
    if(drawer) {
        if(drawer.classList.contains('open')) {
            closeProfileDrawer();
            return;
        }
        drawer.classList.add('open');
        if(overlay) overlay.style.display = 'block';
        if(toggle) {
            // Move ribbon with drawer
            const w = drawer.getBoundingClientRect().width;
            toggle.style.transform = `translateX(-${w}px)`;
        }
        updateProfileUI();
    }
}
window.openProfileDrawer = openProfileDrawer;

function closeProfileDrawer() {
    const drawer = document.getElementById('profile-drawer');
    const toggle = document.getElementById('profile-toggle');
    const overlay = document.getElementById('profile-overlay');
    if(drawer) {
        drawer.classList.remove('open');
        if(overlay) overlay.style.display = 'none';
        if(toggle) toggle.style.transform = 'translateX(0)';
    }
}
window.closeProfileDrawer = closeProfileDrawer;

function updateProfileUI() {
    const p = window.PLAYER;
    
    // Nickname
    const nickInput = document.getElementById('profile-nick-input');
    if(nickInput) nickInput.value = p.nickname;
    
    // Price Button
    const btnNick = document.getElementById('btn-change-nick');
    if(btnNick) {
        if(p.free_nick_change) {
            btnNick.innerHTML = "GRATUIT";
            btnNick.className = "pixel-btn green";
        } else {
            btnNick.innerHTML = `<img src="${ICONS.gem}" class="pixel-icon"> 50`;
            btnNick.className = "pixel-btn purple";
        }
    }

    // Avatar Preview
    const avatarCanvas = document.getElementById('profile-avatar-preview');
    if(avatarCanvas) {
        const ctx = avatarCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0,0,64,64);
        const s = SPRITE_CACHE[p.avatar] || SPRITE_CACHE['knight'];
        if(s) ctx.drawImage(s, 0, 0, s.width, s.height, 0, 0, 64, 64);
    }
    
    // Country
    const flagDisplay = document.getElementById('profile-flag-display');
    if(flagDisplay) flagDisplay.innerHTML = p.country;
}

function changeNickname() {
    const nickInput = document.getElementById('profile-nick-input');
    const newNick = nickInput.value.trim();
    
    if(newNick.length < 3 || newNick.length > 12) {
        showNotif("ERREUR", "3 à 12 caractères !");
        return;
    }
    
    if(newNick === window.PLAYER.nickname) return;

    if(window.PLAYER.free_nick_change) {
        window.PLAYER.nickname = newNick;
        window.PLAYER.free_nick_change = false;
        saveData();
        updateProfileUI();
        showNotif("SUCCÈS", "Pseudo modifié !");
        if(AUDIO.isOn) AUDIO.playSFX('spawn');
    } else {
        if(window.PLAYER.gems >= 50) {
            window.PLAYER.gems -= 50;
            window.PLAYER.nickname = newNick;
            saveData();
            updateProfileUI();
            if(window.updateMetaUI) window.updateMetaUI(); // Update gems
            showNotif("SUCCÈS", "Pseudo modifié !");
            if(AUDIO.isOn) AUDIO.playSFX('spawn');
        } else {
            showNotif("ERREUR", "Pas assez de gemmes !");
        }
    }
}
window.changeNickname = changeNickname;

function setCountry(flag) {
    // Flag is now HTML string with img tag
    window.PLAYER.country = flag;
    saveData();
    updateProfileUI();
}
window.setCountry = setCountry;

function setAvatar(key) {
    window.PLAYER.avatar = key;
    saveData();
    updateProfileUI();
}
window.setAvatar = setAvatar;

function renderProfileDrawer() {
    // Check if drawer exists, if not create it
    if(document.getElementById('profile-drawer')) return;

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.id = 'profile-overlay';
    overlay.onclick = closeProfileDrawer;
    document.body.appendChild(overlay);

    const drawer = document.createElement('div');
    drawer.id = 'profile-drawer';
    
    drawer.innerHTML = `
        <div class="profile-content">
            <h2 style="color:#f1c40f; text-align:center; margin-top:0;">MON PROFIL</h2>
            
            <!-- AVATAR SECTION -->
            <div style="display:flex; flex-direction:column; align-items:center; margin-bottom:20px;">
                <canvas id="profile-avatar-preview" width="64" height="64" style="border:4px solid white; background:#222; margin-bottom:10px; transform:scale(1.5);"></canvas>
                <div style="font-size:0.6rem; color:#aaa;">AVATAR</div>
                <div id="avatar-selector" style="display:flex; gap:5px; margin-top:10px; overflow-x:auto; width:100%; padding-bottom:10px;">
                    <!-- Auto-filled -->
                </div>
            </div>

            <!-- NICKNAME SECTION -->
            <div style="background:rgba(0,0,0,0.3); padding:10px; border:2px solid #555; margin-bottom:20px;">
                <label style="font-size:0.6rem; color:#aaa;">PSEUDO</label>
                <div style="display:flex; gap:10px; margin-top:5px;">
                    <input type="text" id="profile-nick-input" style="width: 100%; flex:1; background:#222; border:2px solid #fff; color:white; padding:5px; font-family:inherit;" maxlength="12">
                </div>
                <button id="btn-change-nick" onclick="changeNickname()" style="width:100%; margin-top:10px; font-size:0.7rem; padding:10px;">GRATUIT</button>
            </div>

            <!-- COUNTRY SECTION -->
            <div style="background:rgba(0,0,0,0.3); padding:10px; border:2px solid #555;">
                <label style="font-size:0.6rem; color:#aaa;">PAYS</label>
                <div style="font-size:2rem; text-align:center; margin:10px;" id="profile-flag-display"><img src="${ICONS.flag}" class="pixel-icon"></div>
                <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:5px; max-height:150px; overflow-y:auto;">
                    ${getFlagOptions()}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(drawer);
    
    // Fill avatars
    const avatarContainer = drawer.querySelector('#avatar-selector');
    // Add default unit icons
    ['knight', 'archer', 'giant', 'skeleton', 'wizard', 'witch'].forEach(key => {
        const btn = document.createElement('div');
        btn.style.cssText = "width:40px; height:40px; border:2px solid #555; background:#222; flex-shrink:0; cursor:pointer; display:flex; justify-content:center; align-items:center;";
        const c = document.createElement('canvas'); c.width=32; c.height=32;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        // Wait for sprites to load? They should be loaded by now if initProfile is called in initApp
        setTimeout(() => {
             const s = SPRITE_CACHE[key];
             if(s) ctx.drawImage(s,0,0,s.width, s.height, 0,0,32,32);
        }, 100);
        btn.appendChild(c);
        btn.onclick = () => setAvatar(key);
        avatarContainer.appendChild(btn);
    });
}

function getFlagOptions() {
    // For now, replacing flags with generic icon + code is complex without more assets. 
    // I will use the generic flag icon + text code to adhere to "No Emoji" strictly.
    const flags = ['FR','US','GB','DE','ES','IT','BR','JP','KR','CN','RU','CA','AU','IN','EU'];
    return flags.map(f => {
        const html = `<img src="${ICONS.flag}" class="pixel-icon"> ${f}`;
        // Note: passing HTML string to setCountry needs to be handled carefully in updateProfileUI
        // But setCountry just stores string.
        // We need to pass the HTML string in the onclick using template literal carefully.
        // Escaping quote for onclick:
        const safeHtml = `<img src='${ICONS.flag}' class='pixel-icon'> ${f}`;
        return `<button onclick="setCountry(\`${safeHtml}\`)" style="font-size:0.8rem; background:none; border:none; cursor:pointer; color:white;">${safeHtml}</button>`;
    }).join('');
}

// --- END OF js/ui/profile.js ---

// --- START OF js/ui/meta.js ---

// Removed redundant 't' export to avoid collision/recursion with utils.js in bundle
// export function t(key) { return window.t(key); }

function updateAllText() {
    const lang = window.LANG || LANG;
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(TEXTS[lang][key]) el.textContent = TEXTS[lang][key];
    });
    renderCollection();
    renderShop();
    renderSkins();
    updateButtonLabels();
}

function updateButtonLabels() {
    const lang = window.LANG || LANG;
    const btnLang = document.getElementById('btn-lang');
    if(btnLang) btnLang.textContent = `LANG: ${lang.toUpperCase()}`;
    const btnTheme = document.getElementById('btn-theme');
    if(window.PLAYER && btnTheme) btnTheme.textContent = `THEME: ${window.PLAYER.settings.theme.toUpperCase()}`;
}

function updateMetaUI() {
    if(!window.PLAYER) return;
    const setText = (id, val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
    setText('ui-trophies', window.PLAYER.trophies);
    setText('ui-gold', window.PLAYER.gold);
    setText('ui-gems', window.PLAYER.gems);
    setText('shop-gold', window.PLAYER.gold);
    setText('skin-gems', window.PLAYER.gems);

    // Update compteur deck global
    const deckCount = document.getElementById('deck-size');
    if(deckCount) deckCount.textContent = window.PLAYER.deck.length;

    renderCollection();
    renderShop();
    renderSkins();
}

window.updateAllText = updateAllText;
window.updateButtonLabels = updateButtonLabels;
window.updateMetaUI = updateMetaUI;

// --- END OF js/ui/meta.js ---

// --- START OF js/ui/navigation.js ---

function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => {
            if(AUDIO.isOn) AUDIO.playSFX('spawn');
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.target);
            if(target) target.classList.add('active');

            // TUTO: KINGDOM
            if(btn.dataset.target === 'tab-kingdom') {
                if(window.PLAYER && !window.PLAYER.tutorial_kingdom_done) {
                    showNotif("TUTORIEL", t('tuto_kingdom'));
                    window.PLAYER.tutorial_kingdom_done = true;
                    saveData();
                }
                // Call global resize logic for kingdom
                if(typeof window.resizeKingdom === 'function') setTimeout(window.resizeKingdom, 50);
            }

            // TUTO: SKINS
            if(btn.dataset.target === 'tab-skins') {
                if(window.PLAYER && !window.PLAYER.tutorial_skins_done) {
                    showNotif("TUTORIEL", t('tuto_skins'));
                    window.PLAYER.tutorial_skins_done = true;
                    saveData();
                }
            }

            // TUTO: DECK
            if(btn.dataset.target === 'tab-deck') {
                if(window.PLAYER && !window.PLAYER.tutorial_deck_done) {
                    startDeckTutorial();
                }
            }
        };
    });
}

function startDeckTutorial() {
    showNotif("TUTORIEL DECK", t('tuto_deck_intro'), () => {
        showNotif("AMÉLIORATION", t('tuto_deck_levelup'), () => {
            showNotif("IA BRAIN", t('tuto_deck_brain'), () => {
                showNotif("BOUTIQUE", t('tuto_deck_shop'), () => {
                    if(window.PLAYER) {
                        window.PLAYER.tutorial_deck_done = true;
                        saveData();
                    }
                });
            });
        });
    });
}

function setupGlobalButtons() {
    // Bouton COMBAT
    const btnBattle = document.getElementById('btn-battle-start');
    if(btnBattle) btnBattle.onclick = () => {
        if(typeof window.startMatchmakingSequence === 'function') window.startMatchmakingSequence();
    };

    // Audio Toggles
    const handleAudioToggle = () => {
        if(AUDIO.ctx && AUDIO.ctx.state === 'suspended') AUDIO.ctx.resume();
        const isOn = AUDIO.toggle();
        const icon = isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`;
        const btnMenu = document.getElementById('btn-audio-toggle');
        const btnGame = document.getElementById('btn-audio-game');
        if(btnMenu) btnMenu.innerHTML = icon;
        if(btnGame) btnGame.innerHTML = icon;
        
        if(isOn) {
            const inGame = document.getElementById('game-view').style.display !== 'none';
            AUDIO.playMusic(inGame ? 'battle' : 'menu');
        } else {
            AUDIO.stopMusic();
        }
    };
    
    const btnAudioMenu = document.getElementById('btn-audio-toggle');
    if(btnAudioMenu) { btnAudioMenu.onclick = handleAudioToggle; btnAudioMenu.innerHTML = AUDIO.isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`; }
    const btnAudioGame = document.getElementById('btn-audio-game');
    if(btnAudioGame) { btnAudioGame.onclick = handleAudioToggle; btnAudioGame.innerHTML = AUDIO.isOn ? `<img src="${ICONS.sound_on}" class="pixel-icon">` : `<img src="${ICONS.sound_off}" class="pixel-icon">`; }

    // Close overlay on background click
    const overlay = document.getElementById('card-info-overlay');
    // Allow closing by clicking anywhere, not just background (per user request)
    // But we must prevent closing if clicking inside the upgrade button which triggers an action?
    // User asked "au moindre clic, peut importe où, l'annalyse se ferme".
    // However, if we click "Upgrade", we want the upgrade to happen, not just close.
    // The upgrade button has its own click listener which should handle the logic.
    // We just need to make sure we don't prevent that.
    if(overlay) overlay.onclick = (e) => { 
        // If clicking a button, let the button handle it (unless we want to close after?)
        // The upgrade button stops propagation, so this click listener won't fire for it.
        // So we can safely close on any click that bubbles up here.
        overlay.style.display = 'none'; 
    };
}

// --- END OF js/ui/navigation.js ---

// --- START OF js/game/kingdom.js ---

const KINGDOM = {
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

function initKingdom() {
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
        const cp = getPathControlPoint(castle, target, id); // pathId is effectively the target slotId for simple star topology
        if(Math.hypot(mx - cp.x, my - cp.y) < 30) {
            KINGDOM.drag.active = true;
            KINGDOM.drag.mode = 'path';
            KINGDOM.drag.target = id; // pathId
            KINGDOM.drag.original = { ...getKingdomData().paths[id] || {x:0, y:0} };
            KINGDOM.drag.offsetX = cp.x - mx; // offset from control point visual center
            KINGDOM.drag.offsetY = cp.y - my;
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
    else if(KINGDOM.drag.mode === 'path') {
        const id = KINGDOM.drag.target;
        const k = getKingdomData();
        
        // Calculate new Control Point absolute position
        const cpAbsX = mx + KINGDOM.drag.offsetX;
        const cpAbsY = my + KINGDOM.drag.offsetY;
        
        // We need to store the offset relative to the Midpoint of the two buildings
        const castle = getZoneCoords('castle');
        const target = getZoneCoords(id);
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
    else if(KINGDOM.drag.mode === 'building' || KINGDOM.drag.mode === 'path') {
        saveData();
    }
    
    KINGDOM.drag.active = false;
    KINGDOM.drag.sprite = null;
    KINGDOM.drag.target = null;
    KINGDOM.drag.mode = null;
}

function resizeKingdom() {
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

function collectKingdomGold() {
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

    const gradSky = ctx.createLinearGradient(0, 0, 0, horizonY);
    gradSky.addColorStop(0, "#3498db");
    gradSky.addColorStop(1, "#87ceeb");
    ctx.fillStyle = gradSky;
    ctx.fillRect(0,0,w, horizonY);

    ctx.fillStyle = "#5d6d7e";
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

    const gradG = ctx.createLinearGradient(0, horizonY, 0, h);
    gradG.addColorStop(0, "#27ae60");
    gradG.addColorStop(1, "#2ecc71");
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
        const s = (p.scale || 1) * 3; 
        
        let key = '';
        if(p.type === 0) key = 'prop_tree';
        else if(p.type === 1) key = 'prop_rock';
        else key = 'prop_bush';

        const sprite = SPRITE_CACHE[key];
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

    // Debug / Editor Visuals
    // if(KINGDOM.drag.active) { ... }

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
            
            if(s.state === 'dragged') {
                ctx.save();
                ctx.translate(s.x, s.y);
                ctx.scale(1.2, 1.2);
                ctx.drawImage(sprite, -16, -16, 32, 32);
                ctx.restore();
            } else {
                ctx.drawImage(sprite, s.x - 16, s.y - 16, 32, 32);
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
    const key = 'structure_' + type;
    const sprite = SPRITE_CACHE[key];
    
    if(sprite) {
        const scale = 5;
        const w = sprite.width * scale;
        const h = sprite.height * scale;
        
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(x, y, w/2, h/4, 0, 0, Math.PI*2);
        ctx.fill();

        ctx.drawImage(sprite, x - w/2, y - h + 10, w, h);
    }
}

function initKingdomSystem() {
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

// --- END OF js/game/kingdom.js ---

// --- START OF js/game/battle.js ---

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

function initGame() {
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

function resize() {
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
function startMatchmakingSequence() {
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

function launchGameView() {
    document.getElementById('game-view').style.display = 'flex';
    document.getElementById('game-over-modal').style.display = 'none';
    resize();
    window.GAME.isTutorial = false;
    startBattleEngine();
}

function startTutorialBattle() {
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

function startBattleEngine() {
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
function startDrag(e, idx, key) {
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

function togglePauseGame() { 
    const GAME = window.GAME;
    GAME.state = 'paused'; 
    GAME.pauseTimer = 30; 
    document.getElementById('pause-menu-overlay').style.display = 'flex'; 
}
window.togglePauseGame = togglePauseGame;

function resumeGame() { 
    const GAME = window.GAME;
    if(GAME.state === 'paused') { GAME.state = 'playing'; document.getElementById('pause-menu-overlay').style.display = 'none'; } 
}
window.resumeGame = resumeGame;

function surrenderGame() { 
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

function renderHand() {
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

function updateHandUI() {
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

function resetSelection() { selectedHandIdx = -1; };
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

function endGame(res) {
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

function exitBattle() {
    document.getElementById('game-view').style.display='none';
    document.getElementById('meta-view').classList.remove('hidden');
    document.getElementById('game-over-modal').style.display='none';
    if(AUDIO.isOn) AUDIO.playMusic('menu');
    if(window.updateMetaUI) window.updateMetaUI();
}
window.exitBattle = exitBattle;
window.startMatchmakingSequence = startMatchmakingSequence;

// --- END OF js/game/battle.js ---

// --- START OF js/window_expose.js ---
// Centralized Global Exposure to ensure HTML event handlers work

function exposeGlobals() {
    console.log("Exposing Globals...");
    
    // Game Logic
    window.startMatchmakingSequence = startMatchmakingSequence;
    window.togglePauseGame = togglePauseGame;
    window.resumeGame = resumeGame;
    window.surrenderGame = surrenderGame;
    window.exitBattle = exitBattle;
    window.startDrag = startDrag;
    
    // Brain
    window.openBrainModal = openBrainModal;
    window.closeBrainModal = closeBrainModal;
    
    // Kingdom
    window.collectKingdomGold = collectKingdomGold;
    window.resizeKingdom = resizeKingdom;
    
    // Notifications
    window.showNotif = showNotif;
    window.closeNotification = closeNotification;
    
    // Settings
    window.toggleSettings = toggleSettings;
    window.switchLanguage = switchLanguage;
    window.toggleDayNight = toggleDayNight;
    window.confirmReset = confirmReset;
    window.showConfirm = showConfirm;
    
    // Meta / UI
    window.updateAllText = updateAllText;
    window.updateButtonLabels = updateButtonLabels;
    window.updateMetaUI = updateMetaUI;
    
    // Skins
    window.openGachaDraw = openGachaDraw;
    // Manual fix for inline function in skins.js if needed, but let's expose specific one
    window.closeSkinModal = closeSkinModal || function() { document.getElementById('skin-modal').style.display='none'; };
    
    // Shop
    window.buyDaily = buyDaily;
    window.buy = buy;
    window.openChest = openChest;
    window.openModuleChest = openModuleChest;
    window.openFreeTutorialChest = openFreeTutorialChest;
    
    // Roulette
    window.closeRoulette = closeRoulette;
    
    // Collection
    window.upgradeCard = upgradeCard;

    // Quests
    if(typeof window.claimQuest === 'undefined') {
        // Will be defined by import, but ensure it's exposed if logic runs late
        // (Handled by module side effect mostly, but good to be safe)
    }
    
    // Core Helpers (often used in inline checks or console)
    window.addCard = addCard;
    window.hasCard = hasCard;
    window.getCardLevel = getCardLevel;
    window.getCardCount = getCardCount;

    console.log("Globals Exposed.");
}

// --- END OF js/window_expose.js ---

// --- START OF js/main.js ---

// Ensure globals are exposed immediately
exposeGlobals();

// Expose Tutorial helpers globally for modules that lack imports (like deck.js hack)
window.showTutorialOverlay = showTutorialOverlay;
window.TUTORIALS = TUTORIALS;

function initApp() {
    console.log("Initializing App...");
    
    initIcons(); // Generate Icons

    // 1. Init Systems
    initPlayer(); 
    initSprites();
    initGame();
    
    // 2. Load Data
    loadData();
    validateSaveData();

    // 2.1 Init Kingdom (After data load)
    initKingdomSystem();
    
    // 2.1 System (needs player)
    SYSTEM.init();

    // 3. UI
    setupNavigation();
    setupGlobalButtons();
    setupLeaderboardDrawer();
    initQuests();
    initProfile();

    // 4. Render
    applyTheme(); 
    updateAllText(); 
    updateMetaUI();

    // 5. Views
    const mmScreen = document.getElementById('matchmaking-screen');
    if(mmScreen) mmScreen.classList.add('hidden');
    const gameView = document.getElementById('game-view');
    if(gameView) gameView.style.display = 'none';
    const metaView = document.getElementById('meta-view');
    if(metaView) metaView.classList.remove('hidden');

    // Start Loops
    loopDeckVisuals();
    console.log("App Initialized.");
}

// Ensure init runs even if loaded late
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}

// --- END OF js/main.js ---
