/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let sentinel = new ListNode()
    sentinel.next = head
    while(head){
        size += 1
        head = head.next
    }
    let prev = sentinel
    let prevPos = size-n
    
    for(let i=0; i< prevPos; i++){
        prev = prev.next
    }
    prev.next = prev.next.next

    return sentinel.next

};