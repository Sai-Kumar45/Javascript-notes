// Array methods

//  1.push-->to add one element at the end of the array
let cricketTeams = ["IND", "ENG", "RSA", "AFG", "NZ", "WI", "AUS"];
cricketTeams.push("PAK");
console.log(cricketTeams);

//  2.pop-->to remove one element at the end of the array
cricketTeams.pop();
console.log(cricketTeams);

//  3.shift-->to remove first element in the array
cricketTeams.shift();
console.log(cricketTeams);

//  4.unsift-->to add one element at the starting of an array
cricketTeams.unshift("IND");
console.log(cricketTeams);

//   5.Splice--to add or remove elements at any position in a arrays
// syntax===> splice(position of operation,No.of elementts to delete,new values)
cricketTeams.splice(1, 2);
console.log(cricketTeams);
cricketTeams.splice(1, 3, "SL", "BAN", "WI");
console.log(cricketTeams);

//   6.Delete-->to delete the value not the position of an element in an array
// delete cricketTeams[1];
// console.log(cricketTeams);

//   7.slice-->to create a sub array of a given array
let myfavteams = cricketTeams.slice(0, 3);
console.log(myfavteams);

//   8.concat-->to add two array
let newteams = ["USA", "NED", "IRELAND"];
let res = cricketTeams.concat(newteams);
console.log(res);

//  9.Sort-->to sort the array based on dictionary format
let ascOrder = cricketTeams.sort();
console.log(ascOrder);

// to reverse an array we use .reverse() method
let desOrder = cricketTeams.sort().reverse();
console.log(desOrder);

// sort the array of numbers
// usimg  functions
let nums = [5, 6, 2, 8, 9, 1, 23, 46];
let ord = nums.sort(function (a, b) {
  return a - b;
});
console.log(ord);

// to print in descending order
let numbers = [21, 3, 4, 65, 34, 12, 90];
let desOrd = numbers.sort(function (a, b) {
  return b - a;
});
console.log(desOrd);
