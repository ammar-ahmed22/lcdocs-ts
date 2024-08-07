# Search Insert Position
## Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

## Examples
**Example 1**:
> **Input**: nums = [1,3,5,6], target = 5  
**Output**: 2

**Example 2**:
> **Input**: nums = [1,3,5,6], target = 2  
**Output**: 1

**Example 3**:
> **Input**: nums = [1,3,5,6], target = 7  
**Output**: 4

## Approach
- We can use binary search again as explained [here](../Easy%20-%20Binary%20Search/docs.md)
- If the target is found, return the mid index
- If the iteration finishes, then our insertion index will be the left value

## Complexity
### Time
- `O(logn)`

### Space
- `O(1)`
