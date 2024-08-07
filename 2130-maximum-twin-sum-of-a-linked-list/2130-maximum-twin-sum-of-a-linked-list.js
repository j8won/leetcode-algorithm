/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let nextNode, prev = null;
    while (slow !== null) {
        nextNode = slow.next;
        slow.next = prev; 
        prev = slow;
        slow = nextNode;
    }

    let start = head;
    let max = 0;
    while (prev !== null) {
        max = Math.max(max, start.val + prev.val);
        start = start.next;
        prev = prev.next;
    }
    return max;
};