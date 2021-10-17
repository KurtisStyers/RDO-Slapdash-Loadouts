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

const getWeapon = (weaponType) => {
    return weapons[weaponType][getRandom(weapons[weaponType].length) - 1];
}

const buildLoadout = () => {
    const numEquip = getRandom(weapons['MAX WEAPONS']);
    let equipment = [];

    if (numEquip === 1) {
        equipment.push(getWeapon(getWeaponType("sidearm")));
    } else if (numEquip === 2) {
        equipment.push(getWeapon(getWeaponType("sidearm")));
        equipment.push(getWeapon(getWeaponType("longarm")));
    } else if (numEquip === 3) {
        equipment.push(getWeapon(getWeaponType("sidearm")));
        equipment.push(getWeapon(getWeaponType("longarm")));
        equipment.push(getWeapon(getWeaponType("sidearm")));
    } else if (numEquip === 4) {
        equipment.push(getWeapon(getWeaponType("sidearm")));
        equipment.push(getWeapon(getWeaponType("longarm")));
        equipment.push(getWeapon(getWeaponType("sidearm")));
        equipment.push(getWeapon(getWeaponType("longarm")));
    } else {
        return "Error - Number of MAX WEAPONS invalid";
    }

    return equipment;
}

console.log(buildLoadout());