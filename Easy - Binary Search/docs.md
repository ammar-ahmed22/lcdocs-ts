# Binary Search
## Description
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Examples
**Example 1:**
> **Input**: nums = [-1,0,3,5,9,12], target = 9  
**Output**: 4  
**Explanation**: 9 exists in nums and its index is 4

**Example 2:**
> **Input**: nums = [-1,0,3,5,9,12], target = 2  
**Output**: -1  
**Explanation**: 2 does not exist in nums so return -1

## Approach
- Binary search involves reducing the search area by 2 on each iteration
- Since the input array is sorted, we can look at the middle of our search area
  + If the middle is smaller than our target, we need to look only on the right side
  + If it larger, look only on the left side
- Initialize left and right pointers
  + Iterate while `left <= right`
    - Calculate the middle index
      + If the middle value is equal to the target, return the middle index
      + If it is smaller, update the `left` pointer to `1 + middle`
      + Else, update the `right` pointer to `1 - middle`

## Complexity