# Merge Intervals
## Description
Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Examples
**Example 1:**
> **Input**: intervals = [[1,3],[2,6],[8,10],[15,18]]    
**Output**: [[1,6],[8,10],[15,18]]    
**Explanation**: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

**Example 2:**
> **Input**: intervals = [[1,4],[4,5]]  
**Output**: [[1, 5]]  
**Explanation**: Intervals [1, 4] and [4, 5] are considered overlapping

## Approach
- First, we want to sort the intervals array in ascending order by the start of the intervals
- Initialize a pointer at 0
- Iterate while the pointer is less than `n`
  + Initialize a temp array which will house the merged interval with start of the current interval being the first element (start of the merged interval)
  + Initialize a max value with the end of the current interval
  + Increment the pointer
  + Iterate again while the second element (end of the interval) is greater than or equal to the max value (means we want to merge it with the current), also ensure pointer does not go past `n`
    - Update the max value (with `max` function)
    - Increment the pointer
  + Add the max value to the temp array (merged interval)
  + Add the merged interval to the answer

## Complexity
### Time
- We iterate once over the array 
  + The second iteration inside the first iteration will never be of `n`, so it only counts as one iteration
- `O(nlogn)` because of the sorting

### Space
- No extra space aside from the answer
- `O(1)`