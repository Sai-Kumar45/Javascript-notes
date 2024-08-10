// Write a JavaScript program to remove duplicate elements from an array.
function removeduplicates(arr) {
  var uniquearr = [];
  arr.forEach((ele) => {
    if (!uniquearr.includes(ele)) {
      uniquearr.push(ele);
    }
  });
  return uniquearr;
}
var res = removeduplicates([1, 2, 3, 3, 3, 4, 5, 6]);
console.log(res);
