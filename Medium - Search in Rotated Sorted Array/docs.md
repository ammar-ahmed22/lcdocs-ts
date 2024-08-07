# Search in Rotated Sorted Array
## Description
There is an integer array `nums` sorted in ascending order **(with distinct values)**.

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` **(0-indexed)**. For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

## Examples
**Example 1:**
> **Input**: nums = [4,5,6,7,0,1,2], target = 0  
**Output**: 4

**Example 2:**
> **Input**: nums = [4,5,6,7,0,1,2], target = 3  
**Output**: -1

**Example 3:**
> **Input**: nums = [1], target = 0  
**Output**: -1

## Approach
- We can use a similar approach to [Find Minimum in Rotated Sorted Array](../Medium%20-%20Find%20Minimum%20in%20Rotated%20Sorted%20Array/docs.md)
- First, we'll find the pivot index of the array (the index of the minimum value), using the approach outlined above which is `O(log n)`
- After we've found the pivot index, we can use that to check which side of the array to do our binary search on to find the target
- If the pivot index is 0, we just do a regular binary search
- Otherwise, we check which side of the pivot index the target will be and start our binary search with those bounds
  + If the target is greater than start of the array and less than the pivot index - 1, it is on the left side
  + Otherwise, right side

## Complexity
### Time
- 2 consecutive binary searches -> `O(logn)`

### Space
- `O(1)`