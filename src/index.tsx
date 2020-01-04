import * as React from "react";
import * as ReactDOM from "react-dom";

import "../public/scss/style.scss";

import { Inventory } from "./components/inventory/Inventory";
import { Potion, Potion_Type } from "./components/item/potions/Potion";
import { Utils } from "./Utils";

let inventory: any;

ReactDOM.render(
  <div className="interface">
    <Inventory ref={el => (inventory = el)} slots={[]} />
    <div className="buttons">
      <button onClick={() => addPotion()}>Add Potion</button>
    </div>
    <div className="logs"></div>
  </div>,
  document.getElementById("example")
);

var addPotion = function() {
  let potion = new Potion(Potion_Type.Health, 1);
  inventory.addItem(potion);
  Utils.log("Potion added to Inventory ");
};
