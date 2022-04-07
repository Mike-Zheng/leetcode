/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    var a = stones[0];
    var b = stones[1];
    stones.splice(0, 2);
    if (a != b) {
      stones.unshift(a - b);
    }
  }

  return stones[0] ? stones[0] : 0;
};
