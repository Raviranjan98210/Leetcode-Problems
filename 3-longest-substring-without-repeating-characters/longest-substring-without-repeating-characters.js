/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low = 0;
    let map = new Map()
    let max = -Infinity
    for(let high=0; high< s.length; high++){
        map.set(s[high],(map.get(s[high]) || 0)+1)
        /* Check the size, and map size if both are equal that means there is no repeating charater in that widow so it can be considered as lognest substring without repeating the character
        */
        let k = high-low+1

        while(map.size < k){
            map.set(s[low], map.get(s[low])-1)
            if(map.get(s[low])=== 0) map.delete(s[low])
            low++
            k = high-low+1
        }
        max = Math.max(high-low+1,max)
    }
    return max === -Infinity ? 0: max
};