import * as React from "react";
import * as ReactDOM from "react-dom";

import "../public/scss/style.scss";

import { Inventory } from "./components/inventory/Inventory";
import { Item } from "./components/item/Item";
import { Potion, Potion_Type } from "./components/item/potions/Potion";
import { Weapon } from "./components/item/weapons/Weapon"
import { Armor } from "./components/item/armor/Armor"
import { Player } from "./components/player/player"
import { utils } from "./Utils";

let slotsLength: number = 30;

export let inventory: Inventory;
export let player = new Player()
/* 
    When the Component mounts the DOM, it fills the inventory of random Items
    Log the number of items added to inventory
   */
function fillInventory(): void {
  for (let i = 0; i < slotsLength; i++) {
    if (i < 25) {
      addRandomItem()
    }
  }
}

/* 
    The main render of the page, sets on the element "example" the inventory, setup Div and
    the logs of each action
   */
ReactDOM.render(
  <div className="interface">
    <Inventory ref={el => (inventory = el)} slotsLength={slotsLength} />
    {drawSetupDiv()}
    <div className="logs"></div>
  </div>,
  document.getElementById("example")
);

fillInventory();


/* 
    Draws the setup on the render of the sliders and every developement buttons
   */
function drawSetupDiv(): JSX.Element {
  return (
    <div className="setup">
      <div className="slidecontainer">
        <input
          type="range"
          min="10"
          max="40"
          defaultValue={slotsLength}
          onChange={event =>
            changeInventorySlotSize(parseInt(event.target.value))
          }
          className="slider"
          id="slotRange"
        />
      </div>
      <div className="buttons">
        <button onClick={() => addRandomItem()}>Add Random</button>
        <button onClick={() => console.log( inventory.state )}>Log</button>
        <button onClick={() => clear()}>Clear</button>
      </div>
    </div>
  );
}

/* 
    Eveytime the range slider is moved the value of the slots size changes and
    renders the new inventory
   */
function changeInventorySlotSize(newLength: number): void {
  slotsLength = newLength;
  inventory.setSlotsLength(newLength);
}

/* 
    Functions call everytime an random Item need to be created
    it will randomize between Potio, Weapon or Armor
   */
function addRandomItem(): void {
  let randomItemType = utils.randomInt(3, 1);
  let stackSize = utils.randomInt(1, 10);
  let pos = inventory.getNextPositionAvailable();
  if (typeof pos == "number") {
    switch( randomItemType ){
      case 1: 
        new Potion( pos, stackSize);
      break;
      case 2: 
        new Weapon( pos );
      break;
      case 3:
        new Armor( pos );
      break;
    }
  }
}
/* 
    Clears the full inventory to an empty array
   */
function clear(): void {
  inventory.setSlots([]);
}
