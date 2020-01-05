import * as React from "react";

import { Potion, Potion_Type } from "../item/potions/Potion";
import { Item } from "../item/Item";
import { Draw } from "../../drawer/drawer";
import { utils } from "../../utils";

interface IInventoryState {
  slots: Item[];
  slotsLength: number;
}

interface IInvetoryProps {
  slotsLength: number;
}

interface InventoryInterface {
  addItem(item: Item): void;
}

export class Inventory extends React.Component<IInvetoryProps, IInventoryState>
  implements InventoryInterface {
  /* 
    Sets the props slots to the state
   */
  constructor(props: IInvetoryProps) {
    super(props);
    this.state = {
      slots: [],
      slotsLength: props.slotsLength
    };
  }

  componentDidMount() {}

  get slotsLength(): number {
    return this.state.slotsLength;
  }
  get slots(): Item[] {
    return this.state.slots;
  }

  private setSlots(slots: Item[]): void {
    this.setState({ slots });
  }

  /* 
    This setter is the responsible for making the renderization of all the inventory
    for each time something is changed. Like new Items or removed ones
   */
  public setSlotsLength(newLength: number) {
    this.setState({
      slotsLength: newLength
    });
  }

  /* 
    Receives any type of Item, check if the inventory is full, if not, pushes the 
    specific Item to the state.slots array and 
    sets the new State for the slots. If return false, then the inventory is full
   */
  public addItem(item: Item) {
    if (!this.isFull()) {
      let newSlots = this.state.slots;
      newSlots.push(item);
      this.setSlots(newSlots);
      return true;
    } else return false;
  }

  public removeItem(item: Item): void {
    let newSlots = this.state.slots;
    if (item.quantity == 0) newSlots.splice(item.position, 1);
    this.setSlots(newSlots);
  }

  /* 
    Iterates all the slots of the inventory untill an empty slot is
    found or the index reach the end. Returns the index of the empty slot
    or a false statement if there's no slots available
   */
  public getNextPositionAvailable(): number | boolean {
    for (var i = 0; i < this.slotsLength; i++) {
      if (this.isEmpty(this.slots[i])) return i;
    }
    return false;
  }

  /* 
    Iterates every position of the @state.slots, depending on the item.type
    calls the specific function of the class Draw to return the JSX.Element 
   */
  private drawInventory(): Array<JSX.Element> {
    let allSlots: Array<JSX.Element> = [];
    for (let i = 0; i < this.state.slotsLength; i++) {
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
    return this.state.slots.length > this.state.slotsLength;
  }
  /* 
    Checks if the selected slot, on inventory, exists or is empty
   */
  private isEmpty(slot: Item): boolean {
    return slot === undefined;
  }

  render() {
    return <div className="inventory">{this.drawInventory()}</div>;
  }
}
