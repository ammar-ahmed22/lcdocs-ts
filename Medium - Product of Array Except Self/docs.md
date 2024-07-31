# Product of Array Except Self
## Description
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

## Examples
**Example 1:**
> **Input**: nums = [1,2,3,4]    
**Output**: [24,12,8,6]


**Example 2:**
> **Input**: nums = [-1,1,0,-3,3]    
**Output**: [0,0,9,0,0]

## Approach
- Create prefix product and suffix product arrays for the array
  + Prefix product array would be an array that on each index has the product of all the previous elements
  + Suffix product array would be an array that on each index has the product of all the next elements

### Prefix Array
- Initialize an array with `n` values
- To create the prefix array, iterate over the `nums` in forwards order
- Get the previous value in the `prefix` array
  + If the index is 0 (first element), make the previous value = `1`
- At the `ith` index of the `prefix` insert the product of the current value in `nums` and the previous value in the `prefix` array

### Suffix Array
- Initialize an array with `n` values
- To create the suffix array, iterate over the `nums` in reverse order
- Get the previous value in the `suffix` array
  + This would be the `i + 1` value in the `suffix` array because we are constructing it backwards
  + If the index is `n - 1`, make the previous value = `1`
- At the `ith` index of the `suffix` insert the product of the current value in `nums` and the previous value in the `suffix` array

### Result
- To create the result, we want to multiply the value in the `prefix` array at `i - 1` and the `suffix` array at `i + 1`
- Iterate from 0 to `n`
  + Get the prefix value at `i - 1`, if `i = 0`, make it `1`
  + Get the suffix value at `i + 1`, if `i = n - 1`, make it `1`
  + insert at `i`, `pre * suff`

## Complexity
### Time
- We iterate from `0 to n`, 3 times consecutively
- Therefore, `O(3n) = O(n)`

### Space
- We create two arrays of length `n`
- Therefore, `O(2n) = O(n)`
