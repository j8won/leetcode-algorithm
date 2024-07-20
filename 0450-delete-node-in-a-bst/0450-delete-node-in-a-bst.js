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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const min = (node) => {
        if (!node.left) return node.val;
        return min(node.left);
    }

    const dfs = (node, key) => {
        if (!node) return null;

        if (node.val > key) {
            node.left = dfs(node.left, key);
        } else if (node.val < key) {
            node.right = dfs(node.right, key);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            node.val = min(node.right);
            node.right = dfs(node.right, node.val)
        }

        return node;
    };

    return dfs(root, key)
};