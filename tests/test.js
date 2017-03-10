var exercises = require('../exercises');

describe('add(x, y)', function() {
  it('should return the sum of the two arguments', function() {
    expect(exercises.add(5, 5)).toBe(10);
    expect(exercises.add(-1, 5)).toBe(4);
  });
});

describe('subtract(x, y)', function() {
  it('should return the difference of the two arguments', function() {
    expect(exercises.subtract(5, 5)).toBe(0);
    expect(exercises.subtract(-1, 5)).toBe(-6);
    expect(exercises.subtract(5, -5)).toBe(10);
    expect(exercises.subtract(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('should return the quotient of the two arguments', function() {
    expect(exercises.divide(5, 5)).toBe(1);
    expect(exercises.divide(10, 5)).toBe(2);
    expect(exercises.divide(11, 2)).toBe(5.5);
  });
});

describe('multiply(x, y)', function() {
  it('should return the product of the two arguments', function() {
    expect(exercises.multiply(5, 5)).toBe(25);
    expect(exercises.multiply(10, -5)).toBe(-50);
    expect(exercises.multiply(11, 0)).toBe(0);
  });
});

describe('getRemainder(x, y)', function() {
  it('should return the division remainder of the two arguments', function() {
    expect(exercises.getRemainder(5, 5)).toBe(0);
    expect(exercises.getRemainder(10, 5)).toBe(0);
    expect(exercises.getRemainder(11, 2)).toBe(1);
  });
});

describe('isEven(num)', function() {
  it('should return the bool true if the argument is even, false otherwise', function() {
    expect(exercises.isEven(6)).toBe(true);
    expect(exercises.isEven(7)).toBe(false);
    expect(exercises.isEven(0)).toBe(true);
  });
});

describe('isOdd(num)', function() {
  it('should return the bool true if the argument is odd, false otherwise', function() {
    expect(exercises.isOdd(6)).toBe(false);
    expect(exercises.isOdd(7)).toBe(true);
    expect(exercises.isOdd(0)).toBe(false);
  });
});

describe('square(num)', function() {
  it('should return the argument after squaring it', function() {
    expect(exercises.square(6)).toBe(36);
    expect(exercises.square(7)).toBe(49);
    expect(exercises.square(0)).toBe(0);
    expect(exercises.square(-5)).toBe(25);
  });
});

describe('cube(num)', function() {
  it('should return the argument after squaring it', function() {
    expect(exercises.cube(3)).toBe(55);
    expect(exercises.cube(0)).toBe(0);
    expect(exercises.cube(-5)).toBe(-125);
  });
});

describe('addExclamationPoint(str)', function() {
  it('should add an exclamation point to the end of the string', function() {
    expect(exercises.addExclamationPoint('hello world')).toBe('hello world!');
    expect(exercises.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
  });
});

describe('combineNames(firstName, lastName)', function() {
  it('should return the two strings combined into one with a space separating them', function() {
    expect(exercises.combineNames('hello', 'world')).toBe('hello world');
    expect(exercises.combineNames('Lambda', 'School')).toBe('Lambda School');
  });
});

describe('getGreeting(name)', function() {
  it('should return the string \'Hello {name}!\'', function() {
    expect(exercises.getGreeting('Ben')).toBe('Hello Ben!');
    expect(exercises.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
  });
});

describe('getRectangleArea(length, width)', function() {
  it('should return the correct area', function() {
    expect(exercises.getRectangleArea(2, 2)).toBe(4);
    expect(exercises.getRectangleArea(3, 6)).toBe(18);
    expect(exercises.getRectangleArea(0, 2)).toBe(0);
  });
});

describe('getTriangleArea(base, height)', function() {
  it('should return the correct area', function() {
    expect(exercises.getTriangleArea(2, 2)).toBe(2);
    expect(exercises.getTriangleArea(0, 2)).toBe(0);
  });
});

describe('getCircleArea(radius)', function() {
  it('should return the correct area', function() {
    expect(exercises.getCircleArea(4)).toBe(50.2654824574);
    expect(exercises.getCircleArea(0)).toBe(0);
  });
});

describe('getRectangularPrismVolume(length, width, height)', function() {
  it('should return the correct area', function() {
    expect(exercises.getRectangularPrismVolume(2, 2, 2)).toBe(8);
    expect(exercises.getRectangularPrismVolume(0, 5, 10)).toBe(0);
  });
});
