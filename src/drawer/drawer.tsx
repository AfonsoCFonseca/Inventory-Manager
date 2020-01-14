import * as React from "react";
import { Item } from "../components/item/Item";
import { Inventory } from "../components/inventory/Inventory";
import { utils } from "../Utils";
import { Weapon } from "../components/item/weapons/Weapon";

import { player } from "..";

export class Draw {
  static item(i: number, item: Item ): JSX.Element {
    let imageFile = item.imgSrc;
    let selected = item.selected ? "selected" : "";
    let equippedClass:string = item.equipped ? "equipped": "" 

    return (
      <div
        key={`inventory-slot-${i} `}
        className={`inventory-slot ${item.type} ${selected}`}
        onClick={() => item.itemSelected()}
      >
        <div className="stack">
          { equippedClass ? 
            <img className="equipped-style" src='../public/images/armorIcon.png'/>
            : null }
          <p className="quantity">{item.quantity}</p>
          <img className="icon" src={`../../public/images/${imageFile}`}></img>
          {/* <p className="item-name">{item.name}</p> */}
        </div>
      </div>
    );
  }

  static emptySlot(i: number): JSX.Element {
    return (
      <div key={`inventory-slot-${i} `} className="inventory-slot empty">
        <div className="stack">
          <p className="item-name">empty</p>
        </div>
      </div>
    );
  }
 /* 
   Returns different functions, texts and actions depending on thhe type of
   Item is being used
   */
  static selectedItemScreenButtons(inventory: Inventory): JSX.Element {
    let buttons: JSX.Element;
    switch (inventory.selectedItem.type) {
      case "potion":
        buttons = (
          <React.Fragment>
            <button onClick={() => inventory.selectedItem.use()}>Drink</button>
            <button>Inspect</button>
            <button
              onClick={() => inventory.removeItem(inventory.selectedItem)}
            >
              Delete
            </button>
          </React.Fragment>
        );
        break;
      case "weapon":
        buttons = (
          <React.Fragment>
            <button onClick={() => inventory.selectedItem.use()}>Attack</button>
            <button onClick={ () => player.equip( inventory.selectedItem as Weapon ) }>Equip</button>
            <button
              onClick={() => inventory.removeItem(inventory.selectedItem)}
            >
              Delete
            </button>
          </React.Fragment>
        );
        break;
      case "armor":
        buttons = (
          <React.Fragment>
            <button onClick={() => inventory.selectedItem.use()}>Use</button>
            <button>Equip</button>
            <button
              onClick={() => inventory.removeItem(inventory.selectedItem)}
            >
              Delete
            </button>
          </React.Fragment>
        );
        break;
    }

    return <div className="item-menu-buttons">{buttons}</div>;
  }
}
