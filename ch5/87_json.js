'use strict';
var json1 = [
  '{"name": "x",  "born": 1980}',
  '{"name": "y" , "born": 1984}'
];

console.log("json1:", typeof json1);
var string = JSON.stringify(json1);
console.log("string:", typeof string);
console.log("string.length:" , string.length);

var json2 = JSON.parse(string);
console.log("json2:",typeof json2);

console.log("______________\n");

