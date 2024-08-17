/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // Brute force

    // Store sum for comparison with k

    let n = nums.length
    // let count =0;
    // for(let i=0;i<n;i++) {
    //  let sum = 0;
    //     for(let j= i; j<n;j++){
    //        sum = sum + nums[j]
    //        if(sum === k) {
    //         count++;
    //        }
    //     } 
    // }
    // return count;

    const mp = new Map()
    mp.set(0, 1)
    let count = 0;
    // 3, 1, 2, 4.   k = 6
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        const rem = sum - k
        if (mp.has(rem)) {
            count += mp.get(rem)
        }

        mp.set(sum, (mp.get(sum) || 0) + 1)


    }
    return count;
};