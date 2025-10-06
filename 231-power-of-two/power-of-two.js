/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===1) return true
    let p = 1;
    let _isPowerOfTwo = false
    while(p < n){
        p = p * 2 
        if(p === n){
            _isPowerOfTwo = true
            break
        }
    }
    return _isPowerOfTwo;
};