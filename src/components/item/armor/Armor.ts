import { Item } from "../Item";
import { utils } from "../../../Utils";
import { armorSet  } from "../armor/ArmorArmory";
import { inventory, player } from "../../../index";

export interface ArmorInterface {
    name: string,
    armorValue: number,
    durability: number,
    weight: number
}

/* 
  this array controls if the item already exists in the Inventory,
  us purpose is to not let the item repeat himself
   */
var arrayOfUnusedItems: string[] = [ 
    'belt',
    'boots',
    'chest',
    'hands',
    'head',
    'legs',
    'ring',
    'shoulders',
]

export class Armor extends Item implements ArmorInterface {
    name: string
    armorValue: number
    durability: number
    weight: number
     
    constructor( position:number ){
        super( "armor", position, 1 )
        let currentArmorPiece = armorSet[this.checkAvailableArmorPieces()]
        this.name = currentArmorPiece.name
        this.armorValue = currentArmorPiece.armorValue
        this.durability = currentArmorPiece.durability
        this.weight = currentArmorPiece.weight
        this.imgSrc = `${this.name}.jpg`

        inventory.addItem( this )
    }

    /* 
    Makes a random pick on the array, selecting the armor
    piece selected, after, removes it from array.So it doesn't show repeated 
    on the inventory
   */
    checkAvailableArmorPieces( ): string {
        var pos = utils.randomInt(arrayOfUnusedItems.length-1, 1);
        let currentItem:string = arrayOfUnusedItems[pos]
        arrayOfUnusedItems.splice(pos, 1)
        return currentItem
    }
}