/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l3 = new ListNode()
    l3Head = l3

    while (list1 && list2) {
        if (list1.val < list2.val) {
            let newNode = new ListNode(list1.val)
            l3.next = newNode
            l3 = l3.next
            list1 = list1.next
        } else {
            let newNode = new ListNode(list2.val)
            l3.next = newNode
            l3 = l3.next
            list2 = list2.next
        }
    }

    while (list1) {
        let newNode = new ListNode(list1.val)
        l3.next = newNode
        l3 = l3.next
        list1 = list1.next
    }
    while (list2) {
        let newNode = new ListNode(list2.val)
        l3.next = newNode
        l3 = l3.next
        list2 = list2.next
    }
    return l3Head.next
};