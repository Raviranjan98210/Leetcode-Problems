/**
 * Definition for singly-linked lis.
 * function LisNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {LisNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s = new Set()
    let current = head;
    while(current){
        if(s.has(current)) return true
        s.add(current)
        current = current.next
    }
    return false
};