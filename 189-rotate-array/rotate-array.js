/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    const  d = k % n;

    if(k>0) {
        const temp = []
        for(let i= n-d; i<n; i++) {
            temp.push(nums[i])
        }

        for(let i= n-d-1;i>=0;i--) {
            nums[i+d] = nums[i]
        }

        for(let i=0;i<d;i++) {
            nums[i]= temp[i]
        }
    }

};