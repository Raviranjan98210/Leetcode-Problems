/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return
    let uniq = 0
    let uniqCount = 1

    for(let i = 1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[uniq + 1] = nums[i]
            uniq++
            uniqCount += 1
        }
    }   
    return uniqCount
};