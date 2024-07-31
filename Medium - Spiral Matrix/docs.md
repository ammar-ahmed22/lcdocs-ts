# Spiral Matrix
## Description
Given an `m x n` matrix, return all elements of the `matrix` in spiral order.

## Examples
**Example 1:**
> **Input**: matrix = [[1,2,3],[4,5,6],[7,8,9]]    
**Output**: [1,2,3,6,9,8,7,4,5]

**Example 2:**
> **Input**: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]  
**Output**: [1,2,3,4,8,12,11,10,9,5,6,7]

## Approach
- Essentially, we need to iterate in the directions: right, down, left, up
- When we are going right, we stop once we hit the right wall, same thing for each direction
  - After we stop going right, we should make the right wall smaller so on the next time around we don't duplicate items
- Initialize values for each direction, these stay the same
- Initialize values for each wall, right, bottom, left, top
  + Right wall = `N`
  + Bottom wall = `M`
  + Left wall = `-1`
  + Top wall = `0` -> we start top wall at 0 because we already added the first top row when we went right to start
- Initialize a value for the direction, starting with right
- Initialize pointers for the matrix index, `i` and `j`
- Iterate while the length of the `answer` is less than `M * N`
  + If we are going right
    + Iterate while `j < RIGHT_WALL`
    + Add the values to the answer and increment j
    + Once the iteration finishes, j will be past the end of the right side
      - Bring back `j` by decrementing
      - Move `i` down to start the downwards direction
      - Decrement the right wall
      - Change direction to down
  + Do the same for each direction, being careful of the increments and decrements to make sure we are going the right way and updating the out of bounds pointers when we finish the direction iteration
  + Also ensure the walls are moved correctly
  + This could all potentially be written in a more clean way

## Complexity
### Time
- We iterate over the entire matrix once
- Therefore, `O(m * n)`

### Space
- No extra space created except for answer
- `O(1)`