'use strict';
// add method to an object
var rabbit = {};
rabbit.speak = function (line) {
  console.log("Rabbit says " + line);
};
rabbit.speak("HeLLO");

function speak(line, line2) {
  console.log("The " + this.type + " Rabbit says " + line + "!. " + line2);
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("HIII");
fatRabbit.speak("HOOO");

speak.apply(whiteRabbit, ["ggg", "How are you"]);
speak.call(fatRabbit, "Oh My", "Yeah");

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
var killerRabbit = Object(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE");
