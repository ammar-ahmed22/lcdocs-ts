# Rotate Image
## Description
You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

## Examples
**Example 1:**
> **Input**: matrix = [[1,2,3],[4,5,6],[7,8,9]]   
**Output**: [[7,4,1],[8,5,2],[9,6,3]] 


**Example 2:**
> **Input**: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]    
**Output**: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

## Approach
- Through some trial and error on paper, I found an algorithm to do this
  + Not sure how or why it works, but it does
- First, we reverse the values on the about the diagonal by swapping by the reverse index
  + e.g. swap (0, 0) with (0, 0), swap (0, 1) with (1, 0) etc. 
- We iterate over each row
  + For each row, we increase the start column by 1
    - e.g. on the first row, we iterate over all columns, on the second row, we iterate over n - 1 columns, so and so forth
- After we have swapped the diagonals, we simply need to reverse each row and the matrix will be rotated
- We need to define three functions:
  + `swap2D` -> swaps values in a matrix
  + `swap` -> swaps values in an array
  + `reverse` -> reverses an array (uses the `swap` function)
    - for the reverse function, make 2 pointers, `left = 0` and `right = n - 1`
    - iterate while `left < right`
    - swap `left` and `right`

## Complexity
### Time
- For swapping diagonals, we iterate over the matrix once
- For reversing rows, we iterate over the matrix once again
- Therefore, `O(n^2)`

### Space
- No extra space
- `O(1)`