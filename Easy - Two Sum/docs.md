# Two Sum
## Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have ***exactly one solution***, and you may not use the same element twice.

You can return the answer in any order.

## Examples
**Example 1:**
> **Input**: `nums = [2,7,11,15]`, `target = 9`  
**Output**: `[0, 1]`  
**Explanation**: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**
> **Input**: `nums = [3,2,4]`, `target = 6`  
**Output**: `[1, 2]`

**Example 3:**
> **Input**: `nums = [3,3]`, `target = 6`  
**Output**: `[0, 1]`

## Approach
- Use a hashmap
- Populate each number in the nums array in the hashmap with the value being its index
  + Doesn't matter if we overwrite duplicates because we will find the other when looking for the number if it is part of the sum
- Iterate over the numbers again and calculate the number we are looking for on each iteration
  + i.e. If our target is `9` and our current number is `6`, we are looking for `9 - 6 = 3` to make the sum
- Check if the number is in the hashmap and check if it's index is not the same as current index
  + Return the two indices

## Complexity
- Iterate once over the array to make the hashmap -> O(n)
- Iteate once more to find the answer -> O(n)
- Time complexity: O(n)
- Space complexity: O(n) (hashmap)