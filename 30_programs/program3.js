// 3. Write a JavaScript program to print sum of even numbers from given array

let arr = [2, 6, 7];
let sum_arr = arr.filter((a) => a % 2 == 0).reduce((a, b) => a + b);
console.log(`sum of even numbers in array is ${sum_arr}`);
