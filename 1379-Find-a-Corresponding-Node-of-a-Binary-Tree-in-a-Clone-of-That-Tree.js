/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    let dicCloned = {};

    const dfs = (node) => {
        if (!node) return;

        dicCloned[node.val] = node;
        dfs(node.left);
        dfs(node.right);
    };

    dfs(cloned);

    return dicCloned[target.val];
};
