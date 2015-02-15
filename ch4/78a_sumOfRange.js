/**
 * Created by maarten on 01/02/15.
 */
'use strict';
/*function createRange(a, b, step) {
  if (step === undefined) {
    step = 1;
  }
  var result = [];
  if (a < b) {
    for (var i = a; i <= b; i += step) {
      result.push(i);
    }
  }
  if (a > b) {
    for (var j = a; j >= b; j -= step) {
      result.push(j);
    }
  }
  return result;
}*/

function createRange(a, b, step) {
  var result = [];
  if (step === undefined) {
    step = 1;
  }
  if (a < b) {
    for (var i = a; i < b; i += step) {
      result.push(i);
    }
  }
  else if (a> b) {
    for( var i = a; i >= b; i -= step) {
      result.push(i)
    }
  }
  return result;
}

var x = createRange(1, 12, 3);
console.log(x);

function sum(range) {
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    result += range[i];
  }
  return result;
}
console.log(sum(x));