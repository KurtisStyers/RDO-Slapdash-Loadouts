const weapons = require('./weapons.json');


const getRandom = (max) => {
    return Math.ceil(Math.random() * max);
}

const getWeaponType = (equipSlot) => {
    let sidearms = ["revolvers", "pistols", "sawed-off"];
    let longarms = ["repeaters", "rifles", "shotguns", "bows"];

    if (equipSlot === "sidearm") {
        return sidearms[getRandom(sidearms.length) - 1];
    } else if (equipSlot === "longarm") {
        return longarms[getRandom(longarms.length) - 1];
    } else {
        return "Error - equipment slot invalid"
    }

}

const buildLoadout = () => {
    const numEquip = getRandom(weapons['MAX WEAPONS']);
    let mainHand = getWeaponType("sidearm");
    let offHand = getWeaponType("sidearm");
    let shoulder = getWeaponType("longarm");
    let back = getWeaponType("longarm");

    if (numEquip === 1) {
        equipment.push(weapons[mainHand][getRandom(weapons[mainHand].length) - 1]);
    } else if (numEquip === 2) {
        equipment.push(weapons[mainHand][getRandom(weapons[mainHand].length) - 1]);
        equipment.push(weapons[shoulder][getRandom(weapons[shoulder].length) - 1]);
    } else if (numEquip === 3) {
        equipment.push(weapons[mainHand][getRandom(weapons[mainHand].length) - 1]);
        equipment.push(weapons[shoulder][getRandom(weapons[shoulder].length) - 1]);
        equipment.push(weapons[offHand][getRandom(weapons[offHand].length) - 1]);
    } else if (numEquip === 4) {
        equipment.push(weapons[mainHand][getRandom(weapons[mainHand].length) - 1]);
        equipment.push(weapons[shoulder][getRandom(weapons[shoulder].length) - 1]);
        equipment.push(weapons[offHand][getRandom(weapons[offHand].length) - 1]);
        equipment.push(weapons[back][getRandom(weapons[back].length) - 1]);
    } else {
        return "Error - Number of MAX WEAPONS invalid";
    }
}