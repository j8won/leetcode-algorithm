/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prev = head, cur = head.next, next = head.next.next;

    let index = 0;
    let firstPoint = -1, lastPoint = -1;
    let minD = Infinity, maxD = -Infinity;

    while(next) {

        if ((cur.val > prev.val && cur.val > next.val) || (cur.val < prev.val && cur.val < next.val)){
            if (firstPoint === -1) {
                firstPoint = index;
            } else {
                maxD = Math.max(maxD, index - firstPoint);
            }

            if (lastPoint !== -1) {
                minD = Math.min(minD, index - lastPoint);
            }

            lastPoint = index;
        }

        index++;
        prev = cur;
        cur = next;
        next = next.next;
    }

    return firstPoint !== lastPoint ? [minD, maxD] : [-1, -1];
};