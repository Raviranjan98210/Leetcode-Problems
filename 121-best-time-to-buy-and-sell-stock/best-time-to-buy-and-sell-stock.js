/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===1) return 0

    let maxProf=0;
    let mini = prices[0];
    for(let i=1;i<prices.length;i++) {
        const cost = prices[i]-mini;
        maxProf = Math.max(maxProf,cost)
        mini = Math.min(mini,prices[i])
    }
    return maxProf;
};