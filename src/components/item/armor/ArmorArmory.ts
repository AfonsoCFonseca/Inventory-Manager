import { ArmorInterface } from "./Armor";

interface armorSetInterface {
    [ name: string ]: ArmorInterface
}

export let armorSet: armorSetInterface = {
    chest: {
        name: "chest",
        armorValue: 100,
        durability: 250,
        weight: 15,
    }
    ,
    ring: {
        name: "ring",
        armorValue: 0,
        durability: 0,
        weight: 1,
    },
    boots: {
        name: "boots",
        armorValue: 50,
        durability: 100,
        weight: 5,
    },
    belt: {
        name: "belt",
        armorValue: 30,
        durability: 100,
        weight: 3,
    },
    legs: {
        name: "legs",
        armorValue: 90,
        durability: 250,
        weight: 15,
    },
    shoulders: {
        name: "shoulders",
        armorValue: 70,
        durability: 200,
        weight: 10,
    },
    head: {
        name: "head",
        armorValue: 80,
        durability: 220,
        weight: 10,
    },
    hands: {
        name: "hands",
        armorValue: 60,
        durability: 190,
        weight: 4,
    }
}

