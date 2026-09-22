/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let low = 0
    const f = {
        0:0, 
        1:0 
    }
  
    let result = 0
    for(let high = 0; high< nums.length; high++){
        f[nums[high]]++
        let windowLen = high-low+1
        let flipCount =  f[0]

        while(flipCount > k){
            f[nums[low]]--
            low++
            windowLen = high-low+1
            flipCount = f[0]
        }
        result = Math.max(result,windowLen)
    }
    return result
};