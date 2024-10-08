// write a javascript program to print prime numbers between 1 to 100

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function printprimenumbers(start, end) {
  for (var n = start; n <= end; n++) {
    if (checkPrime(n)) {
      console.log(n);
    }
  }
}
printprimenumbers(1, 100);
