// 4. Write a JavaScript program to count number of duplicates elements of an array
var arr = [2, 5, 7, 9, 3, 2, 5, 21, 9, 14, 17, 22, 21];
var duplicates = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      duplicates.push(arr[i]);
    }
  }
}

console.log(duplicates);
