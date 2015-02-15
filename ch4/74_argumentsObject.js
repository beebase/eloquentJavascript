/**
 * Created by maarten on 31/01/15.
 */

'use strict';
//no mapping necessary
function noArguments() {
}
noArguments(1, 2, 3);

function threeArguments(a, b, c) {
}
threeArguments();

// arguments are passed to the arguments object
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("abc", "def");

// example function
function addEntry1(arr, isSquirrel) {
  //
}
addEntry1(["work", "touched tree", "pizza", "running", "television"], false);

//alternative, looping over arguments array
function addEntry2(isSquirrel) {
  var entry = {events: [], squirrel: isSquirrel};
  for (var i = 1; i < arguments.length; i++) {
    //fill events in entry
    entry.events.push(arguments[i]);
    // add entry to journal;
    //journal.push(entry);
  }
  console.log("entry:", entry);

}
addEntry2(true, "work", "touched tree", "pizza", "running", "television");

