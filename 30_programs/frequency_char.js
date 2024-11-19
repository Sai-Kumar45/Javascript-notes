// print the frequency of char in given input string
function frequency_char(str) {
  if (!str) {
    return "invalid input";
  }
  let res = "";

  let count = 1;
  let sort_string = str.split("").sort();
  let sort_str = sort_string.join("");
  for (let i = 0; i < sort_str.length; i++) {
    if (sort_str[i] === sort_str[i + 1]) {
      count++;
    } else {
      res += sort_str[i] + count;
      count = 1;
    }
  }
  return res;
}
var str = "ababac";
var res = frequency_char(str);
console.log(res);
