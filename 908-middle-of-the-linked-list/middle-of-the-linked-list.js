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
var middleNode = function(head) {
    // let current = head;
    // if(!current.next) return head;
    // let nextNode =  current.next

    // while(nextNode){
    //     nextNode = nextNode.next
    //     current = current.next;
    //     if(nextNode){
    //         nextNode = nextNode.next;
    //     }
       
    // }
    // return current;

    // ******* Better solution ********

    let slow= head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
};