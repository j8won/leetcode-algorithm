/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let cur = head.next;
    let sum = 0;
    let dummy = new ListNode();
    let answer = dummy;

    while (cur !== null) {
        if (cur.val !== 0){
            sum += cur.val;
        } else {
            answer.next = new ListNode(sum);
            answer = answer.next;
            sum = 0;
        }
        cur = cur.next;
    }

    return dummy.next;
};