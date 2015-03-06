'use strict';
var a = [1, 2, 3, 4, 5];
var b = ["this", "is", "a", "great", "test"];

function logEach(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += (array[i]);
  }
  return result;
}

//console.log("logEach(a): " + logEach(a));
//console.log("logEach(b): " +logEach(b));

function logger(n) {
  return n;
}
function forEach(array, funct) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += funct(array[i]);
  }
  return result;
}
//console.log("forEach(a, logger): "+ forEach(a, logger));
//console.log("forEach(b, logger): " + forEach(b, logger));

function greaterThan(nr) {
  return function (target) {
    return target > nr;
  };
}
var greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));
//console.log(greaterThan10(9));

function logIt(i) {
  return (i + " is even.");
}

function isEven(i) {
  return i % 2 === 0;
}

function body(i) {
  var result = "";
  if (isEven(i)) {
    result = logIt(i) + "\n";
  }
  return result;
}
function repeat(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += body(array[i]);
  }
  return result;
}
//console.log("repeat(a): " , repeat(a));

