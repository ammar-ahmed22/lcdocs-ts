# Majority Element
## Description
Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Examples
**Example 1:**
> **Input**: nums = [3,2,3]  
**Output**: 3

**Example 2:**
> **Input**: nums = [2,2,1,1,1,2,2]  
**Output**: 2

**Follow-up**: Could you solve the problem in linear time and in `O(1)` space?

## Approach
- Solving this with `O(n)` space is quite straightforward
- Create a map and count the occurrences of each number in the array
- Iterate over the values in the map, if the occurrence is greater than `n / 2` return that number

### Follow-up
- Create one variable for the answer and another for the count
- Iterate over the numbers
  + If the count is equal to 0
    + Set the answer to the current number
  + If the answer is equal to the current number
    + Increment the count
    + else, decrement the count
- This works because the there is guranteed to be more than half of the elements being the same
- Therefore, if the count goes up high enough, any other numbers will not be able to bring it down enough to make it 0 to reset the answer

## Complexity
### Time
- `O(n)`
### Space
- `O(1)`