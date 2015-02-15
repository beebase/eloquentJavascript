/** Optional arguments are allowed in javascript
 * too less or many arguments are ignored > become undefined
 * @param base
 * @param exponent
 */
'use strict';
function power(base, exponent) {
  if (exponent === undefined) {
    exponent = 2;
  }

  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2));
console.log(power(2, 5));

console.log("\n_____________________\n\n");

function power_(base , exp) {
  var result = 1;
  if(exp === undefined) {
    exp = 2;
  }
  for (var i = 0; i < exp; i++) {
    result = base * result;
  }
  return result;
}
console.log(power_(2));
console.log(power(2,5));