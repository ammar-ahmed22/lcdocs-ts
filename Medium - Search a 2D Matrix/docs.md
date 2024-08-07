# Search a 2D Matrix
## Description
You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.

You must write a solution in `O(log(m * n))` time complexity.

## Examples
**Example 1:**
> **Input**: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3  
**Output**: true

**Example 2:**
> **Input**: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13  
**Output**: false

## Approach
- We can use a nested binary search to solve this problem
- First, we will binary search to find the row that the target should be in
- Next, we will binary search that row to find the target
- For the row binary search
  + We do the same as always with the bottom and top pointers and calculating the mid
    + We check if the mid row contains the target by checking if the target is greater than or equal to the first number AND less than or equal to the last number
      - If this is true, we found the row
    + Otherwise, if the target is smaller than the first element, we want to check the top rows (smaller rows)
    + Else, we want to check the bottom rows, (bigger rows)
- Once we've found the row, trivial binary search

## Complexity
### Time
- `O(log(m * n))`

### Space
- `O(1)`