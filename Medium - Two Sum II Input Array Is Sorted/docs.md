# Two Sum II Input Array Is Sorted
## Description
Given a 1-indexed array of integers `numbers` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only constant extra space.

## Examples
**Example 1:**
> **Input**: numbers = [2,7,11,15], target = 9   
**Output**: [1, 2]    
**Explanation**: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

**Example 2:**
> **Input**: numbers = [2,3,4], target = 6  
**Output**: [1, 3]  
**Explanation**: The sum of 2 and 4 is 6. Therefore, index1 = 1, index2 = 3. We return [1, 3]

**Example 3:**
> **Input**: number = [-1, 0], target = -1  
**Output**: [1, 2]

## Approach
- We can use 2 pointer approach because the array is sorted
- Initialize left and right pointers
  + Iterate while left < right
  + Calculate the sum
    - If it is equal to the target, return the answer
    - If it is less than the target, we need to move the right pointer (smaller number)
    - If it is greater than the target, we need to move the left pointer (bigger number)


## Complexity
### Time
- `O(n)`

### Space
- `O(1)`