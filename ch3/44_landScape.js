// lexical scoping: var is reachable within the whole function it's in (result)
// var i is separate within 2 different functions
'use strict';
var array = [1,2,3,4,5,6,7,8,9];

function flat(size) {
  var result = '';
  for (var i = 0; i < size; i++) {
    result += '_';
  }
  return result;
}
function mountain(size) {
  var result = '/';
  for (var i = 0; i < size; i++) {
    result += '^';
  }
  result += '\\';
  return result;
}
function build(array) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result += flat(array[i]);
    } else {
      result += mountain(array[i]);
    }
  }
  return result;
}
