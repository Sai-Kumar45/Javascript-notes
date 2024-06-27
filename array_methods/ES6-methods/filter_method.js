/* filter-->filter is used to iterte and apply one function to array of elements,
             but it will return the values to new array  if given predicate is satisfied*/

// print even numbers of given array
let arr = [25, 16, 3, 7, 8, 9, 12, 49];
let even_arr = arr.filter((a) => a % 2 == 0);
console.log(even_arr);

// print square root of numbers in an array

let arr2 = [2, 4, 5, 7, 9, 16, 24, 25];
let sum = 0;
let arr_sqrt = (a) => {
  let num = Math.sqrt(a);
  sum = Math.floor(num * num);
  return sum == num;
};
let newarr = arr2.filter(arr_sqrt);
console.log(newarr);
