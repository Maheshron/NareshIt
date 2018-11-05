// If Else condition Example
     var courseCompleted = true;
     var practiceComplete = true;
     if (courseCompleted && practiceComplete) {
     	output = "You will get a job soon";
     	console.log(output)
        document.getElementById('display').innerHTML = output;
     }
     else if(courseCompleted && !practiceComplete){
     	ouput = "Start Practicing";

     }      
     else{
     	output = "Please Join any Course ";
     }
    // For loop Example to display from 1 - 10 values

      output = " ";
      for (var i = 1; i <= 10; i++) {
         if(i<=9){
                output += i + ","
         }else{
             output += i  ;
         }
         }
       console.log(output);
       document.getElementById('display').innerHTML = output;
   //1 Whi++ loop Example to display from 1 - 10 values

             var i = 1;
             output = " ";
             while(i <= 10){
             	if(i <= 9){
             		output += i    + '-';
             	}
             	else{
             		output += i;
             	}
             	i++;
             	 }
            console.log(output); 
            document.getElementById('display').innerHTML = output;

    // Do while loop Example to display from 1 - 10 values
            i = 1;
            output = " ";
            do{
            	if(i<=9){
            		output += i + ' ^ ';
            	}
            	else{
            		output += i;
            	}
            	i++;
            }while(i<=10);
            console.log(output);
            document.getElementById('display').innerHTML = output;
       
    // Switch Statement Example to display full Day
                  output = " Today is : ";
                var today = new Date().getDay();
                console.log(today);
                switch(today){
                	case 0:
                	output+= 'Sunday';
                	break;
                	case 1:
                	output+= 'Monday';
                	break;
                	case 2:
                	output+= 'Tuesday';
                	break;
                	case 3:
                	output+= 'Wednesday';
                	break;
                	case 4:
                	output+= 'ThrusDay';
                	break;
                	case 5:
                	output+= 'Friday';
                	break;
                	case 6:
                	output+= 'Saturday';
                	break;
                	default:
                	output = "hello world"
                }
                console.log(output);
                document.getElementById('display').innerHTML = output;