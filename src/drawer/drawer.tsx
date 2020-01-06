import * as React from "react";
import { Item } from "../components/item/Item";
import { utils } from "../Utils";

export class Draw {
  static item(i: number, item: Item): JSX.Element {
    let imageFile = item.imgSrc;
    let selected = item.selected ? "selected" : "";

    return (
      <div
        key={`inventory-slot-${i} `}
        className={`inventory-slot ${item.type} ${selected}`}
        onClick={() => item.itemSelected()}
      >
        <div className="stack">
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
}
