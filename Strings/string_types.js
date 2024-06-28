/*  String can be create in two ways
    1.string literal
    2.string with new reference*/

let str1 = "Hello"; //type of is string type
let str2 = new String("Hello"); //type of is object
// lets convert object to string and compare it data type and value
console.log(str1 === str2.toString());
