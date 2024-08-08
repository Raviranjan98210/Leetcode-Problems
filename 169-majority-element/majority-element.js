/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // take hasmap 
    const countMap = new Map();

   for(let i=0;i<nums.length; i++) {
        //check if map has current element if yes then increase the number 
        // else insert the number with count 1

        if(countMap.has(nums[i])) {
            let count = countMap.get(nums[i]) + 1 
            countMap.set(nums[i],count)
        }else {
            countMap.set(nums[i],1)
        }
    }
    
    for([key,value] of countMap) {
       if(value > nums.length/2) {
           return key;
       }
    }

    return elm;
    
};