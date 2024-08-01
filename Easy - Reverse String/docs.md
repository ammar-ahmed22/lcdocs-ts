# Reverse String
## Description
Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array **in-place** with `O(1`) extra memory.

## Examples
**Example 1:**
> **Input**: s = ["h","e","l","l","o"]  
**Output**: ["o","l","l","e","h"] 

**Example 2:**
> **Input**: s = ["H","a","n","n","a","h"]   
**Output**: ["h","a","n","n","a","H"]

## Approach
- Basically, just swap the elements on either end
  + Left and right pointers, swap left and right
  + Decrement right, increment right
  + Iterate while left < right

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`