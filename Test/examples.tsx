import * as React from "react";

export interface InvetorySlot { 
    size: number
    name: string
}

export class Inventory extends React.Component<InvetorySlot, {}>{
    size: number
    name: string

    constructor( props: InvetorySlot ){
        super( props )
        this.size = props.size
        this.name = props.name
    }

    render() {
        return <h1>Inventory { this.size }</h1>;
    }
}

//Interfaces
interface SquareConfig {
    color?: string; 
    width?: number;
    [propName: string]: any;
}

function createSquare( config: SquareConfig ): { color: string; area: number} {
    let newSquare = { color: 'white', area: 100 }
    if( config.color ){
        newSquare.color = config.color
    }
    if( config.width ){
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: "black" })


//Function Types
interface SearchFunction {
    ( source: string, substring: string ): boolean
}

let mySearch: SearchFunction
mySearch = function( src, sub ){
    let result = src.search( sub )
    return result > -1
}



//CLOCK CLASS INTERFACE ADN CONSTRUCTOR
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
    whatTime(): string
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    h: number
    m: number

    constructor(h: number, m: number) { 
        this.h = h
        this.m = m
    }
    tick() {
        console.log("beep beep");
    }
    whatTime( ){
        return `Time: ${this.h} : ${this.m}`
    }
}
class AnalogClock implements ClockInterface {
    h: number
    m: number

    constructor(h: number, m: number) { 
        this.h = h
        this.m = m
    }
    tick() {
        console.log("tick tock");
    }
    whatTime( ){
        return `Time: ${this.h} : ${this.m}`
    }
    
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

digital.tick()
console.log( digital.whatTime() )




// ANIMAL CLASS

class Animal {
    name: string
    constructor( theName: string ){
        this.name = theName
    }
    move( distanceInMeters: number = 0){
        console.log( `${this.name} moved ${ distanceInMeters }` )
    }
}


class Snake extends Animal {
    constructor( name: string ){
        super( name )
    }
    move( distanceInMeters = 5 ){
        console.log("Slithering...");
        super.move( distanceInMeters )
    }
}

class Horse extends Animal {
    constructor( name: string ){
        super( name )
    }
    move( distanceInMeters = 45 ){
        console.log("Slithering...");
        super.move( distanceInMeters )
    }
}

var horse = new Horse( "cavalo" )
var cobra: Animal = new Snake( "cobra" )
horse.move( 45 )
cobra.move( 15 )

// PRIVATE AND PROTECTED CLASS
// private not access out of class scope
// protected accessible via subclasses
class Person {
    protected name: string;
    protected constructor( name: string ){
        this.name = name
    }
}

class Employee extends Person {
    private department: string;

    constructor( name: string, department: string ){
        super( name )
        this.department = department 
    }

    public getElevatorPitch(): string{
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}


let horward = new Employee( "Horward", "IT" )
horward.getElevatorPitch()



// GET & SET
const fullMaxLength = 10 

class Employee1 {
    private _fullName: string

    get fullName(): string{
        return this._fullName
    }

    set fullName( newName: string ) {
        if( newName && newName.length > fullMaxLength ){
            throw new Error("full name has max length of "+fullMaxLength )
        }

        this._fullName = newName
    }
}

let employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}


// CLASS GRID
class Grid {
    static origin = { x: 0, y: 0 }
    calculateDistanceFromOrigin( point: { x: number, y: number }){
        let xDist = ( point.x - Grid.origin.x );
        let yDist = ( point.y - Grid.origin.y );
        return Math.sqrt( xDist * xDist + yDist * yDist )
    }
    constructor( public scale: number ){

    }
}

let grid1 = new Grid( 1.0 )
let grid2 = new Grid( 5.0 )


// FUNCTION CARDS & DECK

interface Card {
    suits: string;
    card: number; 
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker( this: Deck ): () => Card;
}

let deck: Deck = {
    suits: ["hearth", "spades", "clubs", "diamonds"],
    cards: Array( 52 ),
    createCardPicker: function( this: Deck ){
        return () => {
            let pickedCard = Math.floor( Math.random() * 52)
            let pickedSuit = Math.floor( pickedCard / 13 ) 
    
            return { suits: this.suits[ pickedSuit ], card: pickedCard % 13}
        }
    }

}


let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suits);

//ENUMS
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    console.log( message )
}

respond("Princess Caroline", Response.Yes)


interface Inventory1 {
    returnInventoryItem( name: string ): string
}

class Inventory123 <Inventory1> {
    
    constructor(){

    }

    returnInventoryItem( name: string ): string {
        return "ya"
    }

}


var inv = new Inventory123()


function inventory456<T>(arg: T, arg2: number): T {
    let test1: string = "20"

    return arg   
}


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity( "123121" )