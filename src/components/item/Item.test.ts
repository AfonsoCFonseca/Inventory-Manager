import "mocha";
import { expect, should } from "chai";

import { Item } from "./Item";
import { Potion } from "./potions/Potion";

// begin a test suite of one or more tests
describe("Item", () => {
  describe("New Item Class", () => {
    let item;
    before(function() {
      item = new Item("potion", "potion_name", 64);
    });

    beforeEach(function() {});

    it("ComponentDidMount", () => {
      expect(item).to.be.an("object");
    });
  });
});

// begin a test suite of one or more tests
describe("Potion", () => {
  describe("Nem Potion Class", () => {});
});
