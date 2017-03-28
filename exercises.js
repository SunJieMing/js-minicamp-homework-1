//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var byTen = num * 10;
  return byTen;
}

function subtractFive(num) {
  //return num after subtracting five
  var minusFive = num -5;
  return minusFive;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  var len1 = str1.length;
  var len2 = str2.length;
  if (len1 === len2) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  var value = x + y;
  return value;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var value = x - y;
  return value;
}

function divide(x, y) {
  //divide x by y and return the value
  var value = x / y;
  return value;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var value = x * y;
  return value;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var value = x % y;
  return value;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 === 0) {
    return true;
    }
  return false;  
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  if (num % 2 > 0) {
    return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  var value = num * num;
  return value;
}

function cube(num) {
  //cube num and return the new value
  var value = num * num * num;
  return value;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var value = Math.pow(num, exponent);
  return value;
}

function roundNumber(num) {
  //round num and return it
  var value = Math.round(num);
  return value;
}

function roundUp(num) {
  //round num up and return it
  var value = Math.ceil(num);
  return value;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var newString = str + '!';
  return newString;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var newString = firstName + ' ' + lastName;
  return newString;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var newString = 'Hello ' + name + '!';
  return newString;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var value = length * width;
  return value;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var value = base * 0.5 * height;
  return value;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var value = Math.round(Math.PI * radius * radius);
  return value;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  var value = length * width * height;
  return value;
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
