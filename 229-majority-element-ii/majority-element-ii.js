/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // Brute Force using map
    const n = nums.length
//     const map = new Map();
//     const res = []
//     for(let i=0; i<n;i++) {
//         map.set(nums[i],(map.get(nums[i]) || 0)+1)
//     }
   
//    for(let [key,numsalue] of map) {
//         if(numsalue > (n/3)) {
//             res.push(key)
//         }
//    }
//    return res;


//    Optimal
let count1=0;
let elm1= -Infinity;
let count2 = 0;
let elm2 = -Infinity;


    for(let i=0; i<n; i++) {
        if(count1 === 0 && nums[i] !== elm2) {
            count1 = 1;
            elm1 = nums[i]
        }else if(count2 === 0 && nums[i] !== elm1) {
            count2 = 1;
            elm2 = nums[i]
        } else if(nums[i] === elm1){
            count1++;
        }else if( nums[i] === elm2) {
            count2++
        }else {
            count1--;
            count2--;
        }
    }

    let cont1= 0;
    let cont2 =0;
    const result = []
    for(let i=0;i<n;i++){
        if(elm1===nums[i]) cont1++
        if(elm2===nums[i]) cont2++
    }

    if(cont1 >= (Math.floor(n/3))+1) {
        result.push(elm1)
    }
    if(cont2 >= (Math.floor(n/3))+1) {
        result.push(elm2)
    }
    return result;
};





