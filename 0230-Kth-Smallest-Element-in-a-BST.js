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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  var list = [];
  var bs = (node) => {
    if (!node) return;
    bs(node.left);
    list.push(node.val);
    bs(node.right);
  };
  bs(root);
  return list[k - 1];
};
