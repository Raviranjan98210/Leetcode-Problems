/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k= 0;
    let count = 1
    // [0,0,1,1,1,1,2,3,3]
                2
    //          k     i
    // 1
    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1] && count<2){
            nums[k+1] = nums[i]
            k++
            count++
        }else if(nums[i] !== nums[k] && count<=2){
            nums[k+1] = nums[i]
            k++
            count=1
        }
    }
    return k+1
};