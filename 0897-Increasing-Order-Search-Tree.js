/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  var list = [];
  var bs = (node) => {
    if (!node) return;
    bs(node.left);
    list.push(node.val);
    bs(node.right);
  };
  bs(root);

  var newNode = (n) => {
    if (n < list.length)
      return new TreeNode(list[n], null, newNode(n + 1));
    else return null;
  };

  let ans = new TreeNode(list[0], null, newNode(1));

  return ans;
};
