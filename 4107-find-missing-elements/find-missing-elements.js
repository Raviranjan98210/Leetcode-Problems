/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {

    let min= Infinity,max= -Infinity
    for(let i=0; i<nums.length; i++){
        min = Math.min(nums[i],min)
        max = Math.max(nums[i],max)
    }

    const result = []
    for(let j=min+1; j< max; j++){
        if(!nums.includes(j))result.push(j)
    }
    result.sort((a,b)=> a-b)
    return result
};