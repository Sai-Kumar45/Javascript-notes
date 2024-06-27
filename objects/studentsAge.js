function student(studentName, age) {
  this.studentName = studentName;
  this.age = age;
}
let std1 = new student("Alice", 17);
let std2 = new student("Bob", 19);
let std3 = new student("Charlie", 18);

let students = [std1, std2, std3];

let newstd = students.map((s) => {
  return {
    studentName: s.studentName,
    age: s.age,
    isAdult: s.age >= 18,
  };
});
console.log(newstd);
