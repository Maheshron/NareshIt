// Hello World 
let greeting:string = "hello world" ;
console.log(greeting);
document.querySelector(selectors:'#display').innerHTML = greeting;

// Variables Creation in TypeScript
 let num1:number = 10;
 let num2:number = 20;
 let result:string = ' ';
 function findMin(a:number,b:number):number{
     return Math.min(a,b);
 }
result = 'The Smallest value is : ' + findMin(num1,num2);
console.log(result);
 document.querySelector(selectors:'#display').innerHTML = result;
