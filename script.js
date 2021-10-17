const weapons = require('./weapons.json');


const getRandom = (max) => {
    return Math.ceil(Math.random() * max);
}

const getEquipSlots = (numEquip) => {
    let equipSlots = ["sidearm"];

    if (numEquip != 1) {
        let sidearms = 1;
        let longarms = 0;
        let type = 0;

        for (let i = 0; i < numEquip; i++) {
           type = getRandom(2);

           if (type === 1) {
               if (sidearms === 2) {
                   equipSlots.push("longarm")
                   longarms += 1;
               } else {
                   equipSlots.push("sidearm");
                   sidearms += 1;
               }            
           }
           if (type === 2) {
                if (longarms === 2) {
                    equipSlots.push("sidearm")
                    sidearms += 1;
                } else {
                    equipSlots.push("longarm");
                    longarms += 1;
                }
            }
        }
    }
    return equipSlots;
}

const getWeaponType = (equipSlot) => {
    const sidearms = ["revolvers", "pistols", "sawed-off"];
    const longarms = ["repeaters", "rifles", "shotguns", "bows"];

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
    let equipSlots = getEquipSlots(numEquip);
    let equipment = [];
    let weapon = "";

    for (let i = 0; i < numEquip; i++) {
        weapon = getWeapon(getWeaponType(equipSlots[i]))

        // Prevent duplicates of longarm weapons
        while (equipSlots[i] === "longarm" && equipment.some(element => element === weapon)) {
            weapon = getWeapon(getWeaponType(equipSlots[i]))
        }

        equipment.push(weapon);
    }
    
    equipment.push(getWeapon("thrown"));
    equipment.push(getWeapon("melee"));

    return equipment;
}

console.log(buildLoadout());