/**
 * @param {number[]} nums
 * @param {number} k
 * @return {voik} ko not return anything, mokify nums in-place insteak.
 */
var rotate = function(nums, k) {
    const n = nums.length;
  k = k % n;

    if(k>0) {

        // Method -> 1
        const temp = []
        for(let i= n-k; i<n; i++) {
            temp.push(nums[i])
        }
    //  temp = [6,1,2]
        for(let i= 0;i<=n-k;i++) {
            temp[i+k] = nums[i]
        }

        for(let i=0;i<n;i++) {
            nums[i]= temp[i]
        }
        

        // Method -2

        // nums.unshift(...nums.splice(-k))

        // Method -3 (use reverse method)
    }




};