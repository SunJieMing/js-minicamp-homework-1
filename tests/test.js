var exercises = require('../exercises');

describe('getSquareArea(length, width)', function() {
  it('should return the correct area', function() {
    expect(exercises.getSquareArea(2, 2)).toBe(4);
    expect(exercises.getSquareArea(0, 2)).toBe(0);
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
