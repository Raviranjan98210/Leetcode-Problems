/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const pos=[]
  const neg = []

  for(let i=0;i<nums.length;i++){
    if(nums[i]>0) {
        pos.push(nums[i])
    }else{
      neg.push(nums[i])  
    }
  }
  for(let i=0;i<nums.length/2;i++){
    nums[2*i] = pos[i]
    nums[2*i+1] = neg[i]
  }
  return nums;
};