/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Approach-1 Brute Force
    // for(let i = m; i< m+n; i++) {
    //     nums1[i] = nums2[i-m]
    // }
    // nums1.sort((a,b)=> a-b)

    //Approach -2

    // const nums1Copy = nums1.slice(0,m)
    // let p1=0
    // let p2 = 0

    // for(let i=0; i<m+n; i++) {
    //     if( p2 >= n || (p1 < m && nums1Copy[p1]< nums2[p2])) {
    //         nums1[i] = nums1Copy[p1]
    //         p1++
    //     }else {
    //         nums1[i] = nums2[p2]
    //         p2++
    //     }
    // }

    // Approach-3
    let p1 = m - 1;
    let p2 = n - 1;
  
    for (let i = m + n - 1; i >= 0; i--) {
      if (p2 < 0) break;
  
      if (p1 >= 0 && nums1[p1] > nums2[p2]) {
        nums1[i] = nums1[p1--];
      } else {
        nums1[i] = nums2[p2--];
      }
    }
};