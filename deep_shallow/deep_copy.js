// deep copy shallow copy
// JSON.parse(json.stringify(variable_name))

const a = [
  { name: "sai", age: 23, dept: "EEE" },
  { name: "indra", age: 24, dept: "EEE" },
];

const b = JSON.parse(JSON.stringify(a)); // deep copy
b[0].name = "muni";

console.log(a, b);
