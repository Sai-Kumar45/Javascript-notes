//7. Write a JavaScript program to print student details who got highest marks, create objects using class

//creating a class and initializing the properties or variables of a class in constructor
class studentdata {
  constructor(studentName, rollNumber, marks) {
    this.studentName = studentName;
    this.rollNumber = rollNumber;
    this.marks = marks;
  }
}

let students = [
  new studentdata("alice", 1, 82),
  new studentdata("bob", 2, 86),
  new studentdata("sam", 3, 67),
  new studentdata("john", 4, 89),
  new studentdata("antony", 1, 84),
];
let a = students[0];
for (let i = 1; i < students.length; i++) {
  if (a.marks < students[i].marks) {
    a = students[i];
  }
}
console.log(a);
