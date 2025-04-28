/*
 * Author: Adam Sinclair
 * Date: 4/28/2025
 * Description: This program creates an array listing my transportation methods 
 * and an object describing my main ride, then outputs them neatly to the webpage.
 */

// Declare myTransport array
var myTransport = ["car", "bus"];

// Declare myMainRide object
var myMainRide = {
    make: "Subaru",
    model: "Crosstrek",
    color: "Silver",
    year: 2016,
    ownIt: true,
    age: function() {
        var currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
};

// Output myTransport array neatly
document.writeln("Getting around: " + myTransport + "<br>");

// Output myMainRide object neatly
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'),
    "</pre>");

