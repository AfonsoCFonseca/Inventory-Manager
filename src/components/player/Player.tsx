interface PlayerInterface {
  health: number;
  mana: number;
  dexterity: number;
  strength: number;
  armor: Equipiment;
}

interface Equipiment {
  weapon: string;
  head: string;
  chest: string;
  legs: string;
  boots: string;
}

class Player implements PlayerInterface {
  health: number = 100;
  mana: number = 100;
  dexterity: number = 10;
  strength: number = 25;
  armor: Equipiment = {
    weapon: "axe",
    head: "head",
    chest: "chest",
    legs: "legs",
    boots: "boots"
  };

  constructor() {}

  attack(): void {}

  retrieveStats(): void {}

  drink(): void {}

  equip(): void {}
}
