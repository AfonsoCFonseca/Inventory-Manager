import { WeaponInterface } from './Weapon'

export enum Weapon_Type {
    Sword = 1,
    Bow = 2,
    Dagger = 3,
    Gun = 4,
    Axe = 5
}

export let axe: WeaponInterface = {
    weapon_type: Weapon_Type.Axe,
    durability: 120,
    damage: 130,
    speed: 80,
    range: 4,
}

export let gun: WeaponInterface = {
    weapon_type: Weapon_Type.Gun,
    durability: 120,
    damage: 120,
    speed: 80,
    range: 30,
}

export let sword: WeaponInterface = {
    weapon_type: Weapon_Type.Sword,
    durability: 100,
    damage: 95,
    speed: 60,
    range: 5,
}

export let bow: WeaponInterface = {
    weapon_type: Weapon_Type.Bow,
    durability: 100,
    damage: 110,
    speed: 65,
    range: 25,
}

export let dagger: WeaponInterface = {
    weapon_type: Weapon_Type.Dagger,
    durability: 90,
    damage: 80,
    speed: 50,
    range: 3,
}