# Longest Consecutive Sequence
## Description
Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

## Examples
**Example 1:**
> **Input**: nums = [100,4,200,1,3,2]  
**Output**: 4    
**Explanation**: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

**Example 2:**
> **Input**: nums = [0,3,7,2,5,8,4,6,0,1]   
**Output**: 9

## Approach
- First create a set with all the numbers
- Create an `ans = 0` variable
- Iterate over the numbers
  + For each number, check if the set has the number one less than the current
    - If it does not, that means we are potentially at the start of a sequence
    - Create a `temp` variable equal to `1 + num`
    - Create a `count` variable equal to `1`
    - Iterate while the temp variable is in the set
      + increment the `temp` and `count` 
    - Update the `ans` with the max function and `count`

## Complexity
### Time
- While it may seem like `O(n^2)` because of the inner loop, it is actually not.
  + The first check, ensures that we only iterate when we are at the start of a sequence, therefore, the iterations will get successively smaller and only once can it possibly be of length `n`
- `O(n)`

### Space
- `O(n)`