/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  var nodes = path.split("/");
  var sta = [];
  for (let i = 0; i < nodes.length ; i++) {
    switch (nodes[i]) {
      case "":
      case ".":
        break;
      case "..":
        sta.pop();
        break;
      default:
        sta.push(nodes[i]);
        break;
    }
  }

  return "/" + sta.join("/");
};
