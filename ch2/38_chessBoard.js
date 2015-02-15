/**
 * Created by maarten on 29/01/15.
 */
'use strict';
var string = ""
  , size   = 10
  , i
  , j;
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        string += "#";
      } else {
        string += " ";
      }
    } else {
      if (j % 2 === 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
  }
  //console.log(string);
  string = "";
}

console.log("---------------/n/n");

var result = ""
  , char1
  , char2; // characters to be printed
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if (i % 2 === 0) {
      result += (j % 2 !== 1) ? "#" : " ";
    } else {
      result += (j % 2 !== 1) ? " " : "#";
    }
  }
  result += "\n";
}
//console.log(result);

console.log("---------------\n\n");

function checkBoard(size) {
  var result = "";
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i % 2 === 0) {
        result += j % 2 === 0 ? "@" : " ";
      } else {
        result += j % 2 === 0 ? " " : "@";
      }
    }
    result += "\n";
  }
  return result;
}
console.log(checkBoard(10));