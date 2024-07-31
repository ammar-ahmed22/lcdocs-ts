# Best Time To Buy And Sell Stock
## Description
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

## Examples
**Example 1:**
> **Input**: prices = [7,1,5,3,6,4]    
**Output**: 5    
**Explanation**: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.  
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**
> **Input**: prices = [7,6,4,3,1]    
**Output**: 0  
**Explanation**: In this case, no transactions are done and the max profit = 0.

## Approach
- Initialize two pointers, starting at zero, one for the buy and one for the sell
- Initialize a variable to hold the max profit
- Iterate while the sell pointer is less than the prices length
  + We calculate the profit on each iteration
  + If the profit is greater than 0,
    - Update the maxProfit (with `max` function and its current value)
  + If the profit is less than 0
    - Update the buy pointer to the current value of the sell pointer
  + Always increment the sell pointer at the end
- Return the max profit

## Complexity
### Time
- We iterate over the prices once
- `O(n)`

### Space
- No extra space
- `O(1)`