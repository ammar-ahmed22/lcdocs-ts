# Maximum Subarray
## Description
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

## Examples
**Example 1:**
> **Input**: nums = [-2,1,-3,4,-1,2,1,-5,4]  
**Output**: 6  
**Explanation**: The subarray [4,-1,2,1] has the largest sum 6.

**Example 2:**
> **Input**: nums = [1]  
**Output**: 1  
**Explanation**: The subarray [1] has the largest sum 1.

**Example 3:**
> **Input**: nums = [5,4,-1,7,8]  
**Output**: 23  
**Explanation**: The subarray [5,4,-1,7,8] has the largest sum 23.

## Approach
- Notice that the sum will only accumulate if it is greater than zero
- Initialize `sum = 0, max = -Inf`
- Iterate over the numbers
  + Add the number to the `sum`
  + Update max
  + If `sum < 0`, reset to 0

## Complexity
### Time
`O(n)`

### Space
`O(1)`