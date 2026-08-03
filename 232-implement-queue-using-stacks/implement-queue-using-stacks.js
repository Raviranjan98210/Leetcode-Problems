
var MyQueue = function () {
    this.s1 = []
    this.s2 = []
};
//[]
// stack -> push,pop, top
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x)
};

// [1,2]
// //1
// //1
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const n = this.s1.length
    console.log(this.s1, "-- s1")
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop())
    }
    const f = this.s1.pop()
    const n1 = this.s2.length
    for (let j = 0; j < n1; j++) {
        this.s1.push(this.s2.pop())
    }
    return f
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const n = this.s1.length
    for (let i = 0; i < n - 1; i++) {
        this.s2.push(this.s1.pop())
    }
    const f = this.s1.pop()
    this.s1.push(f)
    const n1 = this.s2.length
    for (let j = 0; j < n1; j++) {
        this.s1.push(this.s2.pop())
    }
    return f
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return  this.s1.length === 0 
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */