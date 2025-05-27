/*
  Author: Adam Sinclair
  Date: 2025
  Lab 13 - FizzBuzzBoom (Random Order)
  When the button is clicked, shuffles numbers 1–200 and applies FizzBuzzBoom logic.
*/

// Fisher-Yates shuffle to randomize the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function fizzBuzzBoomRandomOrder() {
  let numbers = Array.from({ length: 200 }, (_, i) => i + 1);
  let shuffled = shuffle(numbers);
  let outputStr = "";

  for (let num of shuffled) {
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
  fizzBuzzBoomRandomOrder();
});
