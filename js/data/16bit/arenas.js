// 16-BIT ARENA SKINS (Detailed ASCII Patterns)
// Patterns use 4 chars per block to simulate higher resolution or more complexity

const TILE_SETS = {
    // FOREST
    grass_16bit: ["GGDG","DGGD","GGDG","DGGD"],
    water_16bit: ["AZAZ","ZAZA","BZBZ","ZBZB"],
    bridge_16bit: ["OOOO","OKOO","OOKO","OOOO"],

    // DESERT
    sand_16bit: ["YYXY","XYXY","YXYY","XYXY"],
    quicksand_16bit: ["XOXO","OXOX","XOXO","OXOX"],
    bone_bridge_16bit: ["WEWE","EKEW","WEWE","EKEW"],

    // SNOW
    snow_16bit: ["WWWW","EWEW","WEWE","WWWW"],
    ice_16bit: ["CCZC","ZCCZ","CCZC","ZCCZ"],
    ice_bridge_16bit: ["IBIB","BIKB","IBIB","BIKB"],

    // VOLCANO
    obsidian_16bit: ["KKKK","KIKI","KKKK","IKIK"],
    lava_16bit: ["RROR","ORRO","RROR","ORRO"],
    metal_bridge_16bit: ["IIII","IKII","IIII","IIKI"],

    // CYBER
    grid_16bit: ["KKCK","KCKK","KKCK","KCKK"],
    void_16bit: ["KBKB","BKBK","KBKB","BKBK"],
    neon_bridge_16bit: ["CCCC","CKKC","CCCC","CKKC"],

    // GRAVEYARD
    dirt_16bit: ["SKSK","KSKS","SKSK","KSKS"],
    water_dark_16bit: ["BKBK","KBKB","BKBK","KBKB"],
    stone_bridge_16bit: ["IIII","KIKI","IIII","KIKI"],

    // SPACE
    star_16bit: ["KAKA","AKAK","KAKA","AKAK"],
    void_space_16bit: ["KBKB","BKBK","KBKB","BKBK"],
    neon_bridge_space_16bit: ["CCCC","CKKC","CCCC","CKKC"],

    // BEACH
    gold_sand_16bit: ["YAYA","AYAY","YAYA","AYAY"],
    water_beach_16bit: ["AZAZ","ZAZA","AZAZ","ZAZA"],
    bridge_beach_16bit: ["OOOO","OKOO","OOOO","OOKO"]
};

export const SKINS_16BIT_ARENAS = {
    forest_16bit: {
        name: "Forest 16-Bit",
        bg: "#2ecc71", // Lighter green
        ground: "grass_16bit", liquid: "water_16bit", bridge: "bridge_16bit",
        sprites: TILE_SETS
    },
    desert_16bit: {
        name: "Desert 16-Bit",
        bg: "#f39c12",
        ground: "sand_16bit", liquid: "quicksand_16bit", bridge: "bone_bridge_16bit",
        sprites: TILE_SETS
    },
    snow_16bit: {
        name: "Frozen 16-Bit",
        bg: "#ecf0f1",
        ground: "snow_16bit", liquid: "ice_16bit", bridge: "ice_bridge_16bit",
        sprites: TILE_SETS
    },
    volcano_16bit: {
        name: "Volcano 16-Bit",
        bg: "#e74c3c",
        ground: "obsidian_16bit", liquid: "lava_16bit", bridge: "metal_bridge_16bit",
        sprites: TILE_SETS
    },
    cyber_16bit: {
        name: "Cyber 16-Bit",
        bg: "#34495e",
        ground: "grid_16bit", liquid: "void_16bit", bridge: "neon_bridge_16bit",
        sprites: TILE_SETS
    },
    graveyard_16bit: {
        name: "Cemetery 16-Bit",
        bg: "#2c3e50",
        ground: "dirt_16bit", liquid: "water_dark_16bit", bridge: "stone_bridge_16bit",
        sprites: TILE_SETS
    },
    space_16bit: {
        name: "Space 16-Bit",
        bg: "#000",
        ground: "star_16bit", liquid: "void_space_16bit", bridge: "neon_bridge_space_16bit",
        sprites: TILE_SETS
    },
    beach_16bit: {
        name: "Beach 16-Bit",
        bg: "#3498db",
        ground: "gold_sand_16bit", liquid: "water_beach_16bit", bridge: "bridge_beach_16bit",
        sprites: TILE_SETS
    }
};
