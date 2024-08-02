# Trapping Rain Water
## Description
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

## Examples
**Example 1:**  
![Trapping Rain Water Diagram](./assets/Trapping%20Rain%20Water.png)
> **Input**: height = [0,1,0,2,1,0,1,3,2,1,2,1]  
**Output**: 6  
**Explanation**: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

**Example 2:**
> **Input**: height = [4,2,0,3,2,5]  
**Output**: 9


## Approach
- For each position in the array, the potential for trapping rain water is the minimum of the maximum walls on each side
  + For example, in Example 1, at `i = 2`, the maximum left wall is `1` at `i = 0`, the maximum right wall is `3` at `i = 7`. Therefore, the potential for trapping water there is `1`.
  + Since there is 0 height at `i = 2`, the trapped water would be `1`
    - If there was a height there, we subtract that from the potential and only add the potential to the total if it is positive
- We'll create arrays that keep track of the left and right maxes at each index
  + Initialize an array of length `n`, called `maxLeft` and variable for `leftWall = 0`
  + Iterate over the numbers
    - For each number, add the `leftWall` at `i` in `maxLeft`
    - Update the `leftWall` using the `max` function
    - Do the same for the right but iterate backwards
- Once we have created the `maxLeft` and `maxRight` arrays, use them to calculate the result
- Keep track of `sum`
- Iterate over the numbers
  + Get the potential by taking the `min` of `maxLeft` and `maxRight`
  + Add to the sum of `pot - height[i]` is > 0.

## Complexity
### Time
- `O(n)`
- We iterate over height 3 times consecutively

### Space
- `O(n)`