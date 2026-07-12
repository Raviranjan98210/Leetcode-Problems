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
    let st = new Set()
    let current = head;
    while(current){
        if(st.has(current)) return true
        st.add(current)
        current = current.next
    }
    return false
};