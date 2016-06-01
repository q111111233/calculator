// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(add(number1, number2));

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    // debugger;
    $(".output").text(result);
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    // debugger;
    var number3 = parseInt($("#sub1").val());
    var number4 = parseInt($("#sub2").val());
    var result = subtract(number3, number4);
    $(".output").text(result);
  });
  $("form#multi").submit(function(event) {
    event.preventDefault();
    // debugger;
    var number3 = parseInt($("#multi1").val());
    var number4 = parseInt($("#multi2").val());
    var result = multiply(number3, number4);
    $(".output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    // debugger;
    var number3 = parseInt($("#divide1").val());
    var number4 = parseInt($("#divide2").val());
    var result = divide(number3, number4);
    $(".output").text(result);
  });
});

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
