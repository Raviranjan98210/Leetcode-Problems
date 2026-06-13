/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // brute force
    let count = 0 ;
    // for(let i=0; i< stones.length; i++){
    //     if(jewels.includes(stones[i])) count++
    // }
    // return count


    // Optimal solution

    const j = new Set(jewels) // Space complexity: O(1) -> since storing the limites unique character that can be 52 (26 (small)+ 26 (capital) letters), this small number can be ignored 
    for(let i=0; i<stones.length;i++){
        if(j.has(stones[i])) count++ // time complexity: O(1)
    }
    return count
    
};