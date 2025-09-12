/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const l = nums.length;
    let j = 1;
    let i = 0; 
    const arr = []
    while(i < l ) {
        if(nums[i]=== nums[j]) {
            j++;
        }else {
          arr.push(nums[i])
          i=j;
          j++;
        }
    }

    for(let i=0; i<arr.length ; i++) {
            nums[i]= arr[i]
    }
    nums.splice(arr.length)

};