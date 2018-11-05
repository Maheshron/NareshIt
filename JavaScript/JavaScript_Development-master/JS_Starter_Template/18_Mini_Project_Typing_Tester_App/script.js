var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below:



// Run a standard minute/second/hundredths timer:
//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));




// Match the text entered with the provided text on the page:




// Start the timer:



// Reset everything:
function reset(){
	clearInterval(interval);
	timer
}

// Event listeners for keyboard input and the reset button:

