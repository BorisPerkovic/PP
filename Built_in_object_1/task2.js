/*==================================================================
2.	Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
==================================================================*/

var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArray = array.filter(function(item, pos) {
  return array.indexOf(item) === pos;
});

function compareNumbers(a, b) {
  return a - b;
}

console.log(newArray.sort(compareNumbers));