describe('triangle', function() {
  it("is false when the sum of any two sides is less than or equal to the third.", function() {
    expect(triangle(1,2,3)).to.equal('Not a triangle');
  });

  it("is true when no sides are equal", function() {
    expect(triangle(4,8,10)).to.equal('scalene');
  });

  it("is true when exactly 2 sides are equal", function() {
    expect(triangle(3,3,2)).to.equal('isosceles');
  });

  it("is true when all sides are equal", function() {
    expect(triangle(3,3,3)).to.equal('equilateral');
  });
});
