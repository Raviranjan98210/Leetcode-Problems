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
    
    let curr = head;
    const list = new Set()
    while(curr){
        if(list.has(curr)){
            return true;
        }
        list.add(curr)
        curr = curr.next;
    }

    return false;
};