# Check if Array Is Sorted and Rotated
## Description
Given an array `nums`, return `true` if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return `false`.

There may be duplicates in the original array.

Note: An array `A` rotated by `x` positions results in an array `B` of the same length such that `A[i] == B[(i+x) % A.length]`, where `%` is the modulo operation.

## Examples
**Example 1:**
> **Input**: `nums = [3,4,5,1,2]`  
**Output**: `true`    
**Explanation**: Because 1 + 2 == 3, we return 3.

**Example 2:**
> **Input**: `nums = [2,1,3,4]`    
**Output**: `false`
**Explanation**: There is no sorted array once rotated that can make nums.

**Example 3:**
> **Input**: `nums = [1,2,3]`  
**Output**: `true`
**Explanation**: [1,2,3] is the original sorted array.  
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

## Approach
- First we need to find the rotation point of the array
  + i.e. the point at which the original array is sorted.
  + The rotation point will occur when the previous element is greater than itself
    - e.g `[3, 4, 5, 1, 2]` -> `5 > 1` -> `1` is the rotation point
- After we have found the rotation point, we just need to iterate from there over all the elements (up to `n`)
  + `k = 0; while(k < n - 1)` -> because we are checking the next element
- On each iteration, check if it is in the correct order
  + i.e. the next is greater than itself
  + To handle the cyclic indices, we can use the modulo operator with `k % n`

## Complexity