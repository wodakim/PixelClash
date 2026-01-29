export const SKINS_16BIT_UNITS = {
    // COMMON
    archer: {
        name: "Archer 16-Bit",
        sprite: [
            [
                "..........IIII..........",
                "........IIYYYYII........",
                ".......IYYYYYYYYI.......",
                "......IYYYYYYYYYYI......",
                "......IYYYYYYYYYYI......",
                "......IITTTTTTTTII......",
                ".....ITTTTTTTTTTTTI.....",
                ".....ITTTTTTTTTTTTI.....",
                "....ITTTTTTTTTTTTTTI....",
                "....ITTTTTTTTTTTTTTI....",
                "....ITTTTTTTTTTTTTTI....",
                "...ITTTTTTTTTTTTTTTTI...",
                "....IIIIIIIIIIIIIIII....",
                "....IIIIIIIIIIIIIIII....",
                "....II..IIIIIIII..II....",
                "....II..IIIIIIII..II....",
                "...II...IIIIIIII...II...",
                "...II...IIIIIIII...II...",
                "........IIIIIIII........",
                "........IIIIIIII........",
                "........................",
                "........................",
                "........................",
                "........................"
            ],
            [
                "..........IIII..........",
                "........IIYYYYII........",
                ".......IYYYYYYYYI.......",
                "......IYYYYYYYYYYI......",
                "......IYYYYYYYYYYI......",
                "......IITTTTTTTTII......",
                ".....ITTTTTTTTTTTTI.....",
                ".....ITTTTTTTTTTTTI.....",
                "....ITTTTTTTTTTTTTTI....",
                "....ITTTTTTTTTTTTTTI....",
                "....ITTTTTTTTTTTTTTI....",
                "...ITTTTTTTTTTTTTTTTI...",
                "....IIIIIIIIIIIIIIII....",
                "....IIIIIIIIIIIIIIII....",
                "....II...II..II...II....",
                "....II...II..II...II....",
                "....II...II..II...II....",
                ".........II..II.........",
                ".........II..II.........",
                "........................",
                "........................",
                "........................",
                "........................",
                "........................"
            ]
        ]
    },
    knight: {
        name: "Knight 16-Bit",
        sprite: [
            [
                "..........IIII..........",
                "........IIIIIIII........",
                ".......IIIIIIIIII.......",
                "......IIIIIIIIIIII......",
                ".....IIIITTTTTTIIII.....",
                "....IIIIITTTTTTIIIII....",
                "...IIIIIITTTTTTIIIIII...",
                "..IIIIIITTTTTTTTIIIIII..",
                ".IIIIIITTTTTTTTTTIIIIII.",
                ".IIIIIITTTTTTTTTTIIIIII.",
                "..IIIIIITTTTTTTTIIIIII..",
                "...IIIIIITTTTTTIIIIII...",
                "....IIIIITTTTTTIIIII....",
                ".....IIIITTTTTTIIII.....",
                "......IIIIIIIIIIII......",
                "......IIIIIIIIIIII......",
                ".....II..II..II..II.....",
                ".....II..II..II..II.....",
                "....II...II..II...II....",
                ".........II..II.........",
                "........................",
                "........................",
                "........................",
                "........................"
            ],
            [
                "..........IIII..........",
                "........IIIIIIII........",
                ".......IIIIIIIIII.......",
                "......IIIIIIIIIIII......",
                ".....IIIITTTTTTIIII.....",
                "....IIIIITTTTTTIIIII....",
                "...IIIIIITTTTTTIIIIII...",
                "..IIIIIITTTTTTTTIIIIII..",
                ".IIIIIITTTTTTTTTTIIIIII.",
                ".IIIIIITTTTTTTTTTIIIIII.",
                "..IIIIIITTTTTTTTIIIIII..",
                "...IIIIIITTTTTTIIIIII...",
                "....IIIIITTTTTTIIIII....",
                ".....IIIITTTTTTIIII.....",
                "......IIIIIIIIIIII......",
                "......IIIIIIIIIIII......",
                ".....II...II..II..II....",
                ".....II...II..II..II....",
                "....II....II..II...II...",
                "..........II..II........",
                "........................",
                "........................",
                "........................",
                "........................"
            ]
        ]
    },
    giant: {
        name: "Giant 16-Bit",
        sprite: [[
            "..........HHHH..........",
            "........HHHHHHHH........",
            "......HHHHHHHHHHHH......",
            ".....HHHHHHHHHHHHHH.....",
            "....HHHKHKHHHHHKHKHH....",
            "....HHHKHKHHHHHKHKHH....",
            "...IIITTTTTTTTTTTTIII...",
            "..IIITTTTTTTTTTTTTTIII..",
            "..IIITTTTTTTTTTTTTTIII..",
            "..IIITTTTTTTTTTTTTTIII..",
            "..IIITTTTTTTTTTTTTTIII..",
            "..IIITTTTTTTTTTTTTTIII..",
            "...HHHHHHHHHHHHHHHHHH...",
            "...HHHHHHHHHHHHHHHHHH...",
            "...H...HH......HH...H...",
            "...H...HH......HH...H...",
            "..HH...HH......HH...HH..",
            "..HH................HH..",
            ".HH..................HH.",
            "........................",
            "........................",
            "........................",
            "........................",
            "........................"
        ]]
    },
    // GENERIC TEMPLATE FOR OTHERS (To ensure visibility)
    goblin: { name: "Goblin 16-Bit", sprite: [createGenericSprite('G')] },
    spear_gob: { name: "Spear Gob 16-Bit", sprite: [createGenericSprite('S')] },
    bat: { name: "Bat 16-Bit", sprite: [createGenericSprite('B')] },
    minion: { name: "Minion 16-Bit", sprite: [createGenericSprite('M')] },
    bomber: { name: "Bomber 16-Bit", sprite: [createGenericSprite('O')] },
    musketeer: { name: "Musketeer 16-Bit", sprite: [createGenericSprite('U')] },
    valkyrie: { name: "Valkyrie 16-Bit", sprite: [createGenericSprite('V')] },
    hog: { name: "Hog 16-Bit", sprite: [createGenericSprite('H')] },
    barbarian: { name: "Barbarian 16-Bit", sprite: [createGenericSprite('A')] },
    wizard: { name: "Wizard 16-Bit", sprite: [createGenericSprite('W')] },
    miniteetra: { name: "Mini P.E.K.K.A 16-Bit", sprite: [createGenericSprite('P')] },
    baby_dragon: { name: "Baby Dragon 16-Bit", sprite: [createGenericSprite('D')] },
    witch: { name: "Witch 16-Bit", sprite: [createGenericSprite('I')] },
    ninja: { name: "Ninja 16-Bit", sprite: [createGenericSprite('N')] },
    paladin: { name: "Paladin 16-Bit", sprite: [createGenericSprite('L')] },
    golem: { name: "Golem 16-Bit", sprite: [createGenericSprite('E')] },
    teetra: { name: "P.E.K.K.A 16-Bit", sprite: [createGenericSprite('K')] },
    angel: { name: "Healer 16-Bit", sprite: [createGenericSprite('+')] },
    cannon: { name: "Cannon 16-Bit", sprite: [createGenericSprite('C')] },
    xbow: { name: "X-Bow 16-Bit", sprite: [createGenericSprite('X')] },
    fireball: { name: "Fireball 16-Bit", sprite: [createGenericSprite('F')] },
    lightning: { name: "Lightning 16-Bit", sprite: [createGenericSprite('Z')] },
    freeze: { name: "Freeze 16-Bit", sprite: [createGenericSprite('*')] }
};

function createGenericSprite(char) {
    // 24x24 Box with character
    // Using 'I' (Iron/Grey) as base, 'K' (Black) as border
    // If char is provided, we try to draw it simply in the center?
    // Actually, let's just make a solid textured box.
    const rowBorder = "........................";
    const rowFull   = "....KKKKKKKKKKKKKKKK....";
    const rowSide   = "....KIIIIIIIIIIIIIIK....";

    // We can't easily draw letters procedurally without a font map,
    // so we'll just make a distinct pattern for "Generic 16-bit"
    // Maybe a checkerboard
    const rowCheck1 = "....KIKIKIKIKIKIKIIK....";
    const rowCheck2 = "....KIIKIIKIIKIIKIIK....";

    let arr = [];
    for(let i=0; i<4; i++) arr.push(rowBorder);
    arr.push(rowFull);
    for(let i=0; i<14; i++) {
        if(i%2===0) arr.push(rowCheck1);
        else arr.push(rowCheck2);
    }
    arr.push(rowFull);
    for(let i=0; i<4; i++) arr.push(rowBorder);

    return arr;
}
