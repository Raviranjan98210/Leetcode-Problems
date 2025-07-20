var Node = function(value) {
    this.val = value;
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
     if(index<0 || index >= this.size) return -1
     for(let i=0; i<index;i++){
        curr = curr.next
     }
    return curr.val;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val)
    node.next = this.head
    this.head = node
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new Node(val)
    let curr = this.head;
    if(!this.head) {
        this.head = node;
    }else {
        while(curr.next ) {
        curr = curr.next;
        }
        curr.next = node;
    }
   this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let curr = this.head;
    const node = new Node(val)

    if(index<0 || index > this.size) return

    if(index === 0){
        return this.addAtHead(val)
       
    }
    else if(index === this.size){
       return  this.addAtTail(val)
       
    }else {
         for(let i=0; i<index-1; i++){
                 curr = curr.next
        }
        node.next = curr.next;
        curr.next = node
        this.size++
    }
   
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.head;
    if(index < 0 || index>=this.size) return
    if(index === 0){
        this.head = this.head.next
    }
     else{
        for(let i=0; i<index-1; i++) {
            curr = curr.next
        }
        curr.next = curr.next.next
    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */