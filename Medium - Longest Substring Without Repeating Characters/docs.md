# Longest Substring Without Repeating Characters
## Description
Given a string `s`, find the length of the longest substring without repeating characters.

## Examples
**Example 1**:
> **Input**: s = "abcabcbb"  
**Output**: 3  
**Explanation**: The answer is "abc", with the length of 3.

**Example 2**:
> **Input**: s = "bbbbb"  
**Output**: 1  
**Explanation**: The answer is "b", with the length of 1.

**Example 3**:
> **Input**: s = "pwwkew"  
**Output**: 3  
**Explanation**: The answer is "wke", with the length of 3.  
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## Approach
- We can use a sliding window approach with a hash set
- We'll initialize left and right pointers starting at 0
- Iterate while right pointer is less than the strings length
  + Check if the character at `r` is NOT in the set
    - Add the character to the set
    - Update the max value
  + Else
    - Remove the value at `l` from the set
    - Increment `l`
- Return the max value

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`