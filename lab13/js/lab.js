/*
  Author: Adam Sinclair
  Date: 2025
  Lab 13 - FizzBuzzBoom
  This script loops through numbers 1–200 and appends a string to the #output div depending
  on whether the number is divisible by 3 (Fizz), 5 (Buzz), 7 (Boom), or any combo.
*/

function fizzBuzzBoom() {
  let outputStr = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";
    if (str === "") str = i;

    outputStr += str + "<br>";
  }

  $("#output").html(outputStr);
}

// Run the function
fizzBuzzBoom();
