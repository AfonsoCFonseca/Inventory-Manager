import { Item } from "../Item";
import { utils } from "../../../Utils";
import { inventory, player } from "../../../index";

export enum Potion_Type {
  Health = 1,
  Mana = 2,
  Dexterity = 3
}

interface PotionInterface {
  potion_type: Potion_Type;
  name: string;
  imgSrc: string;
  use(): void;
}

export class Potion extends Item implements PotionInterface {
  potion_type: Potion_Type;
  name: string;
  imgSrc: string;
  value: number;

  /* 
    A new potion is composed by the type refered at @Potion_Type, the position 
    on the array of inventory.slots, the units of each item ( with a stack size 
      of 64 ) and the name of the item ( default value setted ).
    Gets the specific image from the class function and adds a new slot to the
    inventory function by using @addItem()
   */
  constructor(
    position: number,
    quantity: number = 1,
    potion_type?: Potion_Type
  ) {
    super("potion", position, quantity);

    this.potion_type = potion_type || utils.randomInt(3, 1);
    this.name = this.getName(); // If needed, can be named
    this.imgSrc = this.getImageIcon();

    inventory.addItem(this);
  }

  /* 
    Switch the case depending on the type of potion and logs the effect
    But first checks if the player is viable to use the potion
   */
  public use(): void | boolean {
    if( player.isFull( this.potion_type ) )
      return true
      
    switch (this.potion_type) {
      case 1:
        this.value = 20
        utils.log("You healed for 20HP");
        player.drink( this )
        break;
      case 2:
        this.value = 50
        utils.log("You recovered 50 Points of Mana");
        player.drink( this )
        break;
      case 3:
        this.value = 10 
        utils.log("You recovered 10 Points of Dexterity");
        player.drink( this )
        break;
      default:
        this.throwError("No potion type selected");
    }
    console.log(this);
    this.decrementQuantity();
  }

  private getImageIcon(): string {
    switch (this.potion_type) {
      case 1:
        return "healthPotion.jpg";
      case 2:
        return "manaPotion.jpg";
      case 3:
        return "dextPotion.jpg";
    }
  }
  private getName(): string {
    switch (this.potion_type) {
      case 1:
        return "Health Potion";
      case 2:
        return "Mana Potion";
      case 3:
        return "Dexterity Potion";
    }
  }

  private throwError(error: string): never {
    utils.log(error, "error");
    throw new Error(error);
  }
}
