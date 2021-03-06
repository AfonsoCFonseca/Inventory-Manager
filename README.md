# Inventory-Manager

### Overview ###

Inventory Manager written in React and TypeScript

An generic inventory for games, build around 3 types of items ( Armor, Potions and Weapons ), each item got some functionality, like use, delete, or equip. The inventory works with slots size ( resizable through interface or code ) and stacks size for each item ( with a limit of 64 per slot )

To help me build this tool, i've added dev toolbar with inputs ( buttons, logs and sliders ) for a quick development and a easy way to catch bugs.

### Structure ###

The main structure of the project consists in the Inventory Class, this class handles the slots size and the Item class
The Item is an abstract super class built to support the child classes Potion, Armor and Weapon

Each of this Items got generic specs refered on the interface ItemInterface, like type, quantity, delete function or use functions. Some of this interfaces are, sometimes, overridden by child classes

The child classes got some detailed information and funcionality , like the enumerator Potion_Type on the Potion class that details between ( health, mana or dexterity ) potion types or the overriden use( ) function on the class that simulates an attack, depending the weapon you got equipped

### State of art ###

The project is finished but there's a few things that could give more structure to the project, as :
 - Armor and Player class should have the position of the  piece of armor equipped
 - Player health, mana, armor
 - A relation with an external project/class like Enemy or Overworld
 - The code lacks consistency between Armor and Weapon class

### Screenshots ###

<p float="left">
  <img src='https://github.com/AfonsoCFonseca/Inventory-Manager/blob/master/screenshots/Screen Shot 2020-01-05 at 21.22.27.png'>
  <img src='https://github.com/AfonsoCFonseca/Inventory-Manager/blob/master/screenshots/Screen Shot 2020-01-06 at 23.27.07.png'>
</p>
<p float="left">
  <img src='https://github.com/AfonsoCFonseca/Inventory-Manager/blob/master/screenshots/Screen Shot 2020-01-14 at 23.27.07.png'>
  <img src='https://github.com/AfonsoCFonseca/Inventory-Manager/blob/master/screenshots/Screen Shot 2020-01-25 at 08.42.37.png'>
</p>
