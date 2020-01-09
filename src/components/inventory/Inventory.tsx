import * as React from "react";

import { Potion, Potion_Type } from "../item/potions/Potion";
import { Item } from "../item/Item";
import { Draw } from "../../drawer/drawer";
import { utils } from "../../Utils";

interface IInventoryState {
  slots: Item[];
  slotsLength: number;
  selectedItem: Item;
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
      selectedItem: null,
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

  get selectedItem(): Item {
    return this.state.selectedItem;
  }

 /* 
    The setters from the core of the class. Slots are the structure of the class
    and the slotsLength stands for the size of the inventory
   */
  public setSlots(slots: Item[]): void {
    this.setState({ slots });
  }
  public setSlotsLength(newLength: number):void {
    this.setState({
      slotsLength: newLength
    });
  }

  /* 
    Receives any type of Item, check if the inventory is full, if not, pushes the 
    specific Item to the state.slots array and 
    sets the new State for the slots. If return false, then the inventory is full
   */
  public addItem(item: Item): boolean {
    if (!this.isFull()) {
      let newSlots = this.state.slots;
      newSlots.push(item);
      this.setSlots(newSlots);
      return true;
    } else return false;
  }

  /* 
    Removes the Item from array of slots and sets the selectedItem to null
    so the item-menu screen can refresh too 
   */
  public removeItem(item: Item): void {

      let newSlots = this.slots;
      newSlots.splice(item.position, 1);
      this.updatePositionOfItems()
      this.setState({
        slots: newSlots,
        selectedItem: null
      })

  }
   /* 
    This function updates the position of each Item inside the inventory
    this way it keeps the correct order when removeItem() is called
   */
  private updatePositionOfItems(): void {
    for (var i = 0; i < this.slots.length; i++) {
      this.slots[i].position = i
    }
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

  public clearSelected(): void {
    for (var i = 0; i < this.slots.length; i++) {
      if (this.slots[i].selected) this.slots[i].selected = false;
    }
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

    /* 
    Iterates every position of the @state.slots, depending on the item.type
    calls the specific function of the class Draw to return the JSX.Element 
   */
  private drawInventory(): Array<JSX.Element> {
    let allSlots: Array<JSX.Element> = [];
    for (let i = 0; i < this.state.slotsLength; i++) {
      if (this.state.slots[i] ) {
        allSlots.push(Draw.item(i, this.state.slots[i]));
      } else allSlots.push(Draw.emptySlot(i));
    }

    return allSlots;
  }

  drawSelectedItemScreen() {
    return (
      <div className="item-menu">
        {this.selectedItem ? (
          <React.Fragment>
            <div className="item-menu-text">
              <p>
                <b>Type: </b>
                {utils.capFirstLetter(this.selectedItem.type)}
                <b> Sub-type: </b>
                {utils.capFirstLetter(this.selectedItem.name)}
              </p>
            </div>
            <div className="item-menu-buttons">
              <button onClick={() => this.selectedItem.use()}>Use</button>
              <button onClick={ () => this.removeItem( this.selectedItem )}>Delete</button>
              <button>Inspect</button>
            </div>
          </React.Fragment>
        ) : (
          <h3>Inventory Manager</h3>
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.drawSelectedItemScreen()}
        <div className="inventory">{this.drawInventory()}</div>
      </React.Fragment>
    );
  }
}
