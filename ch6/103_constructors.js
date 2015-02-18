'use strict';
//constructor can be called with 'new' word. An instance is created
function Rabbit(type) {
  this.type = type;
}
var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

//constructor has a prototype that's inherited by all instances
//adding a method to constructor becomes available to all instances
Rabbit.prototype.speak = function (line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");

//add 'teeth' property to Rabbit constructor
Rabbit.prototype.teeth = "small";
console.log("blackRabbit teeth are " + blackRabbit.teeth);
//override 'teeth' property by adding it directly to blackRabbit
blackRabbit.teeth = "long and sharp";
console.log("blackRabbit teeth are " + blackRabbit.teeth);

//default objects like Array also have a different toString() method
// then Object.prototype.toString();
console.log("Is Array.toString same as Object.prototype.toString()? ", Array.prototype.toString === Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

console.log("\n\njunk property becomes part of car object (enumerable)");
var car = {
  brand: "Honda",
  built: 2006
};

Object.prototype.junk = "whatever";
console.log("\n\nhiddenJunk property remains hidden in car object (non enumerable)");
Object.defineProperty(Object.prototype,
  "hiddenJunk",
  {enumerable: false, value: "HelloHiddenJunk"});
console.log("car.hiddenJunk: " + car.hiddenJunk);
for (var prop in car) {
  if (car.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log("\n\ncheck for own property only");
for (var pro in car) {
  if (car.hasOwnProperty(pro)) {
    console.log(pro);
  }
}

console.log("\n\nprototypeless objects don't carry over from prototype chain");
var map = Object.create(null);
map.pizza = 0.069;
console.log("toString" in map);
console.log("pizza" in map);