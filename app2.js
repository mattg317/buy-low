/**
 * Buy Low, Sell High -- Starter Code
 **/

// Stock Prices
iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var bestBuy
var bestSell
var profitMargin = 0;
// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought){
  for(var i = 0, n = stockArray.length; i<n; i++){
    console.log(stockArray[i]);
    for(var j=i; j<n; j++){
      console.log('x',stockArray[j])
      if(stockArray[j]-stockArray[i]>profitMargin){
        bestBuy=stockArray[i];
        bestSell= stockArray[j]
        profitMargin= stockArray[j]-stockArray[i]
        console.log("winner",bestBuy)
        console.log('sold', bestSell)
        console.log('profit',profitMargin)
      }
    }
  }
console.log('final buy', bestBuy)
console.log('final sell', bestSell)
console.log('final profit', profitMargin)
var maxProfit = profitMargin * 10000
console.log('max', maxProfit)
return maxProfit;
};


// A Call to your Biggest Profit function.
biggestProfit(iagStockPrices, 10000); 

// NOTE: This should return 7600, 
// because you could have bought it at 1.14 per share 
// and then sold it at 1.90 per share. 
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.


/*
1. So the gist is determining the higest difference between two numbers but you can only go 
up.
2. so you would nee to compare the first number to - the each following number to determine the 
difference.
3. if the difference between the two is bigger than the previous one you hold onto that.
4.if no you adanvce to the next number.
5. so index loop minus start index
*/