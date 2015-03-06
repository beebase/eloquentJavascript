/**
 * Created by maarten on 01/02/15.
 */
'use strict';
function reverseArray(a) {
  var result = [];
  var aCounter = a.length - 1;
  for (var i = 0; i < a.length && aCounter >= 0; i++) {
    result[i] = a[aCounter];
    aCounter--;
  }
  return result;
}

var x = reverseArray(["A", "B", "C"]);
console.log(x);

var y = reverseArray(x);
console.log(y);

function reverseArray_(a) {
  var result = [];
  var count = 0;
  for (var i = 0; i < a.length && count >= 0; i++) {
    result[count] = a[i];
    count--;
  }
  return result;
}
console.log(reverseArray(["test", "a", "is", "this"]));