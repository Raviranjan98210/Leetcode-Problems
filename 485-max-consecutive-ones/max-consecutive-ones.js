/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0; 
    let i=0,j=1;
[1,1]
    if(nums.length === 1) return nums[0]
    while(j < nums.length) {
        if(nums[i] === 1) {
            while(nums[j] === 1) {
                j++;
            }
            max = Math.max(max,j-i)
             i = j;
             j++;

        }else {
            i++;
            j++;
            if(j>= nums.length) {
                return Math.max(max,nums[i])
            }
        }

    }
    return max;
};