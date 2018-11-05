function printStudent(student) {
    console.log(' Student Name :${student.stdName} ' +
        'Student age:${student.age}' +
        'Student Course : ${student.addresss.city}' +
        'Student City :${student.address.state}' +
        'Student Country: ${student.address.country}');
}
var student = {
    stdName: 'john',
    age: 40,
    course: 'java',
    address: {
        city: 'hyderabad',
        state: 'state',
        country: 'India'
    }
};
printStudent(student);
