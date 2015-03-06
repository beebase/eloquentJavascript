'use strict';
var arrays = [[1,2,3], [4,5], [6]];

var x = arrays.reduce(function(prev, curr) {
   return prev.concat(curr);
});

console.log(x);