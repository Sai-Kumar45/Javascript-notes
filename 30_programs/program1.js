// 1. write a JavaScript program to print difference between biggest and smallest number of an array
let arr = [3, 6, 4, 9, 21, 17, 2, 34, 15];
let min_arr = arr[0];
let max_arr = arr[0];
for (i = 1; i < arr.length; i++) {
  if (arr[i] < min_arr) {
    min_arr = arr[i];
  }
  if (arr[i] > max_arr) {
    max_arr = arr[i];
  }
}
let diff = max_arr - min_arr;
console.log(diff);

// using sort method
arr.sort((a, b) => a - b);
let dif = arr[arr.length - 1] - arr[0];
console.log(dif);
