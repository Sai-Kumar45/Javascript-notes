// write a javascript program to check given number is palindrome number or not
function checkpalindrome(num) {
  var temp = num;
  var p = "";
  while (temp != 0) {
    rem = temp % 10;
    p += rem;
    temp = Math.floor(temp / 10);
  }
  if (num.toString() === p) {
    return "Given number is palindrome " + num;
  } else {
    return "not a palindrome " + num;
  }
}
var result = checkpalindrome(123321);
console.log(result);
