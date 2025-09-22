/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Brute Force
    // const nonZero = [];
    // for(let i = 0; i<nums.length;i++){
    //     if(nums[i] !== 0) {
    //         nonZero.push(nums[i])
    //     }
    // }
    // for(let i=0; i < nonZero.length; i++){
    //     nums[i] = nonZero[i]
    // }
    // for(let i = nonZero.length; i<nums.length; i++){
    //     nums[i] = 0
    // }

//     let p1=0;
//     let p2=1;

//    while(p2<nums.length){
//         if(nums.length === 1)  return nums;
//         if(nums[p1] === 0 && nums[p2]!==0){
//             [nums[p1],nums[p2]] = [nums[p2],nums[p1]]
//             p1++;
//             p2++;
//         } else if(nums[p1]!== 0) {
//             p1++;
//             p2++;
//         }else {
//             p2++
//         }
//     }

//Aproach: 3

let p = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i] !== 0){
        nums[p] = nums[i];
        p++;
    }
}
for(let i=p; i<nums.length;i++) {
    nums[i] = 0
}

};