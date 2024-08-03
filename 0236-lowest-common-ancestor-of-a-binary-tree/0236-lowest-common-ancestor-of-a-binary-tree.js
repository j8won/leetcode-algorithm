/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ancestors = {};

    const findAncestors = (node, anc = []) => {
        if (node?.val === null) return;
        anc = [...anc, node];
        ancestors[node?.val] = anc;
        node.left !== null && findAncestors(node.left, anc);
        node.right !== null && findAncestors(node.right, anc);
    }

    findAncestors(root);

    // console.log(ancestors);
    // console.log(p)
    // console.log(ancestors[p.val].map(x => x.val));
    // console.log(ancestors[q.val]);

    let pAnc = ancestors[p.val], qAnc = ancestors[q.val];
    console.log(pAnc);
    console.log(qAnc)
    let shortLen = Math.min(pAnc?.length, qAnc?.length);

    let answer;

    for (let i=0; i<shortLen; i++) {
        console.log(pAnc[i])
        if (pAnc[i].val === qAnc[i].val) {
            answer = pAnc[i];
        }
    }
    
    return answer;
};