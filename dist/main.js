!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),i=n(4);n(5);const o=n(9),a=n(11),s=n(12),l=n(15),c=n(14),u=n(1);let d=30;function p(){let e=u.utils.randomInt(3,1),n=u.utils.randomInt(1,10),r=t.inventory.getNextPositionAvailable();if("number"==typeof r)switch(e){case 1:new a.Potion(r,n);break;case 2:new s.Weapon(r);break;case 3:new l.Armor(r)}}t.player=new c.Player,i.render(r.createElement("div",{className:"interface"},r.createElement(o.Inventory,{ref:e=>t.inventory=e,slotsLength:d}),r.createElement("div",{className:"setup"},r.createElement("div",{className:"slidecontainer"},r.createElement("input",{type:"range",min:"10",max:"40",defaultValue:d,onChange:e=>(function(e){d=e,t.inventory.setSlotsLength(e)})(parseInt(e.target.value)),className:"slider",id:"slotRange"})),r.createElement("div",{className:"buttons"},r.createElement("button",{onClick:()=>p()},"Add Random"),r.createElement("button",{onClick:()=>console.log(t.inventory.state)},"Log"),r.createElement("button",{onClick:()=>void t.inventory.setSlots([])},"Clear"))),r.createElement("div",{className:"logs"})),document.getElementById("example")),function(){for(let e=0;e<d;e++)e<25&&p()}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.utils={log(e,t=""){let n=new Date;n=`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;let r=`<p class='message ${t}'>${n} - ${e}</p>`;var i=document.getElementsByClassName("logs")[0];i.innerHTML+=r,i.scrollTop=i.scrollHeight},capFirstLetter:e=>e?e.charAt(0).toUpperCase()+e.slice(1):"",randomInt:(e,t)=>Math.floor(Math.random()*(e-t+1))+t}},function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);t.Item=class{constructor(e,t,n){this.selected=!1,this.equipped=null,this.type=e,this.position=t,this.quantity=n||1}isLimitQuantity(e){return!(e&&this.quantity<e||this.quantity<1)}decrementQuantity(e){this.quantity--,0==this.quantity&&r.inventory.removeItem(this),r.inventory.setState({})}delete(){}use(){}itemSelected(){r.inventory.clearSelected(),this.selected=!0,r.inventory.setState({selectedItem:this})}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(6),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(e.i,i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a={};function s(e,t,n){for(var r=0;r<t.length;r++){var i={css:t[r][1],media:t[r][2],sourceMap:t[r][3]};a[e][r]?a[e][r](i):a[e].push(g(i,n))}}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,i;if(t.singleton){var o=h++;n=m||(m=l(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),e=n.base?e+n.base:e,t=t||[],a[e]||(a[e]=[]),s(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[e]||(a[e]=[]),s(e,t,n);for(var r=t.length;r<a[e].length;r++)a[e][r]();a[e].length=t.length,0===a[e].length&&delete a[e]}}}},function(e,t,n){(t=n(8)(!1)).push([e.i,"p{font-family:Verdana, Geneva, sans-serif}h3{font-family:Verdana, Geneva, sans-serif}button{cursor:pointer;border-radius:5px;margin-right:5px;margin-left:5px;background-color:#f8e5c5;color:#303030;font-size:13px;font-weight:bold}button:hover{background-color:#fff3dd}.interface{background-color:#fff6e6;position:absolute;height:100%}.interface>.logs{margin:20px;height:120px;background-color:white;border-radius:5px;border:1px solid #d1d1d1;padding:15px;overflow-y:scroll}.interface>.logs>.message{color:#303030;margin:0;margin-bottom:5px}.interface>.logs>.messagetype{color:red}.interface>.inventory{margin:20px;max-width:600px;background-color:#f8e5c5;padding:10px;border-radius:5px;border:1px solid #d1d1d1;height:320px}.interface>.inventory>.inventory-slot{width:50px;height:50px;padding:2px;display:inline-flex;flex-direction:column;margin:3px;border-radius:10px;border:2px #303030 solid;background-color:#6f6a61;cursor:pointer}.interface>.inventory>.inventory-slot:hover{border:2px #b8a994 solid;background-color:#c5c5c5}.interface>.inventory>.inventory-slot.empty{background-color:#fff3dd;font-weight:bold}.interface>.inventory>.inventory-slot.empty:hover{border:2px #706a61 solid}.interface>.inventory>.inventory-slot.equipped{background-color:red;border:2px red solid}.interface>.inventory>.inventory-slot.selected{background-color:white}.interface>.inventory>.inventory-slot>.stack{font-size:10px;height:100%;position:relative}.interface>.inventory>.inventory-slot>.stack>.equipped-style{width:15px;position:absolute;background-color:white;border-radius:25px;padding:1px;top:-6px;left:-6px;border:1px solid #303030}.interface>.inventory>.inventory-slot>.stack>p{position:absolute;margin:0;width:100%;height:100%}.interface>.inventory>.inventory-slot>.stack>.item-name{color:#303030;text-align:center;display:flex;align-items:center;justify-content:center;font-size:13px}.interface>.inventory>.inventory-slot>.stack>.quantity{display:flex;color:white;align-items:flex-end;text-align:right}.interface>.inventory>.inventory-slot>.stack>.icon{border-radius:10px}.interface .item-menu{width:100%;margin-top:15px;height:50px}.interface .item-menu>button{width:110px;height:25px}.interface .item-menu>h3{color:#303030;text-align:center;margin:0}.interface .item-menu>.item-menu-text{width:100%;text-align:center}.interface .item-menu>.item-menu-text>p{font-size:13px;color:#303030}.interface .item-menu>.item-menu-buttons{display:flex;justify-content:center;align-items:center}.interface>.setup{margin-left:20px;margin-right:20px}.interface>.setup>.buttons{margin-top:20px}.interface>.setup>.buttons>button{width:110px;height:45px}.interface>.setup .slidecontainer{width:100%}.interface>.setup .slidecontainer>p{color:#303030;margin-bottom:5px;margin-left:5px;font-size:12px}.interface>.setup .slidecontainer>.slider{-webkit-appearance:none;appearance:none;width:50%;height:15px;border-radius:5px;background:white;outline:none;opacity:0.7;-webkit-transition:0.2s;transition:opacity 0.2s;border:1px solid #d1d1d1}.interface>.setup .slidecontainer>.slider:hover{opacity:1}.interface>.setup .slidecontainer>.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#f8e5c5;border:1px solid #d1d1d1;cursor:pointer}.interface>.setup .slidecontainer>.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#f8e5c5;border:1px solid #d1d1d1;cursor:pointer}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var i=[].concat(e[r]);n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i)}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),i=n(10),o=n(1);class a extends r.Component{constructor(e){super(e),this.state={slots:[],equippedPostion:null,selectedItem:null,slotsLength:e.slotsLength}}componentDidMount(){}get slotsLength(){return this.state.slotsLength}get slots(){return this.state.slots}get selectedItem(){return this.state.selectedItem}setSlots(e){this.setState({slots:e})}setSlotsLength(e){this.setState({slotsLength:e})}addItem(e){if(this.isFull())return!1;{let t=this.state.slots;return t.push(e),this.setSlots(t),!0}}removeItem(e){let t=this.slots;t.splice(e.position,1),this.updatePositionOfItems(),this.selectedItem.equipped=!1,this.setState({slots:t,selectedItem:null})}updatePositionOfItems(){for(var e=0;e<this.slots.length;e++)this.slots[e].position=e}getNextPositionAvailable(){for(var e=0;e<this.slotsLength;e++)if(this.isEmpty(this.slots[e]))return e;return!1}clearSelected(){for(var e=0;e<this.slots.length;e++)this.slots[e].selected&&(this.slots[e].selected=!1)}isFull(){return this.state.slots.length>this.state.slotsLength}isEmpty(e){return void 0===e}drawInventory(){let e=[];for(let t=0;t<this.state.slotsLength;t++)this.state.slots[t]?e.push(i.Draw.item(t,this.state.slots[t])):e.push(i.Draw.emptySlot(t));return e}drawSelectedItemScreen(){return r.createElement("div",{className:"item-menu"},this.selectedItem?r.createElement(r.Fragment,null,r.createElement("div",{className:"item-menu-text"},r.createElement("p",null,r.createElement("b",null,"Type: "),o.utils.capFirstLetter(this.selectedItem.type),r.createElement("b",null," Sub-type: "),o.utils.capFirstLetter(this.selectedItem.name))),i.Draw.selectedItemScreenButtons(this)):r.createElement("h3",null,"Inventory Manager"))}render(){return r.createElement(r.Fragment,null,this.drawSelectedItemScreen(),r.createElement("div",{className:"inventory"},this.drawInventory()))}}t.Inventory=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),i=n(0);t.Draw=class{static item(e,t){let n=t.imgSrc,i=t.selected?"selected":"",o=t.equipped?"equipped":"";return r.createElement("div",{key:`inventory-slot-${e} `,className:`inventory-slot ${t.type} ${i}`,onClick:()=>t.itemSelected()},r.createElement("div",{className:"stack"},o?r.createElement("img",{className:"equipped-style",src:"../public/images/armorIcon.png"}):null,r.createElement("p",{className:"quantity"},t.quantity),r.createElement("img",{className:"icon",src:`../../public/images/${n}`})))}static emptySlot(e){return r.createElement("div",{key:`inventory-slot-${e} `,className:"inventory-slot empty"},r.createElement("div",{className:"stack"},r.createElement("p",{className:"item-name"},"empty")))}static selectedItemScreenButtons(e){let t;switch(e.selectedItem.type){case"potion":t=r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>e.selectedItem.use()},"Drink"),r.createElement("button",null,"Inspect"),r.createElement("button",{onClick:()=>e.removeItem(e.selectedItem)},"Delete"));break;case"weapon":t=r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>e.selectedItem.use()},"Attack"),r.createElement("button",{onClick:()=>i.player.equip(e.selectedItem)},"Equip"),r.createElement("button",{onClick:()=>e.removeItem(e.selectedItem)},"Delete"));break;case"armor":t=r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>e.selectedItem.use()},"Use"),r.createElement("button",null,"Equip"),r.createElement("button",{onClick:()=>e.removeItem(e.selectedItem)},"Delete"))}return r.createElement("div",{className:"item-menu-buttons"},t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),i=n(1),o=n(0);!function(e){e[e.Health=1]="Health",e[e.Mana=2]="Mana",e[e.Dexterity=3]="Dexterity"}(t.Potion_Type||(t.Potion_Type={}));class a extends r.Item{constructor(e,t=1,n){super("potion",e,t),this.potion_type=n||i.utils.randomInt(3,1),this.name=this.getName(),this.imgSrc=this.getImageIcon(),o.inventory.addItem(this)}use(){if(o.player.isFull(this.potion_type))return!0;switch(this.potion_type){case 1:this.value=20,i.utils.log("You healed for 20HP"),o.player.drink(this);break;case 2:this.value=50,i.utils.log("You recovered 50 Points of Mana"),o.player.drink(this);break;case 3:this.value=10,i.utils.log("You recovered 10 Points of Dexterity"),o.player.drink(this);break;default:this.throwError("No potion type selected")}console.log(this),this.decrementQuantity()}getImageIcon(){switch(this.potion_type){case 1:return"healthPotion.jpg";case 2:return"manaPotion.jpg";case 3:return"dextPotion.jpg"}}getName(){switch(this.potion_type){case 1:return"Health Potion";case 2:return"Mana Potion";case 3:return"Dexterity Potion"}}throwError(e){throw i.utils.log(e,"error"),new Error(e)}}t.Potion=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),i=n(1),o=n(0),a=n(13);class s extends r.Item{constructor(e,t){super("weapon",e,1),this.weapon_type=t||i.utils.randomInt(5,1),this.imgSrc=this.getImageIcon(),this.name=this.imgSrc.replace(/\.[^/.]+$/,"");let n=this.getWeaponStats();this.damage=n.damage,this.durability=n.durability,this.range=n.range,this.speed=n.speed,o.inventory.addItem(this)}use(){o.player.equip(this),o.player.attack()}getWeaponStats(){switch(this.weapon_type){case 1:return a.sword;case 2:return a.bow;case 3:return a.dagger;case 4:return a.gun;case 5:return a.axe}}getImageIcon(){switch(this.weapon_type){case 1:return"sword.jpg";case 2:return"bow.jpg";case 3:return"dagger.jpg";case 4:return"gun.jpg";case 5:return"axe.jpg"}}}t.Weapon=s},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Sword=1]="Sword",e[e.Bow=2]="Bow",e[e.Dagger=3]="Dagger",e[e.Gun=4]="Gun",e[e.Axe=5]="Axe"}(r=t.Weapon_Type||(t.Weapon_Type={})),t.axe={weapon_type:r.Axe,durability:120,damage:130,speed:80,range:4},t.gun={weapon_type:r.Gun,durability:120,damage:120,speed:80,range:30},t.sword={weapon_type:r.Sword,durability:100,damage:95,speed:60,range:5},t.bow={weapon_type:r.Bow,durability:100,damage:110,speed:65,range:25},t.dagger={weapon_type:r.Dagger,durability:90,damage:80,speed:50,range:3}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),i=n(0);t.Player=class{constructor(){this.health=100,this.mana=100,this.dexterity=10,this.strength=25,this.armor={weapon:null,head:"head",chest:"chest",legs:"legs",boots:"boots"}}attack(){let e=this.armor.weapon,t=this.calculateAttack(e.damage);r.utils.log(`Attacking with ${e.name} for ${t} with a range of ${e.range}`)}calculateAttack(e){return e*this.strength/10}drink(e){this.incrementStats(e.potion_type,e.value)}isFull(e){return 1==e&&this.health>=100?(r.utils.log("Your health is maxed out"),!0):2==e&&this.mana>=250&&(r.utils.log("Your mana is maxed out"),!0)}equip(e){"weapon"==e.type?(this.armor.weapon&&(this.armor.weapon.equipped=!1),this.armor.weapon=e):e.type,e.equipped=!0,i.inventory.setState({}),r.utils.log(`The ${e.name} equipped`)}incrementStats(e,t){switch(e){case 1:this.health+=t,r.utils.log("Health: "+this.health);break;case 2:this.mana+=t,r.utils.log("Mana: "+this.mana);break;case 3:this.dexterity+=t,r.utils.log("Dexterity: "+this.dexterity);break;default:r.utils.log("none of previous stats incrementStats()")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),i=n(1),o=n(16),a=n(0);var s=["belt","boots","chest","hands","head","legs","ring","shoulders"];class l extends r.Item{constructor(e){super("armor",e,1);let t=o.armorSet[this.checkAvailableArmorPieces()];this.name=t.name,this.armorValue=t.armorValue,this.durability=t.durability,this.weight=t.weight,this.imgSrc=`${this.name}.jpg`,a.inventory.addItem(this)}checkAvailableArmorPieces(){var e=i.utils.randomInt(s.length-1,1);let t=s[e];return s.splice(e,1),t}}t.Armor=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.armorSet={chest:{name:"chest",armorValue:100,durability:250,weight:15},ring:{name:"ring",armorValue:0,durability:0,weight:1},boots:{name:"boots",armorValue:50,durability:100,weight:5},belt:{name:"belt",armorValue:30,durability:100,weight:3},legs:{name:"legs",armorValue:90,durability:250,weight:15},shoulders:{name:"shoulders",armorValue:70,durability:200,weight:10},head:{name:"head",armorValue:80,durability:220,weight:10},hands:{name:"hands",armorValue:60,durability:190,weight:4}}}]);
//# sourceMappingURL=main.js.map