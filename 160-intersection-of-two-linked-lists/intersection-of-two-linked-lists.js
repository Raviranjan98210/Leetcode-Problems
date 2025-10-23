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

// approach-1
    // const nodeSet = new Set();

    // while(headA){
    //       nodeSet.add(headA);
    //       headA = headA.next;
    // }
    // while(headB){
    //      if(nodeSet.has(headB)) return headB;
    //       headB = headB.next;
    // }
    // return null;

// Approach-2
    let pA = headA;
    let pB = headB;

    while(pA != pB){
        pA = pA.next;
        pB = pB.next;
        
        if(pA === pB) return pA;
        if(!pA){ pA = headB;}
        if(!pB) {pB = headA;}

        
    }
    return pA;
};