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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const q = [root];

    while (q.length > 0) {
        let node = q.shift();
        if (node?.val === val) {
            return node;
        }

        node.left && q.push(node.left);
        node.right && q.push(node.right);
    }

    return null;
};