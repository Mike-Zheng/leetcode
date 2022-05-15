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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    let dic = {};

    const dfs = (node, dep) => {
        if (!node) {
            return;
        }

        if (!dic[dep]) {
            dic[dep] = 0;
        }

        dic[dep] += node.val;

        dfs(node.left, dep + 1);
        dfs(node.right, dep + 1);
    };

    dfs(root, 0);

    let maxDep = Object.keys(dic).reduce((acc, item) => Math.max(acc, item), 0);

    return dic[maxDep];
};
