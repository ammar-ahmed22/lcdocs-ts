# Valid Palindrome
## Description
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

## Examples
**Example 1:**
> **Input**: s = "A man, a plan, a canal: Panama"  
**Output**: true 
**Explanation**: "amanaplanacanalpanama" is a palindrome.

**Example 2:**
> **Input**: s = "race a car"   
**Output**: false

**Example 3:**
> **Input**: s = " "  
**Output**: true  
**Explanation**: s is an empty string "" after removing non-alphanumeric characters.  
Since an empty string reads the same forward and backward, it is a palindrome

## Approach
- We can use a 2 pointer approach by checking if each character on opposite ends is the same
- However, we need to ignore non-alphanumerics
- Initialize left and right pointers
  + Iterate while left < right
    - If right is non-alphanumeric, decrement and continue the iteration
    - If left is non-alphanumeric, increment and continue the iteration
    - Check if left and right are equal, return false if not
    - Increment left and decrement right


## Complexity
### Time
- `O(n)`

### Space
- `O(1)`