//  write a javascript program to check given string is palindrome or not
function stringpalindrome(str) {
  var checkstr = str.split().reverse().join();
  if (checkstr === str) {
    return `given string is palindrome ${str}`;
  } else {
    return `${str} not a palindrome`;
  }
}
var res = stringpalindrome("saias");
console.log(res);
