/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Brute Force
    const nonZero = [];
    for(let i = 0; i<nums.length;i++){
        if(nums[i] !== 0) {
            nonZero.push(nums[i])
        }
    }
    for(let i=0; i < nonZero.length; i++){
        nums[i] = nonZero[i]
    }
    for(let i = nonZero.length; i<nums.length; i++){
        nums[i] = 0
    }
};