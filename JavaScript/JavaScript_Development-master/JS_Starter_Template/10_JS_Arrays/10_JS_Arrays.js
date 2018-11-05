
    // creation of arrays
        var array = [10,20,30,40,50];
        console.log(array[0]);

    // Accessing an array and its properties
          console.log(array);
        var prop = array[0];
        console.log(prop);
            
    // Access not existed property from an array
        console.log(array[89]);//undifined

    // adding properties to an array
        array[5]  = 60;
        console.log(array);

    // Accessing length of an Array

      console.log(array.length);
    // reverse the array using reverse()
        array = [10,20,30,40,50];
        var output = " Befor : " + array.join(' , ');
        console.log(output);
        document.getElementById('display').innerHTML = output;
        array.reverse();
        output = "After : "+ array.join(',');
        console.log(output);
        document.getElementById('display2').innerHTML = output;

       
    // Remove the first value of the array: shift()
             array = [10,20,30,40,50];
             document.getElementById('display').innerHTML = "Before : " + array.join(',');
             array.shift();
             document.getElementById('display2').innerHTML = "After : " + array.join(',');
 
    // Add value to front of the array:unshift()
                      array = [10,20,30,40,50];
             document.getElementById('display').innerHTML = "Before : " + array.join(',');
             array.unshift(80);
             document.getElementById('display2').innerHTML = "After : " + array.join(',');
 


    // Remove the last value of the array: pop()
       array = [10,20,30,40,50];
             document.getElementById('display').innerHTML = "Before : " + array.join(',');
             array.pop();
             document.getElementById('display2').innerHTML = "After : " + array.join(',');
 

    // Add value the end of the array: push()
       array = [10,20,30,40,50];
             document.getElementById('display').innerHTML = "Before : " + array.join(',');
             array.push(78);
             document.getElementById('display2').innerHTML = "After : " + array.join(',');
 


    // Remove an element from an Array , Arguments: colors.splice(pos,n):
                      array = [10,20,30,40,50];
             document.getElementById('display').innerHTML = "Before : " + array.join(',');
             array.splice(1,2);
             document.getElementById('display2').innerHTML = "After : " + array.join(',');
 
 

    // Create a copy of an array. Typically assigned to a new variable:slice();
            var array1 = [10,20,30,40,50];
            var array2  = array1.slice();
            if(array1===array2){
                console.log("Both are Equal ")
            }
            console.log(array2); 
    
    // Return the first element that matches the search parameter
                                                                            
    // after the specified index position. Defaults to index position 0. Arguments: colors.indexOf(search, index):
    // var result = colors.indexOf(search, index);
    // console.log("The search result index is: ", result);
        array = [10,20,30,40,50];
        console.log(array.indexOf(50));
        var n = 100;
        if(array.indexOf(n)===-1){
            console.log("The Element " + n + " is Not Exist");
        }
        else{
            console.log("The Element "+ n + " is Exist at "+ array.indexOf(n));
        }
    // Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: colors.join(separator):
    // var arrayString = colors.join(separator);
    // console.log("String from array: ", arrayString);
               array = [10,20,30,40,50];
               output = array.join('^');
               console.log(output);
               document.getElementById('display2').innerHTML = output;
    // Prove an array is an Object
              array = [10,20,30,40,50,60,70,80,90,100];
              console.log(array);
    // MDN documentation for Array:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
