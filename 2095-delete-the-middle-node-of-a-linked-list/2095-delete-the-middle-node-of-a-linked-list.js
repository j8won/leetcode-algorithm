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
var deleteMiddle = function(head) {
    let fast = head;
    let slow = head;
    let temp = null;

    while (fast && fast.next) {
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (temp) {
        temp.next = temp.next.next;
    } else {
        head = slow.next;
    }
    return head;
};