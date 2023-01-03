/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  const sp = strs.map((item) => item.split("").map((chr) => chr.charCodeAt(0)));
  const deltaT = sp[0].map((_, idx) => sp.map((item) => item[idx]));
  return deltaT.filter((item) => [...item].sort((a, b) => a - b).join("") !==item.join("")).length;
};
