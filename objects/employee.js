// print the names in Ascending order based on salary given by the user
const employee = [
  { name: "john", salary: 60000 },
  { name: "alice", salary: 50000 },
  { name: "bob", salary: 80000 },
];
let emp_salary = 40000;
let empName = [];
employee.forEach((a) => {
  if (a.salary > emp_salary) {
    empName.push(a.name);
  }
});
console.log(empName.sort());

employee.sort((a, b) => a.name.localeCompare(b.name));
emp = employee.filter((c) => c.salary > emp_salary);
for (let e of emp) {
  console.log(e.name);
}
