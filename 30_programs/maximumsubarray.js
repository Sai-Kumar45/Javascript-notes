function arr(a) {
  var maxsum = -Infinity;
  for (let i = 0; i < a.length; i++) {
    var sum = 0;
    for (let j = i; j <= i; j++) {
      sum += a[j];
      if (maxsum < sum) {
        maxsum = sum;
      }
    }
  }
  return maxsum;
}
var array = [-2, -1, 0, -2, 3, 1, -1, 6];
var res = arr(array);
console.log(res);
