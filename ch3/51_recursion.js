/**
 * Created by maarten on 29/01/15.
 */
'use strict';
function findSolution(target) {
  function find(start, history) {
    if (start === target) {
      return history;
    }
    else if (start > target) {
      return null;                               
    }
    else {
      return find(start + 5, '(' + history + ' + 5)') ||
        find(start * 3, '(' + history + ' * 3)');
    }
  }

  // execution starts here
  return find(1, '1');
}

//console.log(findSolution(52));

