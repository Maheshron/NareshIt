/*
        Math Object Examples
                               
     */

    // Math PI and Sqrt
        var pivalue = Math.PI;
        console.log("The pi value is :"+ pivalue);

    // find the min of 4 numbers
     var min = Math.min(10,34,43,45,23,234,53,23,453);
     console.log(min);

    // find the Max of 4 numbers
        var max = Math.max(12,342,43,23,53,5,4,2,234,5532,453);
        console.log(max);

    // find the 'x' to the power of 'y' value, ex: 2^4
       var power = Math.pow(2,4);
       console.log(power);

    // generate the random numbers from 0 to 100
       var ran = Math.round(Math.random()*100000);
       console.log(ran);

    /* For more details about Math Object, please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    */

    /*
        Date Object Examples

     */

    // get today's date
         var today = new Date();
         console.log(today);
         // get a normal date
         var date = today.getDate()  + "/" + today.getMonth() + "/" + today.getFullYear();
         console.log(date);

    

    // get full day of the week using switch statement
           var day = today.getDay();
           var fullDay = " Today is :";
           switch(day){
            case 0:
            fullDay += 'Sunday';
            break;
            case 1:
            fullDay += 'Monday';
            break;
            case 2:
            fullDay += 'Tuesday';
            break;
            case 3:
            fullDay += 'Wednesday';
            break;
            case 4:
            fullDay += 'Thursday';
            break;
            case 5:
            fullDay += 'friday';
            break;
            case 6:
            fullDay += 'Saturday';
            break; 
            default:
            fullDay += 'No Value';
            break;
}
console.log(fullDay);

    // Display a Digital Clock on the web page
               function indianTime(){
                var today = new Date();
                var options = {timeZone: "Asia/Kolkata"};
                var time = today.toLocaleTimeString('en-US',options);
                document.getElementById('display').innerHTML = "Indian Time "+ time;
               }  

setInterval(indianTime,1000);
function usTime(){
                var today = new Date();
                var options = {timeZone: "America/New_York"};
                var time = today.toLocaleTimeString('en-US',options);
                document.getElementById('clock').innerHTML = "New_York Time "+ time;
               }  

setInterval(usTime,1000);

    /* For More Details about Date() please have a look at
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    */
    var name = "mahesh kumar";
     console.log(name.length);
     // Number Example
     console.log("Max Value in JS " + Number.MAX_VALUE);
     // parseInt
     var strNum = "123";
     var num = parseInt(strNum);
     console.log(num+" '" + typeof(num));
