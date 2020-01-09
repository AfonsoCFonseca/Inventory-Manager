import { Item } from "../Item";
import { utils } from "../../../Utils";
import { inventory } from "../../../index";
import { axe, sword, gun, dagger, bow,Weapon_Type  } from './WeaponsArmory'

export interface WeaponInterface {
    weapon_type: Weapon_Type,
    durability: number,
    damage: number,
    range: number,
    speed: number
}


export class Weapon extends Item implements WeaponInterface{
    weapon_type: Weapon_Type;
    durability: number;
    damage: number;
    range: number;
    speed: number;

    constructor( position: number, weapon_type?:Weapon_Type ){
        super("weapon", position, 1);
        
        this.weapon_type = weapon_type || utils.randomInt(5, 1)
        this.imgSrc = this.getImageIcon();
        
        let currentWeapon = this.getWeaponStats();
        this.damage = currentWeapon.damage
        this.durability = currentWeapon.durability
        this.range = currentWeapon.range
        this.speed = currentWeapon.speed

        inventory.addItem(this);
    }
    

    use(){

    }
     /* 
    Goes to the armory of weapons and picks the desired WeaponInterface
    according the construction of thhis class
   */
    private getWeaponStats(): WeaponInterface{
        switch (this.weapon_type) {
            case 1:
                return sword
            case 2:
                return bow
            case 3:
                return dagger
            case 4:
                return gun
            case 5:
                return axe
        }
    }

    private getImageIcon(): string {
        switch (this.weapon_type) {
            case 1:
                return "sword.jpg";
            case 2:
                return "bow.jpg";
            case 3:
                return "dagger.jpg";
            case 4:
                return "gun.jpg";
            case 5:
                return "axe.jpg";
        }
      }
}