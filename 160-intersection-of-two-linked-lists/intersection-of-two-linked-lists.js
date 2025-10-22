/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr1 = headA;
    let curr2 = headB;

    const nodeSet = new Set();

    while(curr1){
        if(nodeSet.has(curr1))return curr1;
          nodeSet.add(curr1);
          curr1 = curr1.next;
    }
    while(curr2){
         if(nodeSet.has(curr2)) return curr2;
         nodeSet.add(curr2);
          curr2 = curr2.next;
    }
    return null;
    
};