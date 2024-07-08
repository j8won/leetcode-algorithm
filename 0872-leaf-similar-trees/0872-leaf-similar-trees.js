/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    function dfs(root, arr = []){
        if (!root) {
            return arr;
        }

        if (!root.left && !root.right) {
            arr.push(root.val);
        }

        dfs(root.left, arr);
        dfs(root.right, arr);
    }

    const leaf1 = [];
    const leaf2 = [];
    dfs(root1, leaf1);
    dfs(root2, leaf2);

    return JSON.stringify(leaf1) === JSON.stringify(leaf2)
};