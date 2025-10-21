/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = ""
    let curr = head;
    while(curr){
        str += curr.val
        curr = curr.next
    }
    
    let i = 0; 
    let j = str.length-1;

    while(i <= j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
};