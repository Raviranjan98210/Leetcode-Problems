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
    let cur = head;
    let length=0;
    while(cur){
        length++;
        cur = cur.next
    }
    let tempHead = head;
    let prevNodeToDelete = length - n
    if(prevNodeToDelete===0){
        head = head.next
    }

   for(let i = 1 ; i< prevNodeToDelete; i++ ){
        tempHead = tempHead.next
   }
   
    console.log(tempHead)
    if(tempHead.next) {

    }
    // console.log(tempHead?.next?.next)
   tempHead.next = tempHead?.next?.next
   return head;

};