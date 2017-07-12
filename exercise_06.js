// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumOfSq = 0;
var sqOfSums = 0;

function difference(x) {

  function sumOfSquares(x) {
    for (var i = 0; i <= x; i++) {
      sumOfSq = sumOfSq + (i * i);
    }
    return sumOfSq;
  }

  function squareOfSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
      sum = sum + i;
    }
    sqOfSums = (sum * sum);
    return sqOfSums;
  }

  console.log(squareOfSum(x) - sumOfSquares(x));
}

difference(100);
