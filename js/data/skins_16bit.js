export const SKINS_16BIT_DATA = {
    // --- ARENA SKINS ---
    arena: {
        forest_16bit: {
            name: "Forest 16-Bit",
            bg: "#27ae60",
            ground: "grass_16bit",
            liquid: "water_16bit",
            bridge: "bridge_16bit",
            music: 'battle',
            // Define the tile sprites directly here.
            // The sprite loader will need to pick these up.
            sprites: {
                grass_16bit: ["GDGD","DGDG","GDGD","DGDG"],
                water_16bit: ["AZAZ","ZAZA","AZAZ","ZAZA"],
                bridge_16bit: ["OOOO","OKOO","OOOO","OOKO"]
            }
        },
        lava_16bit: {
            name: "Magma 16-Bit",
            bg: "#c0392b",
            ground: "obsidian_16bit",
            liquid: "lava_16bit",
            bridge: "metal_16bit",
            music: 'battle',
            sprites: {
                obsidian_16bit: ["KIKIKI","IKIKIK","KIKIKI","IKIKIK"],
                lava_16bit: ["RXMX","XRXR","RXMX","XRXR"],
                metal_16bit: ["IIII","IKII","IIII","IIKI"]
            }
        }
    },

    // --- UNIT SKINS ---
    // These keys match the original unit keys (e.g., 'archer', 'knight')
    // The system will look for unlocked 16-bit skins for these units.
    units: {
        archer: {
            name: "Archer 16-Bit",
            // A slightly modified 'HD' version (using 'W' for highlights)
            sprite: [
                [".....II.....","....IYYI....","...IYYYYI...","...IYYYYI...","...ITTTTI...","..ITTTTTTI..","..ITTTTTTI..",".ITTTTTTTTI.","...WWWWWW...","...W.WW.W...","..W..WW..W..",".....WW....."],
                [".....II.....","....IYYI....","...IYYYYI...","...IYYYYI...","...ITTTTI...","..ITTTTTTI..","..ITTTTTTI..",".ITTTTTTTTI.","...WWWWWW...","..W..W..W...","...W...W....",".....WW....."]
            ]
        },
        knight: {
            name: "Knight 16-Bit",
            sprite: [
                [".....WW.....","....WWWW....","...IITTII...","..IIITTIII..",".IITTTTTTII.","..ITTTTTTI..",".IIIITTIIII.",".IIIITTIIII.","...IITTII...","...WWWWWW...","..WW.WW.WW..",".....WW....."],
                [".....WW.....","....WWWW....","...IITTII...","..IIITTIII..",".IITTTTTTII.","..ITTTTTTI..",".IIIITTIIII.",".IIIITTIIII.","...IITTII...","...WWWWWW...","..W..WW..W..",".....WW....."]
            ]
        },
        giant: {
            name: "Giant 16-Bit",
            sprite: [
                [".....HH.....","....HHHH....","...HHHHHH...","...HKHKHH...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","...HHHHHH...","...H.HH.H...","..HH....HH.."],
                [".....HH.....","....HHHH....","...HHHHHH...","...HKHKHH...","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","..ITTTTTTI..","...HHHHHH...","...H.HH.H...","..H..HH..H.."]
            ]
        }
    },

    // --- UI SKINS ---
    ui: {
        retro_hd: { name: "Retro HD", desc: "Sharper UI Borders" }
    },

    // --- DECK SKINS ---
    deck: {
        gold_trim: { name: "Gold Trim", desc: "Golden Card Borders" }
    }
};
