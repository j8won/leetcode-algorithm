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
var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    let oddHead = new ListNode(0), evenHead = new ListNode(0);
    let oddTail = oddHead, evenTail = evenHead;
    let idx = 1;
    while (head) {
        if (idx % 2 === 0) {
            evenTail.next = head;
            evenTail = evenTail.next;
        } else {
            oddTail.next = head;
            oddTail = oddTail.next;
        }

        head = head.next;
        idx++;
    }

    evenTail.next = null;
    oddTail.next = evenHead.next;

    return oddHead.next;
};