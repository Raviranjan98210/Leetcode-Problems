/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var swap = function(nums,index1,index2) {
   const temp = nums[index1];
   nums[index1] = nums[index2];
   nums[index2] = temp;
 }
var sortColors = function(nums) {
    // Optimal approach
    const n = nums.length;
    let low = 0;
    let mid = 0;
    let high = n-1
    // [0,2,1,1,0]  => 

    // Dutch National flag algorithm. 
    //0 000 low-1 low 1111 mid-1  mid---Unsorted --high high+1 2222 n-1

    while(mid<=high) {
        if(nums[mid]===0) {
            swap(nums,mid,low)
            low++;
            mid++;
        }else if(nums[mid]===1) {
            mid++;
        }else {
            swap(nums,mid,high)
            high--;
        }

    }
    
};