# Reverse Linked List
## Description
Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## Examples
**Example 1:**
> **Input**: head = [1,2,3,4,5]  
**Output**: [5,4,3,2,1]

**Example 2:**
> **Input**: head = [1,2]  
**Output**: [2,1]

**Example 3:**
> **Input**: head = []  
**Output**: []

## Approach
- Basically, we just want to turn around the "arrow" at each element by swapping with the previous value
- We start with `prev` being `null`
- We initialize a pointer at the head, `curr`
- Iterate while `curr` is NOT null
  + Create a `temp` variable which holds the next node
  + Set the next node of `curr` to the previous value
  + Set the `prev` value to `curr`
  + Set the `curr` value to `temp` (next)
- return the `prev` pointer at the end because it will be at the new head

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`