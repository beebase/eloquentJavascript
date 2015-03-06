/**
 * Created by maarten on 01/02/15.
 */
'use strict';

/*
 function createRange(a, b, step) {
 var result = [];
 var i;
 if (step === undefined) {
 step = 1;
 }
 if (a < b) {
 for (i = a; i <= b; i += step) {
 result.push(i);
 }
 }
 else if (a > b) {
 for (i = a; i >= b; i -= step) {
 result.push(i);
 }
 }
 return result;
 }


 function sum(range) {
 var result = 0;
 for (var i = 0; i < range.length; i++) {
 result += range[i];
 }
 return result;
 }
 */

function createRange(a, b, step) {
  if (step === undefined) {
    step = 1;
  }
  var result = [];
  var i;
  if (a < b) {
    for (i = a; i <= b; i += step) {
      result.push(i);
    }
  }
  if (a > b) {
    for (i = a; i >= b; i -= step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  return array.reduce(function (prev, curr) {
    return prev + curr;
  });
}