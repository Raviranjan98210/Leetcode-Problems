/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // using js built in function
    let count = 0 ;
    for(let i=0; i< stones.length; i++){
        if(jewels.includes(stones[i])) count++
    }
    return count
    
};