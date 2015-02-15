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
console.log(minimum(4, 6));
console.log("___________________\n");

function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  else if ((n - 2) % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isEven(11));
console.log("___________________\n");

function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("this is the best bean ever", "e"));

console.log("\n################");

function minimum1(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return null;
  }
}
console.log(minimum1(5, 8));
console.log("_______________________\n");

function isEven1(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven1(9));
console.log(isEven1(8));
console.log("_______________________\n");

function countChar_(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
       if(string.charAt(i) === char) {
         count ++;
       }
  }
  return "I found "+ count + " " + char +"'s in the string '"+ string +"'";
}
console.log(countChar_("this is a test", "t"));