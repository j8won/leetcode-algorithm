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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (!root) return 0;

    let cnt = 0;

    const helper = (node, sum) => {
        if (!node) return;
        sum += node.val;
        if (sum === targetSum) cnt++;
        helper(node.left, sum);
        helper(node.right, sum);
    }

    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);
        helper(node, 0);
        dfs(node.right);
    }

    dfs(root);
    return cnt;
};