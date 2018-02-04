//Do not change any of the function names

function multiplyByTen(num) {

  var product = num * 10;
   return product;
  // return num after multiplying it by ten
  // code here
}

function subtractFive(num) {
  var difference = num - 5;
  return difference;
  // return num after subtracting five
  // code here
}

function areSameLength(str1, str2) {
  var str1Length = str1.length;
  var str2Length = str2.length;

  if (str1Length === str2Length) {
    return true;
  }
  return false;

  // return true if the two strings have the same length
  // otherwise return false
  // code here
}

function areEqual(x, y) {

  if (x === y) {
    return true;
  } 
 return false;
  // return true if x and y are the same
  // otherwise return false
  // code here
}

function lessThanNinety(num) {
if (num < 90) {
  return true;

}
return false;
  // return true if num is less than ninety
  // otherwise return false
  // code here
}

function greaterThanFifty(num) {

  if (num > 50) {
    return true;
  }
  return false;
  // return true if num is greater than fifty
  // otherwise return false
  // code here
}

function add(x, y) {

  var sum = x + y;
  return sum;

  // add x and y together and return the value
  // code here
}

function subtract(x, y) {

  var difference = x - y;
  return difference;
  // subtract y from x and return the value
  // code here
}

function divide(x, y) {
  var dividend = x / y;
  return dividend;
  // divide x by y and return the value
  // code here
}

function multiply(x, y) {
  var product = x * y;
  return product;
  // multiply x by y and return the value
  // code here
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
  // return the remainder from dividing x by y
  // code here
}

function isEven(num) {

if (num % 2 === 0) {
  return true;
}
return false;
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {

  if (num % 2 === 1) {
    return true;
  }
  return false;
  // return true if num is odd
  // otherwise return false
  // code here
}

function square(num) {
  var square = Math.pow(num, 2);
  return square;

  // square num and return the new value
  // code here
}

function cube(num) {
  var cube = Math.pow(num, 3);
  return cube;
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  var power = Math.pow (num, exponent);
  return power;
}

  // raise num to whatever power is passed in as exponent
  // code here


function roundNumber(num) {
  var round = Math.round(num);
  return round;
  // round num and return it
  // code here
}

function roundUp(num) {
  var ceiling = Math.ceil(num);
  return ceiling;
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  var exclamation = str + '!';
  return exclamation;
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  var name = firstName + ' ' + lastName;
  return name; 
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var areaSquare = length * width;
  return areaSquare;
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  var areaTriangle = (base * height) / 2;
  return areaTriangle;
  // return the area of the triangle by using base and height
  // code here
}

function getCircleArea(radius) {
  var areaCircle = Math.round(Math.pow(radius,2) * 3.14);
  return areaCircle;
  // return the rounded area of the circle given the radius
  // code here
}

function getRectangularPrismVolume(length, width, height) {
  var areaRectangularPrism = length * width * height;
  return areaRectangularPrism;
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
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
