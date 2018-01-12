//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  // return num after subtracting five
  var diff = num -5;
  return diff;

}

function areSameLength(str1, str2) {
    // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  // add x and y together and return the value
  var sum = x + y;
  return sum;
}


function subtract(x, y) {
  // subtract y from x and return the value
  var diff = x - y;
  return diff;
}

function divide(x, y) {
  // divide x by y and return the value
  var quo = x / y;
  return quo;
}

function multiply(x, y) {
  // multiply x by y and return the value
  var prod = x * y;
  return prod;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var modulo = x % y;
  return modulo;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  // return true if num is false --- Is this the correct instruction? Ans. YES - these are bad instructions
  // otherwise return false
  if (num % 2 === 0) {
    return false;
  }
  return true;
}

function square(num) {
  // square num and return the new value
  var square = Math.pow(num,2);
  return square;
}

function cube(num) {
  // cube num and return the new value
  var thirdPower = Math.pow(num,3);
  return thirdPower; 
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  var calcPower = Math.pow (num, exponent);
  return calcPower;
}

function roundNumber(num) {
  // round num and return it
  var roundingMachine = Math.round(num);
  return roundingMachine;
}

function roundUp(num) {
  // round num up and return it
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  var addEmphasis = str + '!';
  return addEmphasis;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  var combined = firstName + ' ' + lastName;
  return combined;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  var sayHello = 'Hello ' + name + '!';
  return sayHello;
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  var triArea = (base * height)/2;
  return triArea;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  var circleArea = 3.14159*(Math.pow(radius,2));
  return Math.round(circleArea);
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  var prismVol = length*width*height;
  return prismVol;
}

// Do not modify code below this line.
// --------------------------------

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
