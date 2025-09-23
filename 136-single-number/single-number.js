/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //   Brute Force
    const cmap = new Map();
    for(let i=0; i < nums.length; i++) {
        cmap.set(nums[i], (cmap.get(nums[i]) || 0 ) + 1  )
    }
    for(let i=0; i < nums.length; i++) {
       if( cmap.get(nums[i]) === 1) {
            return nums[i]
       }
    }
};