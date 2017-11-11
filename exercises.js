//Do not change any of the function names
/* Ira Sanchez
Assignment 1 Terms:
Variables - Variables are like nicknames in math (and Javascript). It’s weird if your friend takes your nickname in real life, and Javascript doesn’t like it very much either. Just like using your friend’s nickname is the same as using their name, using a variable is the same thing as typing in whatever that variable stands for. You give something a variable by typing var nameOfVariable = “stuff you want a shorter name for”;
Strings - Strings are basically words that you want the computer to just read, not necessarily take instructions from. You put “quotes” around a word to tell the computer to ignore the meaning of the word and instead just read it. Otherwise, it may think you’re trying to tell it what to do. A string can also have numbers in it or even be an entire book if you’re into that. Here are some strings: “This is a string!”, “Commas can separate strings.”, “Don\’t use commas in Javascript the same way you do in English class. Your teacher won\’t be happy.”
Functions (arguments, return) - Functions are like mini factories made out of code. Some factories make shoes. Some make computers. No factory does everything. Functions take something you give it (the argument), do something to it, and “return” to you the result. Some functions add 1 forever in order to make a list of numbers (1, 2, 3, 4, 5, 6, etc.). Other functions print “a string!”
if statements - If statements are blocks of code that say “if this piece of information is true, then do this stuff to the code.” You may be wondering, “What if it’s not true though?” In that case, the code diverts to the “else” part of the code. 
Boolean values (true, false) - “Boolean values” is a fancy way to describe yes/no, on/off, true/false -- anything where there are only two options to choose from and where both options cannot be true at the same time. */ 
function multiplyByTen(num) {
	var product = num * 10;
	return product;
  // return num after multiplying it by ten
  // code here
}

function subtractFive(num) {
	var minusFive = num - 5;
	return minusFive;
  // return num after subtracting five
  // code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
	return true;
  } else { return false;
  }  
  // return true if the two strings have the same length
  // otherwise return false
  // code here
}

function areEqual(x, y) {
    if (x === y) {
        return true;
    } else { return false;
	}
  // return true if x and y are the same
  // otherwise return false
  // code here
}

function lessThanNinety(num) {
	if (num < 90) {
		return true;
	} else { return false;
	}
  // return true if num is less than ninety
  // otherwise return false
  // code here
}

function greaterThanFifty(num) {
	if (num > 50) {
		return true;
	} else { return false;
	}
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
  var subtraction = x - y;
  return subtraction;
  // subtract y from x and return the value
  // code here
}

function divide(x, y) {
  var division = x/y;
  return division;
  // divide x by y and return the value
  // code here
}

function multiply(x, y) {
  var multiplication = x*y;
  return multiplication;
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
	if (num%2 === 0) {
		return true;
	} else { return false;
	}
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {

  if (num%2 === 1) {
		return true;
	} else { return false;
	}
  // return true if num is false
  // otherwise return false
  // code here
}

function square(num) {
  var squaredNum = Math.pow(num, 2);
  return squaredNum;
  // square num and return the new value
  // code here
}

function cube(num) {
  var cubedNum = Math.pow(num, 3);
  return cubedNum;
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  var poweredUp = Math.pow(num, exponent);
  return poweredUp;
  // raise num to whatever power is passed in as exponent
  // code here
}

function roundNumber(num) {
   return Math.round(num);
  // round num and return it
  // code here
}

function roundUp(num) {
  var roundedComplete = Math.ceil(num);
  return roundedComplete;
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  return str + '!';
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
	return 'Hello ' + name + '!';
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
	return length * width;
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
	return (base * height)/2;
  // return the area of the triangle by using base and height
  // code here
}

function getCircleArea(radius) {
	var foundCircleArea = Math.pow(radius, 2) * Math.PI;
	return Math.round(foundCircleArea);
  // return the rounded area of the circle given the radius
  // code here
}

function getRectangularPrismVolume(length, width, height) {
	return length * width * height;
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
