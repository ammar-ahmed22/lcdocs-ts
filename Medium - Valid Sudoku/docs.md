# Valid Sudoku
## Description
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

## Examples
**Example 1:**
> **Input**: board =   
[["5","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]  
,[".","9","8",".",".",".",".","6","."]  
,["8",".",".",".","6",".",".",".","3"]  
,["4",".",".","8",".","3",".",".","1"]  
,["7",".",".",".","2",".",".",".","6"]  
,[".","6",".",".",".",".","2","8","."]  
,[".",".",".","4","1","9",".",".","5"]  
,[".",".",".",".","8",".",".","7","9"]]  
**Output**: true

**Example 2:**
> **Input**: board =  
[["8","3",".",".","7",".",".",".","."]  
,["6",".",".","1","9","5",".",".","."]  
,[".","9","8",".",".",".",".","6","."]  
,["8",".",".",".","6",".",".",".","3"]  
,["4",".",".","8",".","3",".",".","1"]  
,["7",".",".",".","2",".",".",".","6"]  
,[".","6",".",".",".",".","2","8","."]  
,[".",".",".","4","1","9",".",".","5"]  
,[".",".",".",".","8",".",".","7","9"]]  
**Output**: false  
**Explanation**: Same as Example 1, except with **5** in the top left corner being modified to **8**. Since there are two 8's in the top-left 3x3 sub-box, it is invalid.

## Approach
- We need to check every row, column and 3x3 sub-box for duplicates

### Rows
- Iterate over the matrix, the inner loop will be where we are checking each row item
- Outside the inner loop, initialize an empty set
- If the string at `i, j` is not `"."`, check if it is in the set
  + If it is, return `false`
  + Otherwise, add to the set

### Columns
- Iterate over the matrix again, this time with `j` first
- Do the same as above

### Sub-boxes
- This time, we will do 4 nested loops but each will only be `0 - 3`, effectively becoming the same thing
- We iterate from `0 - 3` first for the `box_row`
  + Then iterate from `0 - 3` for the `box_col`
    - Here we create the set
    - Then we iterate from `0 - 3` for the `row`
      + Then iterate from `0 - 3` for the `col`
        + We get the character with `board[box_row * 3 + row][box_col * 3 + col]`
        + Do the same as above

## Complexity
### Time
- Technically the complexity is always constant because the input size does not change
- However, we do consecutive nested loops so, `O(n^2)`

### Space
- Only extra space created is the sets which are always a max length of `9`
- `O(1)`