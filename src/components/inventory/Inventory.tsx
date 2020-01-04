import * as React from "react";

import { Potion, Potion_Type } from "../item/potions/Potion";
import { Item } from "../item/Item";
import { Draw } from "../../drawer/drawer";
import { Utils } from "../../utils";

interface IInventoryState {
  slots: Item[];
}

interface IInvetoryProps {
  slots: Item[];
}

interface InventoryInterface {
  fillInventory(): void;
  addItem(item: Item): void;
}

export class Inventory extends React.Component<IInvetoryProps, IInventoryState>
  implements InventoryInterface {
  private filled_slots: number;
  private SLOT_MAX_SIZE = 30;

  /* 
    Sets the props slots to the state
   */
  constructor(props: IInvetoryProps) {
    super(props);
    this.state = {
      slots: props.slots
    };
  }

  componentDidMount() {
    this.fillInventory();
  }

  /* 
    When the Component mounts the DOM, it fills the inventory of random Items
    Log the number of items added to inventory
   */
  fillInventory(): void {
    let newSlots = [];
    for (let i = 0; i < this.SLOT_MAX_SIZE; i++) {
      if (i < 10) {
        this.filled_slots++;
        var randomPotionType = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let potion = new Potion(randomPotionType, 64);
        newSlots.push(potion);
      }
    }

    Utils.log("Filled inventory with 10 potions");
    this.setState({ slots: newSlots });
  }

  /* 
    Receives any type of Item, check if the inventory is full, if not, pushes the 
    specific Item to the state.slots array, increment 1 the filled_slots and 
    sets the new State for the slots
   */
  public addItem(item: Item): void {
    if (!this.isFull()) {
      let newSlots = this.state.slots;
      this.filled_slots++;
      newSlots.push(item);
      this.setState({ slots: newSlots });
    }
  }
  /* 
    Iterates every position of the @state.slots, depending on the item.type
    calls the specific function of the class Draw to return the JSX.Element 
   */
  private drawInventory(): Array<JSX.Element> {
    let allSlots: Array<JSX.Element> = [];
    for (let i = 0; i < this.SLOT_MAX_SIZE; i++) {
      if (this.state.slots[i] && this.state.slots[i].type == "potion") {
        allSlots.push(Draw.item(i, this.state.slots[i]));
      } else allSlots.push(Draw.emptySlot(i));
    }

    return allSlots;
  }
  /* 
    Checks if the inventory still have slots left to fill with items
   */
  private isFull(): boolean {
    return this.state.slots.length > this.SLOT_MAX_SIZE;
  }

  onClick(): void {}

  render() {
    return <div className="inventory">{this.drawInventory()}</div>;
  }
}
