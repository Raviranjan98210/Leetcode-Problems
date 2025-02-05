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
// **Approach 1: Length Calculation Method**  
// 1. First, traverse the linked list to calculate its total length (`L`).  
// 2. Determine the position of the target node from the **start** using `L - n`.  
// 3. Traverse the list again up to this position.  
// 4. Remove the node by updating the previous node’s `next` pointer.  
//  
// **Time Complexity:** O(N) (Two-pass traversal)  
// **Space Complexity:** O(1) (No extra space used)  
//  
// This approach is straightforward but requires two traversals, making it less optimal compared to the two-pointer technique.

//     let cur = head;
//     let length=0;
//     while(cur){
//         length++;
//         cur = cur.next
//     }
//     let tempHead = head;
//     let prevNodeToDelete = length - n
//     if(prevNodeToDelete===0){
//         head = head.next
//     }

//    for(let i = 1 ; i< prevNodeToDelete; i++ ){
//         tempHead = tempHead.next
//    }
   
//     console.log(tempHead)
//     if(tempHead.next) {

//     }
//     // console.log(tempHead?.next?.next)
//    tempHead.next = tempHead?.next?.next
//    return head;
//*********************************************************************** */
 // **Approach 2: Two-Pointer Technique**  
// We use two pointers, `slow` and `fast`, both initially pointing to a dummy node 
// that references the head of the linked list.  
//  
// **Step 1:** Move the `fast` pointer `n` steps ahead.  
// This creates a fixed gap of `n` nodes between `fast` and `slow`.  
//  
// **Step 2:** Move both `fast` and `slow` together until `fast` reaches the last node.  
// Because of the maintained gap, `slow` will be positioned **just before** the Nth node from the end.  
//  
// **Step 3:** Remove the target node by updating `slow.next` to skip it.  
// This ensures efficient deletion in a **single pass (O(N))** without needing to compute the length separately.  


let dummy = new ListNode(0,head)
let slow = dummy
let fast = dummy
for(let i=1; i<=n;i++){
    fast = fast.next
}

while(fast.next){
    fast = fast.next;
    slow = slow.next
}

slow.next = slow.next.next
return dummy.next

};