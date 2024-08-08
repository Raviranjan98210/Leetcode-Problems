/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // -------- Approach-1 ------------
    // step: 1 take hasmap 
    //check if map has current element if yes then increase the count 
    // else insert the number with count 1
    //
//     const countMap = new Map();

//    for(let i=0;i<nums.length; i++) {
//         if(countMap.has(nums[i])) {
//             let count = countMap.get(nums[i]) + 1 
//             countMap.set(nums[i],count)
//         }else {
//             countMap.set(nums[i],1)
//         }
//     }
    
//     for([key,value] of countMap) {
//        if(value > nums.length/2) {
//            return key;
//        }
//     }

//     return elm;

    // Moore’s Voting Algorithm
    let count = 0;
    let elm;
    const n = nums.length

    for(let i=0;i<n; i++) {
        if(count === 0 ) {
            elm=nums[i]
            count++;
            
        }else if(nums[i]=== elm){
            count++;
        }else {
            count--;
        }
    }
    return elm;
    
};