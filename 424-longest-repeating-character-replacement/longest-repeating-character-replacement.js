/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let low = 0;
    const charFreq = new Array(26).fill(0)
    let maxFreq = 0;
    let result = 0
    for(let high=0; high< s.length; high++){
        let currChar = s[high].charCodeAt() - 65
        charFreq[currChar]++
        maxFreq = Math.max(maxFreq,charFreq[currChar])

        let windowLen = high-low+1
        let charToReplace = windowLen - maxFreq

        while(charToReplace > k){
            charFreq[s[low].charCodeAt()-65]--
            low++
            windowLen = high - low + 1
            charToReplace= windowLen - maxFreq
        }
        
        result = Math.max(result,windowLen )
    }
    return result
};