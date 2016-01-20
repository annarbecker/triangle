describe('isNotTriangle', function() {
  it("is false when sides form valid triangle", function() {
    expect(isNotTriangle(4,8,10)).to.equal(false);
  });
  it("is true when the sum of any two sides is less than or equal to the third.", function() {
    expect(isNotTriangle(1,2,3)).to.equal(true);
  });
});

describe('triangleType', function() {
  it("return scalene when no sides are equal", function() {
    expect(triangleType(4,8,10)).to.equal('scalene');
  });

  it("return isosceles when exactly 2 sides are equal", function() {
    expect(triangleType(3,3,2)).to.equal('isosceles');
  });

  it("return equilateral when all sides are equal", function() {
    expect(triangleType(3,3,3)).to.equal('equilateral');
  });
});

describe('triangle', function() {
  it("is true when no sides are equal", function() {
    expect(triangle(4,8,10)).to.equal('scalene');
  });
  it("is false when the sum of any two sides is less than or equal to the third.", function() {
    expect(triangle(1,2,3)).to.equal('not a triangle');
  });
});
