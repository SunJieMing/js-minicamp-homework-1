//Do not change any of the function names

/*
## Feynman Writing Prompts
  1. Variables - Data types used to store data. It's giving a nickname to the action your are trying so you do not have to write a description of it everytime you need to call on it.
  2. Strings - A sequence of characters. these are most often ysed in arrays of things, like lists of favourite foods or animals, or used when you want code input to say something back to you like saying Hi! 
  3. Functions (arguments, return) - A unique identifier that receives arguments, any value that is passed through the function for the desired effects of the code, and returns, which, simply put, prints output; can be reused infinitely
  4. if statements - if statements give you options in code. Like boolean values, if statements prompts whatever is parsing the code to check if it is "truethy", the values fit the desired parameters, and to return something or continue in the code. If the parameters are not met, it will check to see if there is a "falsy" value, an "else if" or "else", to perform their desired action.  
  5. Boolean values (true, false) - Every decision ultimately boils down to a booleam value. True/false, yes/no, on/off, etc. Boolean values in javascript are used most often to decide which route to take in code, as in if statements, and what to return if true and what not to return in the case of a false statement. Or statements to repeat, like in for loops, and whether to continur cycling through an aray if the conditions are true, the defined value is still less than the ultimate goal number, or false, if we have reach the ultimate number or passed it. 
*/

function multiplyByTen(num) {
  return num * 10; // return num after multiplying it by ten
}

function subtractFive(num) {
  return num - 5; // return num after subtracting five
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true; // return true if the two strings have the same length
  } else {
    return false; // otherwise return false
  }
}


function areEqual(x, y) {
  if (x === y) {
    return true; // return true if x and y are the same
  } else {
    return false;  // otherwise return false
  }
}

function lessThanNinety(num) {
  if (num < 90) {
    return true; // return true if num is less than ninety
  } else {
    return false; // otherwise return false
  }
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true; // return true if num is greater than fifty
  } else {
    return false; // otherwise return false
  }
}

function add(x, y) {
  var sum = x + y; // add x and y together and...
  return sum; // return the value
}

function subtract(x, y) {
  var diff = x - y; // subtract y from x and...
  return diff; // return the value
}

function divide(x, y) {
  var quot = x / y; // divide x by y and...
  return quot; // return the value
}

function multiply(x, y) { 
  var prod = x * y; // multiply x and y and...
  return prod; // return the value
}

function getRemainder(x, y) {
  var remain = x % y;
  return remain; // return the remainder from dividing x by y
}

function isEven(num) {
  if (num % 2 === 0) {
    return true; // return true if num is even
  } else {
    return false; // otherwise return false
  }
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true; // return true if num is false
  } else {
    return false; // otherwise return false
  }
}

function square(num) {
  return Math.pow(num, 2); // square num and return the new value
}

function cube(num) {
  return Math.pow(num, 3); // cube num and return the new value
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent); // raise num to whatever power is passed in as exponent
}

function roundNumber(num) {
  return Math.round(num); // round num and return it
}

function roundUp(num) {
  return Math.ceil(num); // round num up and return it
}

function addExclamationPoint(str) {
  var fullWord = str + '!'; // add an exclamation point to the end of str and return the new string
  return fullWord; // 'hello world' -> 'hello world!'
}

function combineNames(firstName, lastName) {
  var fullName = firstName + ' ' + lastName; // return firstName and lastName combined as one string and separated by a space.
  return fullName; // 'Lambda', 'School' -> 'Lambda School'
}

function getGreeting(name) {
  var greet = 'Hello' + ' ' + name + '!'; // Take the name string and concatenate other strings onto it so it takes the following form:
  return greet; // 'Sam' -> 'Hello Sam!'
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  return length * width; // return the area of the rectangle by using length and width
}

function getTriangleArea(base, height) {
  var product = base * height; 
  var area = product * .5;
  return area; // return the area of the triangle by using base and height
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2)); // return the rounded area of the circle given the radius
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height; // return the volume of the 3D rectangular prism given the length, width, and height
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
