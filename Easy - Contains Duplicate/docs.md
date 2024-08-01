# Contains Duplicate
## Description
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

## Examples
**Example 1:**
> **Input**: nums = [1,2,3,1]    
**Output**: true


**Example 2:**
> **Input**: nums = [1,2,3,4]    
**Output**: false

**Example 3:**
> **Input**: nums = [1,1,1,3,3,4,3,2,4,2]  
**Output**: true

## Approach
- Create an empty set
- Iterate over the numbers
- If the set contains the number, duplicate found return `true`
- Otherwise, add the number to set
- Return `false` if the iteration finishes


## Complexity
### Time
- `O(n)`

### Space
- `O(n)`