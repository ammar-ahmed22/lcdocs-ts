# Squares of a Sorted Array
## Description
Given an integer array `nums` sorted in **non-decreasing** order, return an array of the **squares of each number** sorted in non-decreasing order.

## Examples
**Example 1:**
> **Input**: nums = [-4,-1,0,3,10]  
**Output**: [0,1,9,16,100]  
**Explanation**: After squaring, the array becomes [16, 1, 0, 9, 100]. After sorting, it becomes [0, 1, 9, 16, 100]

**Example 2:**
> **Input**: nums = [-7,-3,2,3,11]  
**Output**: [4, 9, 9, 49, 121]

**Follow-up**: Squaring each element and sorting the new array is very trivial, could you find an `O(n)` solution using a different approach?

## Approach
- As mentioned in the follow-up, the trivial solution is straightforward but would result in `O(nlogn)` time
- We can use a two-pointer approach to construct the result backwards by always adding the largest value
- Initialize two pointers, `l = 0, r = n - 1` and another point for the result `i = n - 1`
- Create the result array of length `n`
- Iterate while `l <= r`
  + Calculate the square at `l` and `r`,
    - If the `l` value is larger or equal, make that the value to add and increment `l`
    - Otherwise make the `r` value the value to add and decrement `r`
    - Add the value at `i` into the output array and decrement `i`
- This ensures we are always adding the next biggest element backwards into the output

## Complexity
### Time
- `O(n)` -> only iterate once

### Space
- `O(1)` -> only extra space is the output