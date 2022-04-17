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
    var dic = {};
    var bs = (node) => {
        if (!node) return;
        dic[node.val + ''] = node;
        bs(node.left);
        bs(node.right);
    };
    bs(root);

    let order = Object.keys(dic)
        .map((_) => Number(_))
        .sort((a, b) => a - b);

    var getNewNode = (n) => {
        if (n < order.length) return new TreeNode(order[n], null, getNewNode(n + 1));
        else return null;
    };

    let ans = new TreeNode(order[0], null, getNewNode(1));

    return ans;
};
