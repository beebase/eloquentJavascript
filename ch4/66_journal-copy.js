'use strict';

//HELPER calculates the probability for given table
// (= array with count of possibilities) [79, 9, 4, 1]
// 00 = no squirrel , no pizza  (79 counts)
// 01 = no squirrel , yes pizza (9 counts)
// 10 = yes squirrel, no pizza (4 counts)
// 11 = yes squirel, yes pizza (1 count)
function phi(t) {
  return (t[3] * t[0] - t[2] * t[1]) /
    Math.sqrt((t[2] + t[3]) * (t[0] + t[1]) * (t[1] + t[3]) * (t[0] + t[2]));
}

//HELPER check if event has an entry
function hasEvent(event, entry) {
  return entry.events.indexOf(event) !== -1;
}

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
//HELPER convert journal results to array with sum count of each probability
function tableFor(event, journal) {
  var result = [0, 0, 0, 0];
  // eg. [76, 9, 4, 1]
  // 76 means counted 76 occurrences where event
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) {
      // binary position 0 is true,  equals 1 in decimal;
      index += 1;
    }
    if (entry.squirrel) {
      // binary position 1 is true, equals 2 in decimal;
      index += 2;
    }
    // index can be 0,1,2,3
    result[index] += 1;
  }
  return result;
}

//EXAMPLE mapping eventName to probability (phi);
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("map: ", map);
console.log("'pizza' in map: ", "pizza" in map);
console.log("map['pizza']: ", map["pizza"]);

//HELPER create map object (result) with event and correlation
function gatherCorrelations(journal) {
  var result = {}; // eg. { "pizza":0.4, "carrots":0.1, ...}
  for (var entry = 0; entry < journal.length; entry++) {
    // get events for 1 entry
    var events = journal[entry].events;
    //loop over events
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      //if event is not in phis object (mapper);
      if (!(event in result)) {
        //add event with correlation to phis object
        result[event] = phi(tableFor(event, journal));
      }
    }
  }
  return result;
}

//LOG results  { eventName: correlation, eventName: correlation}
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations);
for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ": " + correlations[event]);
  }
}

// eating peanuts and brushed teeth seem to influence the outcome
for (var i=0; i< JOURNAL.length; i++){
  var entry = JOURNAL[i];
  if(hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)){
    entry.events.push("peanut teeth");
  }
}
console.log("peanuts and teeth: " + phi(tableFor("peanut teeth", JOURNAL)));
