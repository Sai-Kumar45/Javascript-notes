// print the minumum number of given array

// using forof method for better time complexity
let arr = [7, 43, 21, 42, 8, 7, 6, 2];
let min_arr = arr[0];

for (let n of arr) {
  if (n < min_arr) {
    min_arr = n;
  }
}
console.log(min_arr);

// using for loop
let arr2 = [5, 9, 26, 33, 2, 9, 2];
let min_arr2 = arr2[0];

for (i = 1; i < arr2.length; i++) {
  arr2[i] < min_arr2;
  min_arr2 = arr2[i];
}
console.log(min_arr2);

// print maximum number of given array

// using forof method for better time complexity
let maxiarr = [4, 6, 9, 3, 24, 54, 67, 87, 87];
let max_arr2 = maxiarr[0];
for (let n of maxiarr) {
  if (n > maxiarr[0]) {
    max_arr2 = n;
  }
}
console.log(max_arr2);

// using for loop
let maxarr = [3, 2, 8, 23, 43, 12, 7, 432];

let max_arr = maxarr[0];
for (i = 1; i < maxarr.length; i++) {
  if (maxarr[i] > max_arr) {
    max_arr = maxarr[i];
  }
}
console.log(max_arr);
