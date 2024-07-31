# Is Subsequence
## Description
Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

## Examples
**Example 1:**
> **Input**: s = "abc", t = "ahbgdc"   
**Output**: true

**Example 2:**
> **Input**: s = "axc", t = "ahbgdc"    
**Output**: false

## Approach
- First check if the size of `s` is less than or equal to `t`, return `false` if not
- Initialize two pointers, one for `s` and one for `t`
- Iterate while `t` pointer is less than `t` length
  + Check if `s` pointer has reached the end of `s`, if it has, the subsequence is there, return `true`
  + If the character at `s` and `t` are equal, increment the `s` pointer
  + Always increment the `t` pointer
- After the iteration, return `true` if the `s` pointer has reached the end of `s`, otherwise `false`

## Complexity
### Time
- We iterate over both `s` and `t` only once
- Since `t` is always larger than `s`, let's say `t` has length `n`
- `O(n)`

### Space
- No extra space created
- `O(1)`