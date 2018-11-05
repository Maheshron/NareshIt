 //creation of objects
     var obj = {};

    //Adding properties to objects
      obj.name = 'mahesh kumar';
      obj.age = 34;
      obj.designation = 'manager';

      console.log(obj);
    //Retrieving properties of objects
     var objName = obj.name;
       console.log(objName);
    //declaring Object Literals
       var employee = {
        name : 'mahesh',
        age  : 22,
        designation : 'manager'
       }
    //Access existing properties
        var empName  = employee.name;
        console.log(empName);
    //Access Non Existing Propertie
          var empSalary = employee.salary;
          console.log(empSalary);
    // Usage of Dot and [] notations
        var empDesg = employee.designation;
        var empDesg2 = employee['designation'];
        console.log(empDesg2);
    // use of [] notation where dot is not used for invalid identifiers
       var student = {
           name : 'Rajan',
           age  : 22,
           course : 'programming',
           10 : 'India'
       };
       var stdProp = student['10'];
       console.log(stdProp);
    // use of [] notation for accessing dynamic properties
       var dynaProp = 'name';
       console.log(student[dynaProp]);
       dynaProp = 'age';
       console.log(student[dynaProp]);
       dynaProp = 'course';
       console.log(stydent[dynaProp]);
    // nested Objects creation
       var showroom ={
        name : 'Audi Hyderabad',
        est  : 1995,
        address :{
            city : 'Hyderabad',
            state : 'Telangana',
            country : 'India'
        }
       };
    //Accessing them using dot notation
         var showroonCity =  showroom.address.city;
         console.log(showroomCity);
    //Accessing them using mix of dot and [] notation
        var showroomState1 = showroom.address.state;
        console.log(showroomState1);
        var showroomState2 = showroom.address['state'];
        console.log(showroomState2);
      // Add some properties to nested object and access them
        showroom.address.street = 'Hitech City';
        console.log(showroom.address);

     // === operator demo for objects  if pointing to same location in memory)
           var emp1{
            name : 'mahesh',
            age : 25,
            designation : 'web designer',
            company : 'Happiest Minds'
           }
           var emp2 = emp1;
           if(emp1===emp2){
            console.log("Both are Equal");
           }
           else {
            console.log("Both are not equal ")
           }
           console.log(emp1);
     // deleting a property from an object
     delete emp1.company;

