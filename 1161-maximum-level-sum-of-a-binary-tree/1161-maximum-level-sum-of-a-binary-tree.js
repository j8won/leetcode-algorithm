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
var maxLevelSum = function (root) {
    if (!root) return 0;

    let q = [root];
    let curLevel = 0, level = 0;
    let max = -Infinity;

    while (q.length > 0) {
        curLevel++;

        let levelSum = 0;
        let curLevelSize = q.length
        for (let i = 0; i < curLevelSize; i++) {
            const node = q.shift();
            levelSum += node.val;
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }

        if (levelSum > max) {
            level = curLevel;
            max = levelSum;
        }
    }

    return level;
};