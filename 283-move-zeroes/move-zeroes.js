/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // will keep two pointer 
    //first that will hold the position where non-zero element should be placed
    // 2nd: iterator which keep iterating the array

    let nzPos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nzPos] = nums[i]
            nzPos++
        }
    }
    for (let j = nzPos; j < nums.length; j++) {
        nums[j] = 0
    }

};

