# Find Minimum in Rotated Sorted Array
## Description
Suppose an array of length `n` sorted in ascending order is rotated between 1 and n times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- [4,5,6,7,0,1,2] if it was rotated `4` times.
- [0,1,2,4,5,6,7] if it was rotated `7` times.

Notice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return the minimum element of this array.

You must write an algorithm that runs in `O(log n)` time.

## Examples
**Example 1**:
> **Input**: nums = [3,4,5,1,2]   
**Output**: 1  
**Explanation**: The original array was [1,2,3,4,5] rotated 3 times.

**Example 2**:
> **Input**: nums = [4,5,6,7,0,1,2]  
**Output**: 0  
**Explanation**: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

**Example 3**:
> **Input**: nums = [11,13,15,17]  
**Output**: 11  
**Explanation**: The original array was [11,13,15,17] and it was rotated 4 times. 

## Approach
- Essentially, we are looking for the pivot index of the sort
- We can do a binary search and compare the mid value with the right value
  + If the mid value is greater than the right value, we know our min value is on the right side (in a sorted array, the right value should be the largest)
    - So we set, `l = m + 1`
  + Otherwise, we'll set `r = m + 1`
    - We don't do `r = m + 1` because this will make us go past the min value at the end
- Once the iteration is complete, the minimum value should be at the `l` index

## Complexity
### Time
- `O(logn)`

### Space
- `O(1)`