
'use strict';
var a = [1, 2, 3, 4, 5];
var b = ["this", "is", "a", "test"];

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
//logEach(a);
//logEach(b);
//console.log("_______________________\n");

function logger(n) {
  console.log(n);
}
function forEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
forEach(a, logger);
forEach(b, logger);
forEach(a, function (nr) {
  console.log("x:" + nr);
});
console.log("_______________________\n");

function greaterThan(nr) {
  return function (x) {
    return x > nr;
  };
}
var checkIfGreaterThan10 = greaterThan(10);
console.log("checkIfGreaterThan10:" + checkIfGreaterThan10(11));
console.log("_______________________\n");

function unless(test, thenFunction) {
  if (!test) {
    thenFunction();
  }
}
function isTrueFunction(test, thenFunction) {
  if (test) {
    thenFunction();
  }
}
function repeat(times, bodyFunction) {
  for (var i = 0; i < times; i++) {
    bodyFunction(i);
  }
}
repeat(10, function  (n) {
  // (test, then) unless n is odd, print 'n is even'
  console.log(n, n % 2);
  unless(n % 2, function () {
    console.log(n, "is even");
  });
});
console.log("_______________________\n");

