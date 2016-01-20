var triangle = function(side1, side2, side3) {
  if (isNotTriangle(side1, side2, side3)) {
    return 'isNotTriangle';
  }
  else {
    return triangleType(side1, side2, side3);
  }
};

var isNotTriangle = function(side1, side2, side3) {
  return ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1))
};

var triangleType = function(side1, side2, side3) {
  if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return 'scalene';
  }
  else if ((side1 === side2 || side1 === side3 || side2 === side3) && ((side1 + side2 + side3) / 3 !== side1)) {
    return 'isosceles';
  }
  else {
    return 'equilateral';
  }
};


$(document).ready(function(){
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

      if (triangle(side1,side2,side3) === 'isNotTriangle') {
        $("#notTriangle").show();
      }
      else if
        (triangle(side1,side2,side3) === 'scalene') {
        $("#scalene").show();
      }
      else if (triangle(side1,side2,side3) === 'isosceles') {
        $("#isosceles").show();
      }
      else {
        $("#equilateral").show();
      }

    event.preventDefault();
  });
});
