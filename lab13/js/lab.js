/*
  Author: Adam Sinclair
  Date: 2025
  Lab 13 - Random FizzBuzzBoom
  When the button is clicked, selects 20 random numbers from 1–200
  and outputs Fizz (3), Buzz (5), Boom (7), or combinations.
*/

function fizzBuzzBoomRandom() {
  let outputStr = "";

  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 200) + 1;
    let str = "";

    if (num % 3 === 0) str += "Fizz";
    if (num % 5 === 0) str += "Buzz";
    if (num % 7 === 0) str += "Boom";
    if (str === "") str = num;

    outputStr += `<p>${num}: ${str}</p>`;
  }

  $("#output").html(outputStr);
}

$("#run-button").click(function () {
  fizzBuzzBoomRandom();
});
