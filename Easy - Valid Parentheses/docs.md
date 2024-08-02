# Valid Parentheses
## Description
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Examples
**Example 1:**
> **Input**: s = "()"  
**Output**: true

**Example 2:**
> **Input**: s = "()[]{}"  
**Output**: true

**Example 3:**
> **Input**: s = "(]"  
**Output**: false

## Approach
- Create a map that maps opening braces to closing braces
- Create a stack
- Iterate over the characters
  + If it is an opening brace, push the corresponding closing brace to the stack
  + If it is a closing brace, check if the top of the stack is the same
    - If not, return false
    - If it is, pop from the stack
- Ensure the stack is empty at the end (all braces closed)

## Complexity
### Time
- `O(n)`

### Space
- `O(n)`