/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    let index = -1;
    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index = i;
            break;
        }

    }
    if(index === -1){
        return nums.reverse()
    }

    for(let i=n-1;i>index;i--) {
        if(nums[i]>nums[index]) {
           [nums[i],nums[index]]= [nums[index],nums[i]]
           break;
        }
    }

   return nums.splice(index+ 1, nums.length - index- 1, ...nums.slice(index+ 1).reverse());

};