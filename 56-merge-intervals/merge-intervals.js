/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   const res = [];
   const n = intervals.length;
    intervals.sort((a,b)=> a[0]-b[0]);
   
    for(let i=0; i<n; i++) {
        let first = intervals[i][0]
        let end = intervals[i][1]

         // If last end is within the interval of last interval then skip this as it 
         // will also be there is that interval
        if(res.length && res[res.length-1][1] >= end){
            continue;
        }

        // If element is not in the interval the expand the interval else create new interval
        for(let j = i+1; j < n; j++) {
            if(end >= intervals[j][0]){
                end = Math.max(end,intervals[j][1])
            }else {
                break;
            }
        }

        res.push([first,end])
    }
    return res;
};