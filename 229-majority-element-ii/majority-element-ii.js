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
    let cnt1 = 0, cnt2 = 0; // counts
    let el1 = -Infinity; // element 1
    let el2 = -Infinity; // element 2

    // applying the Extended Boyer Moore's numsoting Algorithm:
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== nums[i]) {
            cnt1 = 1;
            el1 = nums[i];
        }
        else if (cnt2 === 0 && el1 !== nums[i]) {
            cnt2 = 1;
            el2 = nums[i];
        }
        else if (nums[i] === el1) cnt1++;
        else if (nums[i] === el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

    let ls = []; // list of answers

    // Manually check if the stored elements in
    // el1 and el2 are the majority elements:
    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el1) cnt1++;
        if (nums[i] === el2) cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) ls.push(el1);
    if (cnt2 >= mini) ls.push(el2);


    ls.sort(); // TC --> O(2*log2) ~ O(1);

    return ls;
};