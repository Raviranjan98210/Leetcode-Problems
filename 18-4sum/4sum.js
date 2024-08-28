/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   const n = nums.length;
//    const set = new Set()
//     //  Brute force approach
//     for(let i=0;i<n;i++) {
//         for(let j=i+1;j<n;j++) {
//             for(let k=j+1;k<n;k++){
//                 for(let l=k+1;l<n;l++){
//                     if(nums[i]+nums[j]+nums[k]+nums[l] === target){
//                         const temp = [nums[i],nums[j],nums[k],nums[l]]
//                         temp.sort((a,b)=>a-b)
//                         set.add(JSON.stringify(temp))
//                     }
//                 }
//             }
//         }
//     }

//   let ans = []
//   for(let item of set){
//     ans.push(JSON.parse(item))
//   }
//   return ans;

// Optimal solution 
// sort the array
// Now check if the 
nums.sort((a,b)=> a-b)
const res = []
for(let i=0;i<n;i++){
    if(i>0 && nums[i] === nums[i-1]) continue;
    for(let j=i+1;j<n;j++){
        if(j> i+1 && nums[j] === nums[j-1]) continue;
        let k = j+1;
        let l = n-1;
        while(k<l){
            let sum = nums[i]+nums[j]+nums[k]+nums[l]
            if(sum<target ){
                k++;
            }else if(sum>target ){
                l--;
            }else{
                const temp = [nums[i],nums[j],nums[k],nums[l]]
                res.push(temp)
                k++;
                l--;
                while(k<l && nums[k]=== nums[k-1]) k++;
                while(k<l && nums[l] === nums[l+1]) l--;
            }
        }
    }
}
return res;
};