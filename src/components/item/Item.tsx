export interface ItemInterface {
  quantity: number;
  type: string;
  name: string;
  imgSrc: string;
  delete(): void;
}

export class Item implements ItemInterface {
  quantity: number;
  type: string;
  name: string;
  imgSrc: string;

  constructor(type: string, name: string, quantity?: number) {
    this.type = type;
    this.quantity = quantity || 1;
    this.name = name;
  }

  delete() {}

  use() {}
}
