/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

     if(nums.length ===1) return nums;
     let mid = Math.floor((0+nums.length)/2)

     const leftArr = sortArray(nums.slice(0,mid))
     const rightArr = sortArray(nums.slice(mid))

     return mergeArray(leftArr,rightArr)
    
};

var mergeArray = function(arr1,arr2){
    let i=0;
    let j=0;
    const result =[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else {
             result.push(arr2[j])
            j++
        }
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)]
}