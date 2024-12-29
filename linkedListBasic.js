class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    push(value) {
        const newNode = new Node(value)
 
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
           
        }else {
            
        this.tail.next = newNode;
        this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // 1 ->2 -> 3 -> 4 -> 5 
    //1 -> 2 -> 6 ->3 .....

    // insert(pos = 0 , value) {
    //     const node = new Node(value)
    //     let tempHead = this.head;
    //     if(pos === 0) {
    //       node.next = this.head
    //       this.head = node
    //         this.length++;
    //         return;
    //     }
    //     // if(pos === this.length+1) {
    //     //     this.tail.next = node;
    //     //     this.tail = node;
    //     //     this.length++;
    //     //     return;
    //     // }
    //     if(pos>length) {
    //         throw Error("Position is not valid")
    //     }
    //     for(let i=0; i<pos-1;i++) {
    //         if(tempHead.next){
    //              tempHead = tempHead.next
    //         }else {
    //             break;
    //         }
    //     }
    
    //   node.next  =  tempHead.next
    //   tempHead.next = node  
    //   this.length++;
    // }

    traverse() {
        let current = this.head
        let l = ""
        while(current) {
          l = l + current.value + "-->"
            current = current.next
        }
        console.log(l+"NULL")
    }

    pop() {
        let current = this.head;
        if(!this.head){
            console.log("Nothing to pop")
           return undefined 
        }
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length--;
            return;
        }
        let prev = current;
     
        while(current.next){
            prev = current;
            current= current.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) {
           console.log("Nothing to remove") 
            return undefined
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null
        }
        return this.head;
    }

    unshift(value) {
        const node = new Node(value)
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(pos) {
        if(!this.head) {
            return null;
        }
        if( pos< 0 || pos>=this.length){
            return null
        }

        let current = this.head;
        
        for(let i=0; i<pos; i++) {
            current = current.next;
        }

        return current;
       
    }

    set(pos,value) {
       const foundNode =  this.get(pos)
        if(foundNode) {
            foundNode.value = value;
        }else{
            console.log("No Node found for this position")
        }
        
    }

    insert(pos=0,value) {
        if(pos< 0 || pos > this.length){
            console.log("Invalid position")
            return 
        }
        if(pos === 0) {
            this.unshift(value)
        }else
        if(pos=== this.length){
            this.push(value)
        }else {
            const prevNode = this.get(pos-1)
            const nextNode = prevNode.next;
            const newNode = new Node(value)
            newNode.next = nextNode;
            prevNode.next = newNode;
            this.length++;
        }
        
    }
       
    remove(pos=0) {
        if(pos<0 || pos>=this.length) {
            console.log("invalid position")
            return
        }
        if(pos === 0) {
            this.shift()
        }
        else if(pos === this.length-1) {
            this.pop()
        }else{
             const prevOfNodeToBeDelted =  this.get(pos-1)
            const toBeRemovedNode = prevOfNodeToBeDelted.next;
             prevOfNodeToBeDelted.next = toBeRemovedNode.next
        }

       this.length--;
       return toBeRemovedNode
    }

    reverse() {
        if(!this.head){
            console.log("there is no node available")
            return
        }
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let nextNode;

        while(current){
            nextNode = current.next
            current.next = prev;
            prev = current;
            current = nextNode;
        }

       return this;
    }
}

const list = new LinkedList()

list.push(10);
list.push(11)
list.push(12) 
list.push(13)
// list.insert(1,14)
// list.insert(0,17)
// list.insert(5,17)
// list.pop()
// list.pop()
// list.shift()
// list.unshift(9)
// console.log("Element",list.get(4))
// list.set(2,"Ravi")
// list.insert(list.length,"Ranjan")
// list.remove(list.length)
list.reverse()
list.traverse()
console.log(list)
