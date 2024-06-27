/* findIndex-->to find the index of an element in an array if the given condition is true*/

// find the index of an element in array where element is positive

let arr = [1, 3, 4, 2, 6, 9, 13];
let new_arr = arr.findIndex((a) => a % 2 == 0);
console.log(`the first even number of index is ${new_arr} `);
