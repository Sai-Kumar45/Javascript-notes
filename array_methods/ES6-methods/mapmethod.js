/* map--> map is used to ierate and apply one function to array of elements
        and we can create a new array */

// print numbers multiply by 2 of an array in new array

let arr = [2, 7, 9, 4, 7, 24, 52, 17];
let new_arr = arr.map((a) => a * 2);
console.log(new_arr);

// print true if number is even and false if number is not
let torf = arr.map((a) => a % 2 == 0);
console.log(torf);
