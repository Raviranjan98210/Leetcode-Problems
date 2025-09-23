/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let actual = 0;
    const n = nums.length;
    const expected =(n*(n+1))/2

    for(let i=0; i<nums.length; i++){
        actual += nums[i]
    }
    return expected-actual;
};