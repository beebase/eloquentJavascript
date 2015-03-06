'use strict';

var nrs = [9, 15, 11, 12];

function every(array, fn) {
  var result = true;
  for (var i = 0; i < array.length; i++) {
    var val = array[i];
    if (!fn(val)) {
      result = false;
      break;
    }
  }
  return result;
}

function some(array, fn) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    var val = array[i];
    if (fn(val)) {
      result = true;
      break;
    }
  }
  return result;
}

function higherThen10(n) {
  return n > 10;
}

console.log(every(nrs, higherThen10));
console.log(some(nrs, higherThen10));