//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;

}

function subtractFive(num) {
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  if (str1.length == str2.length) {
    return true;
  } return false;
}

function areEqual(x, y) {
  if (x == y) {
  return true;
} return false;

}

function lessThanNinety(num) {
  if (num < 50) {
  return true;
} return false;
//there is a mistake in the test question. should say lessThanFifty
}

function greaterThanFifty(num) {
  if (num > 50) {
  return true;
} return false;
}

function add(x, y) {
  var sum = x + y;
  return sum;

}

function subtract(x, y) {
  var sum = x - y;
  return sum;
}

function divide(x, y) {
  var sum = x / y;
  return sum;
}

function multiply(x, y) {
  var sum = x * y;
  return sum;
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  if (num % 2 === 0){
  return true;
} return false;
}

function isOdd(num) {
  if (num % 2 === 0){
  return false;
} return true;
}

function square(num) {
  return num * num;

}

function cube(num) {
  return Math.pow(num, 3);

}

function raiseToPower(num, exponent) {
  return Math.pow (num, exponent);
}

function roundNumber(num) {
  return Math. round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return (base * height) / 2;

}

function getCircleArea(radius) {
  var area = Math.PI * (radius * radius);
  return Math.round (area);
}

function getRectangularPrismVolume(length, width, height) {
  return (length * width) * height;

}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
