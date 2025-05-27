/*
  Author: Adam Sinclair
  Date: 2025
  Lab 13 - FizzBuzzBoom (Ordered)
  Loops from 1–200 and applies Fizz/Buzz/Boom logic based on multiples.
*/

function fizzBuzzBoom() {
  $("#output").html(""); // Clear previous output

  for (let i = 1; i <= 200; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (i % 7 === 0) result += "Boom";

    if (result !== "") {
      result += "!"; 
    } else {
      result = i; 
    }

    $("#output").append(`<p>${i}: ${result}</p>`);
  }
}

// Wait for DOM and attach event
$(document).ready(function () {
  $("#run-button").click(fizzBuzzBoom);
});
