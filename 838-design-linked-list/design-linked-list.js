
var Node = function(value) {
    this.value = value;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.head;
    if( index >= this.size) return -1;
    for(let i=0; i<index; i++){
        curr = curr.next
    }
    return curr.value;
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val)
    if(this.head === null) {
        this.head = newNode
    }else {
    // If linked list is not empty then
    let curr = this.head;
    while(curr.next !== null){
        curr = curr.next
    }
    curr.next = newNode
    }
    this.size++;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if(index > this.size) return ;
    if(index === 0){ 
        this.addAtHead(val)
        return
    } 

    if(index === this.size) {
        this.addAtTail(val)
        return
    }
    let curr = this.head;
    for(let i = 0; i<index-1; i++){
        curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.head;
    // Delete the first index 
    if( index >= this.size || index < 0 || this.head === null) return;
    if(index === 0){
        this.head = this.head.next
    }else {
        for(let i=0; i < index-1; i++){
            curr = curr.next
        }
        curr.next = curr.next.next
    }
    this.size--

};

// 7->2->2

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */