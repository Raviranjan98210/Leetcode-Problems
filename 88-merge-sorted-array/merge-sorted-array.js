/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //Brute force using extra array

    // const temp = []
    // let i = 0;
    // let j = 0;
    // while( i < m && j <n) {
    //     if(nums1[i]<=nums2[j]) {
    //         temp.push(nums1[i]);
    //         i++;
    //     }else {
    //         temp.push(nums2[j]);
    //         j++;
    //     }
    // }
    // while(i<m){
    //     temp.push(nums1[i]);
    //     i++;
    // }
    // while(j<n) {
    //     temp.push(nums2[j])
    //     j++;
    // }
    
    // for(let i=0; i< m+n; i++) {
    //     nums1[i] = temp[i]
    // }
   
    //Optimal-1 
    // let i=m-1;
    // let j = 0;
    // if(n>0){
    //     nums1.splice(-n)
    // }

    // while( i >= 0 && j<n) {
    //     if(nums1[i]>nums2[j]) {
    //        [nums1[i],nums2[j]] = [nums2[j],nums1[i]]
    //        i--,j++
    //     }else {
    //         break;
    //     }
    // }

    // nums1.sort((a,b)=>a-b)
    // nums2.sort((a,b)=>a-b)
    // console.log(nums1,nums2)
    // for(let i=0;i<n; i++) {
    //     nums1.push(nums2[i])
    // }
//    Optimal 2 
     for(let i = m; i < nums1.length; i ++){
        nums1[i] = nums2.shift();
    }
    nums1.sort((a,b) => a - b);
};