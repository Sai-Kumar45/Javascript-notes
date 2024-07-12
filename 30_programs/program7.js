//7. Write a JavaScript program to print student details who got highest marks, create objects using class

//creating a class and initializing the properties or variables of a class in constructor
class studentdata {
  constructor(studentName, rollNumber, marks) {
    this.studentName = studentName;
    this.rollNumber = rollNumber;
    this.marks = marks;
  }
}

//creating objects ofa class

// let student1 = new studentdata("alice", 1, 82);
// let student2 = new studentdata("bob", 2, 86);
// let student3 = new studentdata("sam", 3, 67);
// let student4 = new studentdata("john", 4, 89);
// let student5 = new studentdata("antony", 1, 84);

let students = [
  new studentdata("alice", 1, 82),
  new studentdata("bob", 2, 86),
  new studentdata("sam", 3, 67),
  new studentdata("john", 4, 89),
  new studentdata("antony", 1, 84),
];
