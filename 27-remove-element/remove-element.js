/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 let validNumPos = 0;
 for(let i=0; i<nums.length; i++){
    if(nums[i] !== val){
        nums[validNumPos] = nums[i]
        validNumPos += 1
    }
 }

 return validNumPos
};