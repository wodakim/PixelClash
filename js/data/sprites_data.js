export const PALETTE = {
    '.':null,'K':'#000','W':'#fff','S':'#f1c27d','B':'#8e44ad','G':'#2ecc71',
    'D':'#27ae60','A':'#3498db','Z':'#2980b9','O':'#d35400','L':'#f39c12',
    'I':'#95a5a6','N':'#1abc9c','R':'#c0392b','Y':'#f1c40f','X':'#e67e22',
    'M':'#c0392b','E':'#bdc3c7','T':'#TEAM','V':'#8e44ad','F':'#e74c3c','C':'#0ff',
    'H':'#555', 'P':'#fd79a8', 'U':'#6c5ce7', 'J':'#ffeaa7', 'g':'#555',
    'Q':'#5d4037' // Brown
};

export const SPRITES_ASCII = {
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
