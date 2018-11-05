/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6f
function greet(name, age) {
    return "Hello " + name + "Your " + age + " Years Old";
}
var output = greet('John', 40);
console.log(output);
document.querySelector(selectors, '#display').innerHTML = output;
