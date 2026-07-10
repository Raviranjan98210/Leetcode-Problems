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
    let st = new Set()
    let current = head;
    while(current){
        if(st.has(current)) return true
        st.add(current)
        current = current.next
    }
    return false
};