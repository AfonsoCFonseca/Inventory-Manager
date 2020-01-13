import { MouseEvent } from "react";
import { inventory } from "../../index";

export interface ItemInterface {
  quantity: number;
  type: string;
  imgSrc: string;
  position: number;
  equipped: boolean | null
  delete(): void;
  use(): void;
}

/* 
    This abstract class represents each Item that is inserted in the inventory. 
    Got only the common specifications of the Item that are created.
    It's used only for extension of child classes like Potions and Weapons
   */
export abstract class Item implements ItemInterface {
  quantity: number; //Units by Item with stack size limited to 64
  type: string; //What type represents, Potion, Weapon, Armor
  imgSrc: string; //name of the jpg file
  position: number; //the position represented on the inventory slots array
  selected: boolean = false;
  name: string;
  equipped: boolean | null = null // used only for weapons or armor

  constructor(type: string, position: number, quantity?: number) {
    this.type = type;
    this.position = position;
    this.quantity = quantity || 1;
  }

  /* 
    LimitQuantity is used the my the child class with the purpose of checking if it's
    reaching the last unit of the item, if so returns true. It's possible to send the value 
    of the units by parameter, if the user by choice decide to consume more then 1 unit
   */
  protected isLimitQuantity(specific?: number): boolean {
    if ((specific && this.quantity < specific) || this.quantity < 1)
      return false;
    else return true;
  }
  /* 
    Decrements the quantity of the item, where the default value will be 1, if no parameter was send
    Calls the function that deletes ( if needed ) the item from the inventory and setstate the class
    so it can render with the new values
   */
  protected decrementQuantity(specific?: number): void {
    this.quantity--;
    if (this.quantity == 0){
      inventory.removeItem(this);
    }
    inventory.setState({})
  }

  delete() {}

  use() {}

  /* 
    This function sets the clicked Item to the Item and Inventory class as selected item
    and then sets the state of Inventory, so it can renders the frame around the item 
   */
  itemSelected() {
    inventory.clearSelected();
    this.selected = true;
    inventory.setState({ selectedItem: this });
  }
}
