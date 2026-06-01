/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
  let mProfit = 0;
  let min = prices[0];

  for(let i=1; i<prices.length; i++){
    let profit = prices[i] - min
    if(profit > mProfit)mProfit = profit 
    if( prices[i] < min ) min = prices[i]
  }
  return mProfit;

};