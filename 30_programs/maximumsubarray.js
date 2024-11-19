function arr(a) {
  var maxsum = -Infinity;
  var sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (maxsum < sum) {
      maxsum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxsum;
}
var array = [-2, -1, 0, -2, 3, 1, -1, 6];
var res = arr(array);
console.log(res);
