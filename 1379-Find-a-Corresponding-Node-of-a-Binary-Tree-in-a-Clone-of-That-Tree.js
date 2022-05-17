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
    let output;
    const dfs = (node) => {
        if (!node) return;
        if (node.val == target.val) output = node;
        dfs(node.left);
        dfs(node.right);
    };

    dfs(cloned);
    return output;
};
