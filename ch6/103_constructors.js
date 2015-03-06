'use strict';

function Rabbit(type) {
  this.type = type;
}

var blackRabbit = new Rabbit('black');
var fatRabbit = new Rabbit('fat');
console.log(fatRabbit.type);

Rabbit.prototype.speak = function (text) {
  console.log("The " + this.type + " rabbit says " + text);
};
fatRabbit.speak("sdfas");

Rabbit.prototype.teeth = "standard";
console.log(fatRabbit.teeth);

fatRabbit.teeth = "long";
console.log(fatRabbit.teeth);

console.log(Rabbit.toString());

var car = {
  brand: "Honda",
  built: 2005
};

Object.prototype.junk = "rootJunk";
console.log(car.junk);
Object.defineProperty(Object.prototype,
  "hiddenJunk",
  {enumerable: false, value: "hiddenJunk"});
console.log(car.hiddenJunk);
for (var p in car) {
  if (car.hasOwnProperty(p)) {
    console.log(p + ": " + car[p]);
  }
}

for (var pr in car) {
  if (car.hasOwnProperty(pr)) {
    console.log(">" + pr);
  }
}

var map = Object.create(null);
map.pizza = 0.004;
for (var prp in map) {
  if (map.hasOwnProperty(prp)) {
    console.log(">>" + prp);
  }
}