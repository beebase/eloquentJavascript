'use strict';
var JOURNAL = [
  {"events": ["carrot", "exercise", "weekend"], "squirrel": false},
  {"events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false},
  {"events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false},
  {"events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false},
  {"events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false},
  {"events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false},
  {"events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false},
  {"events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false},
  {"events": ["cauliflower", "brushed teeth", "work"], "squirrel": false},
  {"events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false},
  {"events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false},
  {"events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false},
  {"events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false},
  {"events": ["spaghetti", "brushed teeth", "work"], "squirrel": false},
  {"events": ["brushed teeth", "computer", "work"], "squirrel": false},
  {"events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false},
  {"events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["brushed teeth", "work"], "squirrel": false},
  {"events": ["cauliflower", "reading", "weekend"], "squirrel": false},
  {"events": ["bread", "brushed teeth", "weekend"], "squirrel": false},
  {"events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false},
  {"events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false},
  {"events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false},
  {"events": ["spaghetti", "nachos", "work"], "squirrel": false},
  {"events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false},
  {"events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true},
  {"events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false},
  {"events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false},
  {"events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["potatoes", "exercise", "work"], "squirrel": false},
  {"events": ["pizza", "ice cream", "computer", "work"], "squirrel": false},
  {"events": ["lasagna", "ice cream", "work"], "squirrel": false},
  {"events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false},
  {"events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false},
  {"events": ["potatoes", "brushed teeth", "work"], "squirrel": false},
  {"events": ["carrot", "work"], "squirrel": false},
  {"events": ["pizza", "beer", "work", "dentist"], "squirrel": false},
  {"events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false},
  {"events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false},
  {"events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false},
  {"events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false},
  {"events": ["lasagna", "peanuts", "work"], "squirrel": true},
  {"events": ["pizza", "work"], "squirrel": false},
  {"events": ["potatoes", "exercise", "work"], "squirrel": false},
  {"events": ["brushed teeth", "exercise", "work"], "squirrel": false},
  {"events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false},
  {"events": ["pizza", "cycling", "weekend"], "squirrel": false},
  {"events": ["carrot", "brushed teeth", "weekend"], "squirrel": false},
  {"events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false},
  {"events": ["pizza", "peanuts", "candy", "work"], "squirrel": true},
  {"events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false},
  {"events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false},
  {"events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false},
  {"events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false},
  {"events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false},
  {"events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false},
  {"events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false},
  {"events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false},
  {"events": ["bread", "candy", "work"], "squirrel": false},
  {"events": ["potatoes", "nachos", "work"], "squirrel": false},
  {"events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false},
  {"events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false},
  {"events": ["brussel sprouts", "running", "work"], "squirrel": false},
  {"events": ["brushed teeth", "work"], "squirrel": false},
  {"events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["candy", "brushed teeth", "work"], "squirrel": false},
  {"events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false},
  {"events": ["bread", "brushed teeth", "weekend"], "squirrel": false},
  {"events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false},
  {"events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false},
  {"events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false},
  {"events": ["lettuce", "brushed teeth", "work"], "squirrel": false},
  {"events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false},
  {"events": ["pizza", "brushed teeth", "work"], "squirrel": false},
  {"events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true},
  {"events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false},
  {"events": ["brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false},
  {"events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false},
  {"events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["carrot", "reading", "weekend"], "squirrel": false},
  {"events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true},
  {"events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false},
  {"events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false},
  {"events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false},
  {"events": ["lettuce", "brushed teeth", "work"], "squirrel": false},
  {"events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false},
  {"events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false}
];

//EXAMPLE mapping event name to probability
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 9);
storePhi("def", 4);
console.log("map:", map);
console.log("'pizza' in map:", 'pizza' in map);
console.log("map.pizza", map.pizza);
for (var prop in map) {
  if (map.hasOwnProperty(prop)) {
    console.log(prop, map[prop]);
  }
}

function phi(t) {
  return (t[3] * t[0] - t[2] * t[1]) /
    Math.sqrt((t[2] + t[3]) * (t[0] + t[1]) * (t[1] + t[3]) * (t[0] + t[2]));
}

function hasEvent(event, row) {
  return row.events.indexOf(event) > -1;
}

function tableFor(event, journal) {
  var result = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var index = 0;
    var row = journal[i];
    if (hasEvent(event, row)) {
      index += 1;
    }
    if (row.squirrel) {
      index += 2;
    }
    result[index]++;
  }
  return result;
}

function getCorrelations(journal) {
  var result = {};
  for (var i = 0; i < journal.length; i++) {
    var events = journal[i].events;
    for (var j = 0; j < events.length; j++) {
      var event = events[j];
      if (!(event in result)) {
        result[event] = phi(tableFor(event, journal));
      }
    }
  }
  return result;
}
var correlations = getCorrelations(JOURNAL);
//console.log(correlations);
function filterResults(correlations) {
  var result = {};
  for (var cor in correlations) {
    if (correlations.hasOwnProperty(cor)) {
      var value = correlations[cor];
      if (value > 0.1 || value < -0.1) {
        result[cor] = value;
      }
    }
  }
  return result;
}
var filteredCorrelations = filterResults(correlations);
console.log(filteredCorrelations);

function correlationEvent(correlations, oper) {
  var highestCor = 0;
  var result;
  for (var cor in correlations) {
    if (correlations.hasOwnProperty(cor)) {
      var value = correlations[cor];
      if(oper === ">"){
        if (value > highestCor) {
          highestCor = value;
          result= cor +":" + value;
        }
      } else if(oper === "<"){
        if (value < highestCor) {
          highestCor = value;
          result= cor +":" + value;
        }
      }

    }
  }
  return result;
}
console.log("highest", correlationEvent(correlations, ">"));
console.log("lowest", correlationEvent(correlations, "<"));