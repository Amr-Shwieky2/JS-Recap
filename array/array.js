const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 },
    ];
    
students.push({ name: "Amr", grade: 98 });
students.push({ name: "Alx", grade: 58 });
students.push({ name: "Jon", grade: 78 });

students.pop();

students.unshift({ name: "Jon", grade: 78 });

students.shift();


let OutstandingStudents = students.filter(student => student.grade >= 90);
// OutstandingStudents.map(student => console.log(student));

students.sort((a,b) => b.grade - a.grade);


let SquareGrades = students.map(student => student.grade ** 2);

let Total = students.reduce((counter, student) => {
    return counter + student.grade
}, 0);
// console.log(Total);

const Passing = students.every(student => student.grade >= 60);
// console.log(Passing);

const Failing = students.some(student => student.grade < 60);
// console.log(Failing);

