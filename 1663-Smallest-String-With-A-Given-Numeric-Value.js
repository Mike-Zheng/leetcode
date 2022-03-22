var getSmallestString = function (n, k) {
  var ar = new Array(n).fill(1);
  var d = (k - ar.length) / 25;
  var c = (k - ar.length) % 25;
  let i = ar.length - 1;
  for (; i >= ar.length - d; i--) {
    ar[i] = 26;
  }
  ar[i] = ar[i] + c;
  var order = [..."abcdefghijklmnopqrstuvwxyz"];
  var ans = ar.reduce((a, _) => a + "" + order[_ - 1], "");
  return ans;
};
