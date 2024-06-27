// print sum of even numbers in a array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newarr = arr.filter((a) => a % 2 == 0).reduce((a, b) => a + b);
console.log(newarr);
