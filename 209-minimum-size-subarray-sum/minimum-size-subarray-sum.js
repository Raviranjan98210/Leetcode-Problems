/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // sum >= target (this is the goal)
    // return 0 if no subarray found

    let result = Infinity
    let low = 0
    let high = 0
    let n = nums.length
    let sum = 0
    while(high< n){
        sum = sum + nums[high]
        // now we have got the first sum we will check if it is >= target if it is true then minimize the window size 
        while(sum >= target){
            //store the subarray size
            let size = high-low+1
            result = Math.min(result,size)
            low++
            sum = sum - nums[low-1]
        }
        high++
    }
    return result !== Infinity ? result : 0
};