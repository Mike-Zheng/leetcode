/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function (pushed, popped) {
  var cur = 0;
  var sta = [];
  for (let i = 0; i < pushed.length; i++) {
    sta.push(pushed[i]);
    while (sta[sta.length - 1] === popped[cur] && cur < popped.length) {
      sta.pop();
      cur++;
    }
  }

  return sta.length===0;
};
