/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
     arrlen=numbers.length;
     numbers.sort(function(a,b){return a-b})
     return(numbers[arrlen-1])
    
}
//findLargestElement([3, 7, 2, 9, 1])

module.exports = findLargestElement;