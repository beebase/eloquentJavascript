'use strict';
// add method to an object
var rabbit = {};
rabbit.speak = function (line) {
  console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

// 'this' word refers to the object that calls the function;
function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Whatever");
fatRabbit.speak("Yeah");

//send object to a function with apply(Obj,[]) or call(Obj, "..")
speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");

// Object.prototype is the root of the prototype chain
console.log("{} has a prototype? ", Object.getPrototypeOf({}) === Object.prototype);
console.log("Object.prototype has prototype? ", Object.getPrototypeOf(Object.prototype));

//functions have Function.prototype
console.log("isNan() has Function.prototype? ",
  Object.getPrototypeOf(isNaN) === Function.prototype,
  Object.getPrototypeOf(isNaN));
//arrays have Array.prototype
console.log("An array has Array.prototype? ",
  Object.getPrototypeOf([]) === Array.prototype,
  Object.getPrototypeOf([]));

//add prototype with Object.create();
var protoRabbit = {
  speak: function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE");
