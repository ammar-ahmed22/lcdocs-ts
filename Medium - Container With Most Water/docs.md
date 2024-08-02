# Container With Most Water
## Description
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0) `and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

*Return the maximum amount of water a container can store.*

**Notice** that you may not slant the container.

## Examples
**Example 1:**
![Container With Most Water Diagram](./assets/Container%20With%20Most%20Water.jpg)
> **Input**: height = [1,8,6,2,5,4,8,3,7]  
**Output**: 49  
**Explanation**: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

**Example 2:**
> **Input**: height = [1,1]  
**Output**: 1

## Approach
- We create two pointers on each side, `left` and `right`
- Iterate while `left < right`
  + On each iteration, calculate the area and keep track of the max area
  + For moving the pointers, we always want to move the smaller pointer
    - This is because the width is decreasing, so we want to continue increasing the height, ensuring that we find the max area
    - If left is smaller than or equal to right, increment left, otherwise decrement right
      + In the case that they are equal, it does not matter which pointer is moved, just that only one of them is moved

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`