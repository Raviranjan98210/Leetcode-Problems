/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0
    let right = nums.length-1
    let map  = new Map()
    for(let i=0; i<nums.length; i++){
        map.set(nums[i],i)
    }

    for(let i=0; i< nums.length;i++){
        let n = target- nums[i]
        if(map.has(n) && map.get(n)!==i){
            return [i,map.get(n)]
        }
    }
};