# Find Closest Number To Zero
## Description
Given an integer array `nums` of size `n`, return the number with the value closest to `0` in `nums`. If there are multiple answers, return the number with the largest value.

## Examples
**Example 1:**
> **Input**: `nums = [-4,-2,1,4,8]`
> **Output**: `1`
> **Explanation**: 
> The distance from -4 to 0 is |-4| = 4.
> The distance from -2 to 0 is |-2| = 2.
> The distance from 1 to 0 is |1| = 1.
> The distance from 4 to 0 is |4| = 4.
> The distance from 8 to 0 is |8| = 8.
> Thus, the closest number to 0 in the array is 1.

**Example 2:**
> **Input**: `nums = [2,-1,1]`
> **Output**: 1
> **Explanation**: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

## Approach
- We have two issues in this problem: 
1. Finding the closest number to zero (essentially the smallest absolute value)
2. Making sure to return the positive value if the smallest has it's negative in the array
- First, we find the smallest absolute value
  + Initialize a variable for the result with the first value in the array in it
  + Iterate over the numbers
  + If the current absolute value is smaller than the absolute value of the current result
    - Update the result to the current value
- After we found the absolute value, we check if it's negative
  + If it is negative, we need to check if the positive value is in the array and return that
    - Iterate over the values again and check if the absolute value of the result is equal to the current value
      + Return the current value if it is (that is the positive version)
  + If it is positive, return that

## Complexity
- Time: O(n), only iterate over the array once
- Space: O(1), no extra space created