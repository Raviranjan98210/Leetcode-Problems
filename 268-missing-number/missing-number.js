/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let temp ;
    nums.sort((a,b)=>a-b)
    for(let i=0;i<=n;i++) {
        console.log(nums[i],i)
        if(nums[i]!==i)  {
            temp = i
            break;
        }
    }

    return temp;
};