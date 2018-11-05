// Create a Student Interface , and printStudent function
interface Student{
    stdName : string;
    age:number;
    course : string;
    address : {
        city : string;
        state:string;
        country : string;

    }
}
function printStudent(student : Student){
    console.log(' Student Name :${student.stdName} ' +
        'Student age:${student.age}' +
        'Student Course : ${student.addresss.city}' +
        'Student City :${student.address.state}' +
        'Student Country: ${student.address.country}'

    );
}
let student:Student = {
    stdName:'john',
    age : 40,
    course:'java',
    address : {
        city:'hyderabad',
        state:'state',
        country:'India'
    }

};
printStudent(student);