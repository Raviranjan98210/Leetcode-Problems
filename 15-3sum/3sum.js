/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 // Brute force approach
       const n = nums.length
   
    // let st = new Set();
    // let ans = []


    // // check all possible triplets:
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         for (let k = j + 1; k < n; k++) {
    //             if (nums[i] + nums[j] + nums[k] === 0) {
    //                 let temp = [nums[i], nums[j], nums[k]];
    //                 temp.sort((a, b) => a - b);
    //                 ans.push(temp);
    //             }
    //         }
    //     }
    // }

    // //store the set in the answer:
    // let set  = new Set(ans.map(JSON.stringify));
    // ans = Array.from(set).map(JSON.parse);
    // return ans;

    // Optimal

    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        // remove duplicates:
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        // moving 2 pointers:
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [nums[i], nums[j], nums[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return ans;
};