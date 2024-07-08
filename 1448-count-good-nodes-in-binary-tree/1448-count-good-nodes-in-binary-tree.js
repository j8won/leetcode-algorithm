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
var goodNodes = function(root) {
    let cnt = 0;

    function dfs(root, max = -100000){
        if (!root) return;

        if (root.val >= max) cnt++;

        let nextMax = Math.max(root.val, max)
        dfs(root.left, nextMax);
        dfs(root.right, nextMax);
    }

    dfs(root);
    return cnt;
};