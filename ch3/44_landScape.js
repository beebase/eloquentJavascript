// lexical scoping: var is reachable within the whole function it's in (result)
// var i is separate within 2 different functions
'use strict';
var landscape
  , result
  , i;

landscape = function () {
  result = "";

  function flat(size) {
    for (i = 0; i < size; i++) {
      result += "_";
    }
  }

  function mountain(size) {
    result += '/';
    for (i = 0; i < size; i++) {
      result += "'";
    }
    result += "\\";
  }

  flat(3);
  mountain(8);
  flat(2);
  mountain(4);
  flat(5);
  return result;
};
console.log(landscape());

console.log("\n###################\n\n");

function landscape2() {

  // FUNCTIONS ARE ONLY EXECUTED WHEN CALLED !!!!!!!!

  function flat(size) {
    var result = "";
    for (var i = 0; i < size; i++) {
      result += "_";
    }
    return result;
  }

  function mountain(size) {
    var result = "";
    result += "/";
    for (var i = 0; i < size; i++) {
      result += "'";
    }
    result += "\\";
    return result;
  }

  function build(args) {
    var result = "";
    for (var i = 0; i < args.length; i++) {
      var length = args[i];
      if (i % 2 === 0) {
        result += flat(length);
      } else {
        result += mountain(length);
      }
    }
    return result;
  }

  return build(arguments);
}
console.log(landscape2(2, 5, 2, 8));

console.log("___________________\n");

function landscape5 () {
  function flat (size) {
    var result = "";
    for (var i = 0; i < size; i++) {
          result += "_";
    }
    return result;
  }
  function mountain(size) {
    var result = "/";
    for (var i = 0; i < size; i++) {
      result += "^";
    }
    result += "\\";
    return result;
  }
  function build(array) {
    var result = "";
    for (var i = 0 ; i < array.length; i++) {

      var l = array[i];
      if(i % 2 === 0) {
        result += flat(l);
      }           else {
        result += mountain(l);
      }
    }
    return result;
  }
  return build(arguments);
}
console.log(landscape5(1,3,4,5,6,7,8,9));