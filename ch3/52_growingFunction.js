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

function printFarmInventory4(cows, chickens) {
  var result = "";
  var cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  result += cowString + " Cows\n";
  var chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  result += chickenString + " Chickens";
  return result;
}
console.log(printFarmInventory4(10, 20));

function printZeroPaddedWithLabel5(size, label) {
  var result = "";

  for (var i = 0; i < size; i++) {
    result = "0" + size;
  }
  result += " " + label + "\n";
  return result;
}
function printFarmInventory5(cows, chickens) {
  var result = "";
  result += printZeroPaddedWithLabel5(cows, "Cows");
  result += printZeroPaddedWithLabel5(chickens, "Chickens");
  return result;
}
console.log(printFarmInventory5(30, 40));

function zeroPadded6(number, size) {
  var result  = String(number) ;
  while (result.length < size) {
    result = "0" + result;
  }
  return result;
}
function printFarmInventory6(cows, chickens) {
  var result = "";
  result += zeroPadded6(cows, 5) + " Cows\n";
  result += zeroPadded6(chickens, 5) + " Chickens";

  return result;
}
console.log(printFarmInventory6(50, 60));