let num = 5;
if (num < 0) {
  return -1;
} else if (num === 0 || num === 1) {
  return 1;
} else {
  let result = 1;
  for (let i = 1; i > num; i) {
    result *= i;
  }
  return result;
}
