/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
   let maxProfit = 0;
   let min = prices[0];
   for(let i = 1; i<prices.length; i++){
    const profit = prices[i]-min
    if(profit  > maxProfit){
        maxProfit = profit
    }
    if(prices[i]<min){
        min = prices[i]
    }
   }
   return maxProfit;

};