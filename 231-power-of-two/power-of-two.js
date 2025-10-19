/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
//    /* 
//    Approach 1
    if(n===1) return true
    let p = 1;
    while(p < n){
        p = p * 2 
        if(p === n) return true
    }
    return false;
    // */

    // Approach - 2 (using recursion)

    // base case
    // if(n===1) {return true}
    // else if(n<1 || n % 2 !==0){
    //     return false
    // }
    // return isPowerOfTwo(n/2)

};