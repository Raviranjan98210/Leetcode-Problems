/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s = new Set()
    let curr = head;
    while(curr){
        if(s.has(curr)) return true
        s.add(curr)
        curr = curr.next
    }
    return false
};