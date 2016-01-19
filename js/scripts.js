var triangle = function(side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
    return 'not a triangle';
  }
  else if
    (side1 !== side2 && side1 !== side3 && side2 !== side3) {
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

      if (triangle(side1,side2,side3) === "not a triangle") {
        $("#notTriangle").show();
      }
      else if
        (triangle(side1,side2,side3) === "scalene") {
        $("#scalene").show();
      }
      else if (triangle(side1,side2,side3) === "isosceles") {
        $("#isosceles").show();
      }
      else {
        $("#equilateral").show();
      }

    event.preventDefault();
  });
});
