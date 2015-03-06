/**
 * Created by maarten on 30/01/15.
 */
'use strict';
function minimum(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return null;
  }
}
//console.log(minimum(4, 6));
//console.log("___________________\n");

function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  return ((n - 2) % 2) === 0;
}
//console.log(isEven(11));
//console.log("___________________\n");

function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
//console.log(countChar("this is the best bean ever", "e"));

//console.log("\n################");
