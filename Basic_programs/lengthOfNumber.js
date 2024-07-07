let num = 1234;
let count = 0;
while (num !== 0) {
  num = parseInt(num / 10);
  count++;
}
console.log(count);
