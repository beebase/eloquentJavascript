/**
 * Created by maarten on 29/01/15.
 */
'use strict';
function printFarmInventory1(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(cowString + " Cows");

  var chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(chickenString + " Chickens");
}
printFarmInventory1(7, 11);
console.log("_____________________________\n");
//1st refactoring
function printZeroPaddedWithLabel2(number, label) {
  var numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(numberString + " " + label);
}
function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel2(cows, "Cows");
  printZeroPaddedWithLabel2(chickens, "Chickens");
  printZeroPaddedWithLabel2(pigs, "Pigs");
}
printFarmInventory2(7, 11, 3);
console.log("_____________________________\n");
//2nd refactoring
function zeroPad(number, width) {
  var numberString = String(number);
  while (numberString.length < width) {
    numberString = "0" + numberString;
  }
  return numberString;
}
function printFarmInventory3(cows, chickens, pigs) {
  console.log(zeroPad(cows, 4) + " Cows");
  console.log(zeroPad(chickens, 4) + " Chickens");
  console.log(zeroPad(pigs, 4) + " Pigs");
}
printFarmInventory3(7, 16, 3);

console.log("\n#############################\n");
/**
 *
 * @param {Number} cows
 * @param {Number} chickens
 * @returns {string}
 */
function printFarmDirectory4(cows, chickens) {
  var result;
  var cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  var chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  result = cowString + " Cows\n" + chickenString + " ChickenString";
  return result;
}
console.log(printFarmDirectory4(10, 20));

function printZeroPaddedWithLabel5(number, label) {
  var result;
  var numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  result = numberString + " " + label + "\n";
  return result;
}
function printFarmDirectory5(cows, chickens) {
  var result = "";
  result += printZeroPaddedWithLabel5(cows, "Cows");
  result += printZeroPaddedWithLabel5(chickens, "Chickens");
  return result;
}
console.log(printFarmDirectory5(30, 40));

function printZeroPadded6(number, size) {
  var result = String(number);
  while (result.length < size) {
    result = "0" + result;
  }
  return result;
}
function printFarmInventory(cows, chickens) {
  var result = "";
  result += printZeroPadded6(cows, 8) + " Cows\n";
  result += printZeroPadded6(chickens, 8) + " Chickens\n";
  return result;
}
console.log(printFarmInventory(50,60));