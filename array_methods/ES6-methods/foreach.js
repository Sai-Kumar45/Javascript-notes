/*Foreach-->it is used to iterate and apply one function to array of elements,
            it cannot create a new array,it will modify the existing array*/

// print numbers in an array and multiply each number with 2
let arr = [3, 5, 8, 12, 43, 26, 7, 2];
arr.forEach((a, ind) => (arr[ind] = a * 2));
console.log(arr);

arr.forEach(mulbytwo);
function mulbytwo(a) {
  console.log(a * 2);
}
