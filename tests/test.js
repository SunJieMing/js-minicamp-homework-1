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

describe('getTriangleArea(base, height)', function() {
  it('should return the correct area', function() {
    expect(exercises.getTriangleArea(2, 2)).toBe(2);
    expect(exercises.getTriangleArea(0, 2)).toBe(0);
  }); 
});
