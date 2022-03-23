/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  var step = 0;
  while (startValue != target) {
    if (target < startValue) {
      target = target + 1;
    } else if (target % 2 == 0) target = target / 2;
    else target = target + 1;

    step++;
  }

  return step;
};
