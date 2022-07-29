/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function (words, pattern) {
  const ps = (word) => {
    let list = [...word];
    let map = {};
    let id = 1;
    let ans = "";
    for (const char of list) {
      if (!map[char]) {
        map[char] = id;
        id++;
      }

      ans = ans + "/" + map[char];
    }

    return ans;
  };

  let ret = [];
  let p = ps(pattern);
  words.forEach((_) => {
    const wp = ps(_);
    if (wp === p) ret.push(_);
  });

  return ret;
};
