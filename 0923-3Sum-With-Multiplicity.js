/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let times = 0;
  var hashMap = arr.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  for (let a of Object.keys(hashMap)) {
    for (let b of Object.keys(hashMap)) {
      var i = Number(a);
      var j = Number(b);
      var k = target - i - j;

      if (!hashMap[k]) continue;

      if (i == j && j == k)
        times += (hashMap[i] * (hashMap[i] - 1) * (hashMap[i] - 2)) / 6;
      else if (i == j && j != k)
        times += ((hashMap[i] * (hashMap[i] - 1)) / 2) * hashMap[k];
      else if (i < j && j < k) times += hashMap[i] * hashMap[j] * hashMap[k];
    }
  }

  return times % (1e9 + 7);
};
