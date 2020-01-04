import { Item } from "../Item";
import { Utils } from "../../../Utils";

export enum Potion_Type {
  Health = 1,
  Mana = 2
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

  constructor(
    potion_type: Potion_Type,
    quantity: number = 1,
    name: string = "name"
  ) {
    super("potion", name, quantity);

    this.potion_type = potion_type || Potion_Type.Health;
    this.imgSrc = this.getImageIcon();
  }

  public use(): void {
    switch (this.potion_type) {
      case 1:
        Utils.log("You healed for 20HP");
        break;
      case 2:
        Utils.log("You recovered 20 Points of Mana");
        break;
      case 3:
        Utils.log("You recovered 10 Points of Dexterity");
        break;
      default:
        this.throwError("No potion type selected");
    }
    Utils.log("Filled inventory with 10 potions");
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

  private throwError(error: string): never {
    Utils.log(error, "error");
    throw new Error(error);
  }
}
