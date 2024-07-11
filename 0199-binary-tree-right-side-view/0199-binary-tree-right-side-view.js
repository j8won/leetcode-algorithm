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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let answer = [root.val];

    let q = [root];
    while (q.length > 0) {
        const level = [];

        q.forEach(node => {
            node.left && level.push(node.left);
            node.right && level.push(node.right);
        })

        level?.at(-1) && answer.push(level.at(-1).val);
        q = level;
    }

    return answer;

};