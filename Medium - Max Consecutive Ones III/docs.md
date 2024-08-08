# Max Consecutive Ones III
## Description
Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`'s in the array if you can flip at most `k` `0`'s.

## Examples
**Example 1**:
> **Input**: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2  
**Output**: 6  
**Explanation**: [1,1,1,0,0,1,1,1,1,1,1]  
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

**Example 2**:
> **Input**: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3  
**Output**: 10  
**Explanation**: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]  
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

## Approach
- We can create a window that continues increasing until our `0` count (flip count) exceeds the `k` value
- As long as our flip count is below `k`, we can calculate the window size as our max answer
- We can create two pointers for the left and right side of our window
- Iterate while the right side is less than the array
  + We always increment the right side pointer
  + Whenever the right side sees a `0`, we increment our `count`
  + If the count is `<= k`, we can update our answer with the window size
  + Otherwise, we increment our `left` side
    - However, if the right side sees a `0`, we decrease the count (we've already accounted for flipping this zero before, so we want to unflip it now)
- By the end we will have flipped all the zeros that are beside 1's to get the max consecutive ones

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`