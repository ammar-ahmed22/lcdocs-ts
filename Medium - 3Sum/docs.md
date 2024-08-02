# 3Sum
## Description
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

## Examples
**Example 1:**
> **Input**: nums = [-1,0,1,2,-1,-4]    
**Output**: [[-1,-1,2],[-1,0,1]]  
**Explanation**:  
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.  
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.  
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.  
The distinct triplets are [-1,0,1] and [-1,-1,2].  
Notice that the order of the output and the order of the triplets does not matter.

**Example 2:**
> **Input**: nums = [0,1,1]  
**Output**: []  
**Explanation**: The only possible triplet does not sum up to 0.

**Example 3**:
> **Input**: nums = [0,0,0]  
**Output**: [[0,0,0]]  
**Explanation**: The only possible triplet sums up to 0.

## Approach
- We can think of this problem as the same as two sum but we iterate once again inside after we get the first number
  + That first number will be seen as our target and we are looking for two more numbers that will make the sum = 0;
  + If we do it like this, it will be `O(n^2)` because for each number we will need to go over the entire array
  + However, we can use the two sum sorted problem for this
    - If we sort the array, we can make the problem `O(nlogn)`
    - This is because for each number, we only need to look at the numbers after it
- First, sort the input array
- Iterate over the numbers
  - For each iteration, `i`, that number will be our starting number
    + If the `i != 0` (first number), we need to check the next number to ensure it's not a duplicate (we don't want to find 2 more numbers for the same number because it will be a duplicate entry)
      - If it is a duplicate `i = i - 1`, continue the loop
    + Initialize pointers for the left and right
      - `l = i + 1`, `r = n - 1` (also make sure our outer loop only goes to `n - 2`)
      - Iterate while `l < r`
        + Calculate the sum of `i + l + r`
          - If it is equal to zero, push the indices to the result
            + Over here we also increment each pointer to the next element that is not the same
            + Increment and decrement each respective pointer
          - If it is less than zero, 
            + Increment the left pointer, (we want a bigger number)
          - If it is greater than zero,
            + Decrement the right pointer, (we want a smaller number)

## Complexity
### Time
- Sorting -> `O(nlogn)`
- Finding the sum -> `O(n)`
- Therefore, `O(nlogn)`

### Space
- `O(1)`