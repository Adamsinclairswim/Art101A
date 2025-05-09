/*
 * Author: Adam Sinclair
 * Date: 5/4/2025
 * Description: lab 7 name work
 */



var numbers = [1, 2, 3, 4, 5, 6, 7, 8];


function squareNumber(x) {
    
    var results = x * x;
    return results;
}

var squaredResults = numbers.map(squareNumber);


var addTenResults = numbers.map(function(x) {
    var results = x + 10;
    return results;
});


document.getElementById("output1").innerHTML = "Squared Results: " + squaredResults.join(", ");
document.getElementById("output2").innerHTML = "Add Ten Results: " + addTenResults.join(", ");
