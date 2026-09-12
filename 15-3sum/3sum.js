/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    // nums[i] +nums[j] + nums[k] = 0

    // nums[j] + nums[k] = - nums[i]

    //  nums[j] + nums[k] -> this we can get by two sum 
    // [-1,0,1,2,-1,-4]

    // [-4,-1,-1,0,1,2]


    let n = nums.length
    nums.sort((a,b)=> a-b)
    const result = []
    for (let i = 0; i < n - 2; i++) {
        if(i>0 && nums[i]===nums[i-1]){
            continue
        }
        let target = -1 * nums[i]
        let left = i+1
        let right = n-1

        while(left < right){
            let sum = nums[left]+nums[right]
            if(sum === target){
              result.push([nums[i],nums[left],nums[right]])  
                left++
                right--
                while(nums[left]===nums[left-1]){
                    left++
                }
                while(nums[right]===nums[right+1]){
                    right--
                }
            }else if(sum<target){
                left++
            }else{
                right--
            }
        }

    }
    return result
};