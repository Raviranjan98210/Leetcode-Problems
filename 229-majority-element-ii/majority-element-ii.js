/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // Brute Force using map

    const map = new Map();
    const n = nums.length
    const res = []
    for(let i=0; i<n;i++) {
        map.set(nums[i],(map.get(nums[i]) || 0)+1)
    }
   
   for(let [key,value] of map) {
        if(value > (n/3)) {
            res.push(key)
        }
   }
   return res;
};