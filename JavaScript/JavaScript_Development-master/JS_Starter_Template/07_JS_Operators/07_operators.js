    // Assignment operator =
     var num1 = 10;
     var output = "The value of num1 is " + num1;
     console.log(output);
 
    // Arithmetic operators + - * /
     var a = 10;
     var b = 20;
     var sum = a+b;
     output = "The Sum of a , b is : "+ sum;
     console.log(output);

    // Short hand math += , -= , *= , /=
     var x = 20;
     var y = 38;
     var z = 0;
     z = z + (x+y);
     z += (x+y)
     output = "The sum of " + z;
     console.log(output) 
      
    // Conditional operators < , > , <= , >= , !=
        var age = 25;
        if(age>=25){
           output = "Your are Major";
        }
        else {
            output = "You are Minor ";
        }
        console.log(output);
        document.getElementById('display').innerHTML = output;

    // Unary Operator ++ , -- (pre , post)
       var abc = 10;
       abc = abc + 1;
       abc +=1;
       abc++;
       console.log("The Value Of abc is "+ abc)


    // Logical operators AND , OR
           var inRelation = true;
           var parentsAgreed = false;
           if(inRelation && parentsAgreed){
            output = "Get Marry Soon";
           }
           else{
            output = "Wait Until parents Agreed";
           }

    // String Concatenation Operator
        var str = 1+3+"1"+4+2;
        console.log(str);
        document.getElementById('display').innerHTML = str + "";

    // Ternary operator (? :)
     age = 25;
     (age>=18)? output = "you Are Major" : output = "You are Minor";
     console.log(output);
     document.getElementById('display').innerHTML  = output;

    // Type of operator
     var xyz;
     xyz= 10;
     xyz = 'test';
     xyz = true;
     xyz = null;
     output = "value : " + xyz + " data type : " + typeof(xyz);
     console.log(output);
     document.getElementById('display').innerHTML = output;
     // == operator
      var a = 10;
      var b = "abc";
      if( a == b){
        console.log("Both are equal");

      }
    else{
        console.log("Both are not equal")
    }
    // === operator
         var a = 10;
      var b = "10";
      if( a === b){
        console.log("Both are equal");

      }
    else{
        console.log("Both are not equal")
    }