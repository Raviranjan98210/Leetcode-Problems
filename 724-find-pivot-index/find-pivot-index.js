/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const psum = [nums[0]]
    const n =nums.length
    for(let i=1;i<n;i++) {
        const el = psum[i-1] + nums[i]
        psum.push(el)
    }

    for(let i=0; i<n; i++) {
        const  right = psum[n-1]-psum[i]
         const  left =psum[i-1]
        if(i===0 && right===0) return 0;
        if(i=== n-1 && left===0) return n-1;
        if(left === right) {
            return i;
        }

    }
    return -1;
};