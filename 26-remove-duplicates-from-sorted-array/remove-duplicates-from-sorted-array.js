/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let preNum = nums[0];
    // const temp = [preNum]
    // for(let i = 1;i<nums.length ; i++ ) {
    //     if(nums[i] !== preNum) {
    //         preNum = nums[i];
    //         temp.push(nums[i])
    //     }
    // }
    // for(let i=0; i<temp.length; i++) {
    //     nums[i]=temp[i]
    // }
    // return temp.length


    //-------------- Optimal approach ------------

     let k = 1;


  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};