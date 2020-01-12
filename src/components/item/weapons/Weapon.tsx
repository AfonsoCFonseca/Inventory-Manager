import { Item } from "../Item";
import { utils } from "../../../Utils";
import { inventory, player } from "../../../index";
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
    
     /* 
   Sets the Super Class Item, names the item, gets the correct path for the icon,
   gets the selected weapon WeaponStats from the script WeaponsArmory. This script keep record 
   of all weapons stats in JSON format. At the end of the constructor the item is added to the
   Inventory class
   */
    constructor( position: number, weapon_type?:Weapon_Type ){
        super("weapon", position, 1);
        
        this.weapon_type = weapon_type || utils.randomInt(5, 1)
        this.imgSrc = this.getImageIcon();
        this.name = this.imgSrc.replace(/\.[^/.]+$/, "")
        
        let currentWeapon = this.getWeaponStats();
        this.damage = currentWeapon.damage
        this.durability = currentWeapon.durability
        this.range = currentWeapon.range
        this.speed = currentWeapon.speed

        inventory.addItem(this);
    }
    

    public use(): void {
        player.attack()
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