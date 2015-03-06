/** closure: creating a master function with a local variable that is
 * copied whenever an instance of the master function is created
 */
'use strict';
function multiplier(multiply) {
  var local = multiply;    // local variable of the master function
  // function below is returned and assigned to var times  (call);
  // multiplier (or local) is copied to each instance call so there's no interference
  return function (value) {
    return local * value;
  };
}

//create instances
var times5 = multiplier(5);
var times2 = multiplier(2);

//call instances
var x = times5(10);
var y = times2(5);

//console.log(x, y);    // 50 10

//console.log("\n___________________________\n\n");

function multiplier_(nr) {
  return function( test) {
    return nr * test;
  }                  ;
}
var times10 = multiplier(10);
//console.log(times10(5));