import { utils } from "../../Utils";
import { Potion } from "../item/potions/Potion";

interface PlayerInterface {
  health: number;
  mana: number;
  dexterity: number;
  strength: number;
  armor: Equipment;
}

interface Equipment {
  weapon: string;
  head: string;
  chest: string;
  legs: string;
  boots: string;
}

export class Player implements PlayerInterface {
  health: number = 100;
  mana: number = 100;
  dexterity: number = 10;
  strength: number = 25;
  armor: Equipment = {
    weapon: "axe",
    head: "head",
    chest: "chest",
    legs: "legs",
    boots: "boots"
  };
  

  constructor() {}
  
  public attack(): void {
    console.log("Attacking")
  }

  /* 
    When Player consumes a potion from the inventory, reflects in 
    a stats modification
   */
  public drink( potion: Potion ): void {
    this.incrementStats( potion.potion_type,  potion.value )
  }
  
  /* 
   This functions checks everytime the player is about to consume a potion, 
   if the specific stats of the potion is needed to the player. If not, 
   it's not consumed and a log is sent to the console
   */
  public isFull( type:number ): boolean{
    if( type == 1 && this.health >= 100 ){// Health
      utils.log( "Your health is maxed out")
      return true
    } 
    else if ( type == 2 && this.mana >= 250 ){// Mana
      utils.log( "Your mana is maxed out")
      return true 
    } 
    else return false
  }

  public equip(): void {}

   /* 
  An generic function made for increment or decrement the stats of the Player,
  can be used for items, equips or weapons. It's written with a switch but
  it should be changed in the future for something abstract
   */
  private incrementStats( type: number, value:number ): void {
    switch( type ){
      case 1:
          this.health += value
          utils.log( "Health: " + this.health )
        break;
      case 2:
          this.mana += value
          utils.log( "Mana: " + this.mana )
        break;
      case 3:
        this.dexterity += value
        utils.log( "Dexterity: " + this.dexterity )
        break;
      default: 
        utils.log( "none of previous stats incrementStats()")
    }
  }
}
