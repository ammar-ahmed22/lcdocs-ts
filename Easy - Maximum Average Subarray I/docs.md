# Maximum Average Subarray I
## Description
You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to `k`** that has the maximum average value and return this value. Any answer with a calculation error less than `10-5` will be accepted.

## Examples
**Example 1**:
> **Input**: nums = [1,12,-5,-6,50,3], k = 4  
**Output**: 12.75000  
**Explanation**: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

**Example 2**:
> **Input**: nums = [5], k = 1  
**Output**: 5.00000

## Approach
- Using the generic approach of sliding a window and calculating the sum of each subarray is the trivial but non-optimal solution
  + It results in `O(n * k)` time (exceeds the time limit on LeetCode)
- We can start by calculating the sum of the first subarray (sum of the values up to `k`)
- This will be our sum for the initial average, so we store this in the return value
- Next, we can iterate from `k` to `n` (end of the array)
  + This will be the sliding of our window
  + On each iteration, we'll add the value at `i` to the sum and subtract the value at `i - k` from the sum because it is being removed from the window
  + Then we calculate our average and update our return max value

## Complexity
### Time
- `O(n)`

#### Space
- `O(1)`


