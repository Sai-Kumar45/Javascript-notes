// 2. Write a JavaScript program to find the average of elements in an array of numbers.
let arr = [3, 6, 4, 9, 21, 17, 2, 34, 15];
let arr_sum = arr.reduce((a, b) => a + b);
let avg = arr_sum / arr.length;
console.log(avg.toFixed(2));
