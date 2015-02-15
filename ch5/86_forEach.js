'use strict';
var a = [1, 2, 3, 4, 5];
var b = ["this", "is", "a", "great", "test"];

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    //console.log(array[i]);
  }
}
//logEach(a);
//logEach(b);

function logger(n) {
  console.log(n);
}
function forEach(array, funct) {
  for (var i = 0; i < array.length; i++) {
    funct(array[i]);
  }
}
//forEach(a, logger);
//forEach(b, logger);

function greaterThan(nr) {
  return function (target) {
    return target > nr;
  };
}
var greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));
//console.log(greaterThan10(9));

function repeat(times, bodyFunction) {
  for (var i = 0; i < times; i++) {
    bodyFunction(i);
  }
}
function bodyFunction(i) {
  if (isEvenFunction(i)) {
    thenFunction(i);
  }
}
function isEvenFunction(i) {
  return i % 2 === 0;
}
function thenFunction(i) {
  console.log(i, "is even");
}
//repeat(10, bodyFunction)   ;
