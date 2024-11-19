// count the number of aruguments passed in the function

function countargs(...args) {
  return args.length;
}
var res = countargs(1, 2, 34, 5, 6);
console.log(res);

let arr = [3, 2, 1, 11];
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);
