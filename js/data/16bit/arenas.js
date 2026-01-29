// 16-BIT ARENA SKINS (16x16 Resolution for Tile Width 16)
// Provides detailed terrain textures.

const TILE_SETS = {
    // FOREST
    grass_16bit: [
        "GGGGGDGGGGGDGGGG",
        "GDGGGGGGGDGGGGGG",
        "GGGGGGGGGGGGGGGG",
        "GGGGDGGGGGGGGDGG",
        "GGGGGGGGGGGGGGGG",
        "GGGDGGGGGGGDGGGG",
        "GGGGGGGGGGGGGGGG",
        "GGGGGGGGGGGGGGGG",
        "GGGGGDGGGGGDGGGG",
        "GDGGGGGGGDGGGGGG",
        "GGGGGGGGGGGGGGGG",
        "GGGGDGGGGGGGGDGG",
        "GGGGGGGGGGGGGGGG",
        "GGGDGGGGGGGDGGGG",
        "GGGGGGGGGGGGGGGG",
        "GGGGGGGGGGGGGGGG"
    ],
    water_16bit: [
        "AZAZAZAZAZAZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZAZBZAZAZBZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZBZAZAZAZBZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZAZAZAZAZAZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZAZAZAZAZAZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZAZBZAZAZBZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZBZAZAZAZBZAZAZ",
        "ZAZAZAZAZAZAZAZA",
        "AZAZAZAZAZAZAZAZ",
        "ZAZAZAZAZAZAZAZA"
    ],
    bridge_16bit: [
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO",
        "OOOOOOOOOOOOOOOO",
        "OKOKOKOKOKOKOKOO"
    ],

    // DESERT
    sand_16bit: [
        "YYYYXYYYYYYXYYYY",
        "YYXYYYYYYXYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYXYYYYYYXYYYY",
        "YYXYYYYYYXYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYXYYYYYYXYYYY",
        "YYXYYYYYYXYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYXYYYYYYXYYYY",
        "YYXYYYYYYXYYYYYY",
        "YYYYYYYYYYYYYYYY",
        "YYYYYYYYYYYYYYYY"
    ],
    quicksand_16bit: [
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX",
        "XOXOXOXOXOXOXOXO",
        "OXOXOXOXOXOXOXOX"
    ],
    bone_bridge_16bit: [
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW",
        "WEWEWEWEWEWEWEWE",
        "EKEKEKEKEKEKEKEW"
    ],

    // SNOW
    snow_16bit: [
        "WWWWWWWWWWWWWWWW",
        "WEWEWEWEWEWEWEWE",
        "WWWWWWWWWWWWWWWW",
        "EWEWEWEWEWEWEWEW",
        "WWWWWWWWWWWWWWWW",
        "WEWEWEWEWEWEWEWE",
        "WWWWWWWWWWWWWWWW",
        "EWEWEWEWEWEWEWEW",
        "WWWWWWWWWWWWWWWW",
        "WEWEWEWEWEWEWEWE",
        "WWWWWWWWWWWWWWWW",
        "EWEWEWEWEWEWEWEW",
        "WWWWWWWWWWWWWWWW",
        "WEWEWEWEWEWEWEWE",
        "WWWWWWWWWWWWWWWW",
        "EWEWEWEWEWEWEWEW"
    ],
    ice_16bit: [
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ",
        "CCZCCZCCZCCZCCZC",
        "ZCCZZCCZZCCZZCCZ"
    ],
    ice_bridge_16bit: [
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK",
        "IBIBIBIBIBIBIBIB",
        "BIBKBIBKBIBKBIBK"
    ],

    // VOLCANO
    obsidian_16bit: [
        "KKKKKIKIKKKKKIKI",
        "KIKIKKKKKIKIKKKK",
        "KKKKKIKIKKKKKIKI",
        "IKIKIKIKIKIKIKIK",
        "KKKKKIKIKKKKKIKI",
        "KIKIKKKKKIKIKKKK",
        "KKKKKIKIKKKKKIKI",
        "IKIKIKIKIKIKIKIK",
        "KKKKKIKIKKKKKIKI",
        "KIKIKKKKKIKIKKKK",
        "KKKKKIKIKKKKKIKI",
        "IKIKIKIKIKIKIKIK",
        "KKKKKIKIKKKKKIKI",
        "KIKIKKKKKIKIKKKK",
        "KKKKKIKIKKKKKIKI",
        "IKIKIKIKIKIKIKIK"
    ],
    lava_16bit: [
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO",
        "RRORRRORRRORRROR",
        "ORROORROORROORRO"
    ],
    metal_bridge_16bit: [
        "IIIIIIIIIIIIIIII",
        "IKIIIIKIIIIKIIII",
        "IIIIIIIIIIIIIIII",
        "IIKIIIIKIIIIKIII",
        "IIIIIIIIIIIIIIII",
        "IKIIIIKIIIIKIIII",
        "IIIIIIIIIIIIIIII",
        "IIKIIIIKIIIIKIII",
        "IIIIIIIIIIIIIIII",
        "IKIIIIKIIIIKIIII",
        "IIIIIIIIIIIIIIII",
        "IIKIIIIKIIIIKIII",
        "IIIIIIIIIIIIIIII",
        "IKIIIIKIIIIKIIII",
        "IIIIIIIIIIIIIIII",
        "IIKIIIIKIIIIKIII"
    ],

    // CYBER
    grid_16bit: [
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK",
        "KKCKKKCKKKCKKKCK",
        "KCKKKCKKKCKKKCKK"
    ],
    void_16bit: [
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK",
        "KBKBKBKBKBKBKBKB",
        "BKBKBKBKBKBKBKBK"
    ],
    neon_bridge_16bit: [
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC",
        "CCCCCCCCCCCCCCCC",
        "CKKCCKKCCKKCCKKC"
    ],

    // BEACH (Placeholder 16x16 expansion of simple patterns)
    gold_sand_16bit: Array(16).fill("YAYAAYAYYAYAAYAY"),
    water_beach_16bit: Array(16).fill("AZAZZAZAAZAZZAZA"),
    bridge_beach_16bit: Array(16).fill("OOOOKOOOOOOOKOOO"),

    // GRAVEYARD (Placeholder 16x16)
    dirt_16bit: Array(16).fill("SKSKKSKSSKSKKSKS"),
    water_dark_16bit: Array(16).fill("BKBKKBKBBKBKKBKB"),
    stone_bridge_16bit: Array(16).fill("IIIIKIKIIIIIKIKI"),

    // SPACE (Placeholder 16x16)
    star_16bit: Array(16).fill("KAKAAKAKKAKAAKAK"),
    void_space_16bit: Array(16).fill("KBKBKBKBBKBKKBKB"),
    neon_bridge_space_16bit: Array(16).fill("CCCCCKKCCCCCCKKC")
};

export const SKINS_16BIT_ARENAS = {
    forest_16bit: {
        name: "Forest 16-Bit",
        bg: "#2ecc71",
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
