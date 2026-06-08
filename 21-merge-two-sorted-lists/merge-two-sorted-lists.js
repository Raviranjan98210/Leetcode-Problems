/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // let l3 = new ListNode()
    // l3Head = l3

    // while (l1 && l2) {
    //     if (l1.val < l2.val) {
    //         let newNode = new ListNode(l1.val)
    //         l3.next = newNode
    //         l3 = l3.next
    //         l1 = l1.next
    //     } else {
    //         let newNode = new ListNode(l2.val)
    //         l3.next = newNode
    //         l3 = l3.next
    //         l2 = l2.next
    //     }
    // }
    // if(l1){
    //     l3.next = l1
    // }
    // if(l2){
    //     l3.next = l2
    // }

    // return l3Head.next

    // Approach - 2 (no need of l3) 

    let start = new ListNode()
    let curr = start

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            curr = curr.next
            l1 = l1.next
        } else {
            curr.next = l2
            curr = curr.next
            l2 = l2.next
        }
    }
    if(l1){
        curr.next = l1
    }
    if(l2){
        curr.next = l2
    }

    return start.next

};