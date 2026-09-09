/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr1 = []
    let arr2 = []
    for(let i=0; i<nums.length; i++){
        if(nums[i]<0){
            arr1.push((nums[i])**2)
        }else{
            arr2.push((nums[i])**2)
        }
    }
    arr1.reverse()
    
    let i=0
    let j=0
    const result = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else{
           result.push(arr2[j]) 
           j++
        }
    }
    while(i<arr1.length ){
        result.push(arr1[i])
        i++
    }
     while(j<arr2.length ){
        result.push(arr2[j])
        j++
    }
    return result
};