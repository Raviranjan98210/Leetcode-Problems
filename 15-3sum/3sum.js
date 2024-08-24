/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Brute force approach
    //  const set = new Set()
    //     const n = nums.length
    //     for(let i=0; i<n; i++) {
    //         for(let j=i+1;j<n;j++) {
    //             for(let k=j+1;k<n;k++) {
    //                 if(nums[i]+nums[j]+nums[k]===0){
    //                     const temp = [nums[i],nums[j],nums[k]]
    //                     temp.sort((a,b)=>a-b)
    //                     set.add(JSON.stringify(temp))
    //                 }
    //             }
    //         }
    //     }
    //     const result = []
    //     for(let item of set){
    //         result.push(JSON.parse(item))
    //     }
    //     return result;

    // Better Solutiong using hasing technique.

    // const n = nums.length;
    // const result = [];
    // const set = new Set();
    // for (let i = 0; i < n; i++) {
    //     const map = new Map();
    //     for (let j = i + 1; j < n; j++) {
    //         // Intitution:  i+j+k = 0 i.e k = -(i+j)
    //         //  see if k is in the map then we have got the triplets
    //         // Note: we are putting the value between i and j only so the curretn element 
    //         // doesn't not gets considered as k, for that wheneve i is changing we are resetting 
    //         // the value map
    //         const k = -(nums[i] + nums[j]);
    //         if (map.has(k)) {
    //             const temp = [nums[i], nums[j], k]
    //             temp.sort((a, b) => a - b)
    //             set.add(JSON.stringify(temp))
    //         }
    //         if(!map.has(nums[j])){
    //             map.set(nums[j], j)
    //         }
           
    //     }
    // }
    // for (let item of set) {
    //     result.push(JSON.parse(item))
    // }
    // return result;

    let st = new Set();
    const n = nums.length;
    let ans = [];
    // check if all zero then return [0,0,0]
    let isZero = true
    for(let i=0;i<n;i++) {
        if(nums[i] !==0){
            isZero = false
            break;
        }
    }
    if(isZero) return [[0,0,0]];
    for (let i = 0; i < n; i++) {
        let hashset = new Set();
        for (let j = i + 1; j < n; j++) {
            //Calculate the 3rd element:
            let third = -(nums[i] + nums[j]);

            //Find the element in the set:
            if (hashset.has(third)) {
                let temp = [nums[i], nums[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
            hashset.add(nums[j]);
        }
    }

    //store the set in the answer:
    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}
