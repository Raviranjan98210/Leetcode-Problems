class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insertNode(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
            return;
        }

         // Inserting node using level traversal

        const queue = [this.root]

        while(queue.length) {
            const currentElm = queue.shift();
            
            if(!currentElm.left) {
                currentElm.left = node;
                return;
            }else {
                queue.push(currentElm.left)
            }
 
            if(!currentElm.right) {
                currentElm.right = node;
                return;
            }else {
                queue.push(currentElm.right)
            }
            
        }
        
    }

    preOrderTraversal(root) {
        if(!root) {
            return 
        }
        console.log(root.value)
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
        
        
    }

    inOrderTraversal(root){
        if(!root) {
            return;
        }
        this.inOrderTraversal(root.left)
        console.log(root.value)
        this.inOrderTraversal(root.right)
    }

    postOrderTraversal(root) {
        if(!root) {
            return;
        }
        this.postOrderTraversal(root.left)
        this.postOrderTraversal(root.right)
        console.log(root.value)
    }

    levelOrderTraversal(root) {
        const queue = [root]

        while(queue.length){
            const currentElm = queue.shift()
            console.log(currentElm.value)
            
            if(currentElm.left){
                queue.push(currentElm.left)
            }
            if(currentElm.right){
                queue.push(currentElm.right)
            }
        }
    }
   
}

const tree = new BinaryTree()
tree.insertNode(1)
tree.insertNode(2)
tree.insertNode(3)
tree.insertNode(4)
tree.insertNode(5)
tree.insertNode(6)
tree.insertNode(7)
// console.log(tree)
// tree.preOrderTraversal(tree.root)

// tree.inOrderTraversal(tree.root)
// tree.postOrderTraversal(tree.root)
tree.levelOrderTraversal(tree.root)

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

console.log(darkModeQuery)
