# Koko Eating Bananas
## Description
Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

## Examples
**Example 1:**
> **Input**: piles = [3,6,7,11], h = 8  
**Output**: 4

**Example 2:**
> **Input**: piles = [30,11,23,4,20], h = 5  
**Output**: 30

**Example 3:**
> **Input**: piles = [30,11,23,4,20], h = 6  
**Output**: 23

## Approach
- We can use a binary search approach to find the `k` value
- We can see that the maximum `k` value will be the max value in the piles
  + This will be our `r` value
  + Also initialize our answer to this value
- The minimum value for `k` is 1
- Iterate while `l <= r` and calculate the mid
  + The mid will be our test `k` value
  + We calculate the total number of hours it will take to eat the piles at the calculated `k` value
    + Iterate over the piles and sum the `pile / k` (rounded up)
      - We round up because Koko can only eat `k` bananas in that hour
        + i.e. if there is 3 bananas and `k = 2`, it will take 2 hours to eat because `3 / 2 = 1.5`
    + If the total time is less than or equal to the `h` value
      - We found a new answer and we can try a smaller value
        + Update the right pointer
      - Otherwise, update the left pointer 

## Complexity
### Time
- The binary search is `O(log n)`
- But we iterate over the array inside each binary search iteration -> `O(n)`
- Therefore, `O(nlogn)`

### Space
- `O(1)`