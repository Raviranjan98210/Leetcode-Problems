/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let l=0; 
    let sum = 0;
    let max = 0;

    const freq = new Map();

    for(let r=0; r<nums.length; r++){
        sum += nums[r]
        freq.set(nums[r],(freq.get(nums[r]) || 0) + 1)
        if(r-l+1 === k) {
            if(freq.size === k){
             max = Math.max(max,sum)
            }
            sum = sum - nums[l]
            freq.set(nums[l],freq.get(nums[l])-1)

            if(freq.get(nums[l])===0) freq.delete(nums[l])
            l++;
        }
       
    }
    return max;

};