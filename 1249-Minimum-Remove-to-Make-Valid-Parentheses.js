
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  var sta = [];
  var sr = s.split("");
  for (let i = 0; i < sr.length; i++) {
    if (sr[i] == "(") {
      sta.push(i);
    }
    if (sr[i] == ")") {
      if (sta.length > 0) {
        sta.pop();
      } else {
        sr[i] = "*";
      }
    }
  }

  for (let j = 0; j < sta.length; j++) {
    sr[sta[j]] = "*";
  }

  return sr.join("").replace(/\*/g, "");
};
