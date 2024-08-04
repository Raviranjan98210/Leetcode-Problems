/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;

    // approach -1
    // let temp ;

    // nums.sort((a,b)=>a-b)
    // for(let i=0;i<=n;i++) {
    //     console.log(nums[i],i)
    //     if(nums[i]!==i)  {
    //         temp = i
    //         break;
    //     }
    // }

    // return temp;


    // Approach -2 (summation of n natural number)
    const sum = (n*(n+1))/2
    let sum1=0;
    for(let i=0; i<n;i++){
        sum1 += nums[i]
    }

   return sum-sum1


    //Approach - 3 (using XOR) -> do it when revising

};