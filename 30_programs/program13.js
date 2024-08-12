// 14. Write a JavaScript program to find the second largest element in an array.
function secondlargestnum(arr) {
  var unique = [...new Set(arr)];
  unique.sort((a, b) => a - b).reverse();
  return unique[1];
}
var res = secondlargestnum([1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 5, 4, 9, 3, 2]);
console.log("second largest number is", res);
