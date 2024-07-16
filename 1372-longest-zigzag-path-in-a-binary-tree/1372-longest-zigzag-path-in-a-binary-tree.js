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
var longestZigZag = function(root) {
    let maxLength = 0;
    const dfs = (node, isLeft, cnt) => {
        if (!node) return;
        maxLength = Math.max(maxLength, cnt);
        if (isLeft) {
            dfs(node.left, false, cnt+1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, cnt+1);
            dfs(node.left, false, 1);
        }
    }

    dfs(root.left, false, 1);
    dfs(root.right, true, 1);
    return maxLength
};