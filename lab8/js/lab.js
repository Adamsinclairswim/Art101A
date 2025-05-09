/*
 * Author: Adam Sinclair
 * Date: 5/4/2025
 * Description: lab 7 name work
 */


// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Named function that squares a number
function squareNumber(x) {
    // Multiply the number by itself
    var results = x * x;
    return results;
}

// Use map with the named function
var squaredResults = numbers.map(squareNumber);

// Anonymous function to add 10 to each number
var addTenResults = numbers.map(function(x) {
    var results = x + 10;
    return results;
});

// Output the results to the webpage
document.getElementById("output1").innerHTML = "Squared Results: " + squaredResults.join(", ");
document.getElementById("output2").innerHTML = "Add Ten Results: " + addTenResults.join(", ");
