function search(nums: number[], target: number): number {
    // let l = 0;
    // let r = nums.length-1;

    // while(l<=r) {
    //    let mid = Math.floor((l+r)/2)
    //    if(target === nums[mid]){
    //     return mid;
    //    }else if(target<nums[mid]) {
    //         r = mid-1
    //    }else {
    //     l = mid+1
    //    }

    // }
    // return -1;
    let start = 0;
    let end = nums.length-1

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        const value = nums[mid]
        if(value === target){
            return mid
        } 
        if(value < target){
            start = mid + 1
        }else {
            end = mid -1
        }
    }
    return -1
};