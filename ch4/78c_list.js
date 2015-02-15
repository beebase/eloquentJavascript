/**
 * Created by maarten on 01/02/15.
 */
'use strict';

var list = {
  value: 1,
  rest : {
    value: 2,
    rest : {
      value: 3,
      rest : null
    }
  }
};

function arrayToList(a) {
  var result = null;
  for (var i = a.length - 1; i >= 0; i--) {
    result = {value: a[i], rest: result};
  }
  return result;
}
var x = arrayToList([10, 20, 30]);
console.log(x);

function listToArray(l) {
  var result = [];
  for (var node = l; node; node = node.rest) {
    console.log(node);
    result.push(node.value);
  }
  return result;
}
var y = listToArray(x);
console.log(y);


