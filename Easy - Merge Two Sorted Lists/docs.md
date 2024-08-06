# Merge Two Sorted Lists
## Description
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Examples
**Example 1:**
> **Input**: list1 = [1,2,4], list2 = [1,3,4]  
**Output**: [1,1,2,3,4,4]

**Example 2:**
> **Input**: list1 = [], list2 = []  
**Output**: []

**Example 3:**
> **Input**: list1 = [], list2 = [0]  
**Output**: [0]

## Approach
- We can use a similar approach to merging two arrays
- We'll create the answer list, initialized with an arbitrary value (we wont be using this value)
- Create a pointer for the answer list and pointers for `list1` and `list2`, `p1` and `p2`
- Iterate while `p1` and `p2` are NOT null
  + Check if the value of `p1` is less than `p2`
    - If it is, set the next value for the answer pointer to the `p1` node
    - Increment the `p1` pointer
    - Else, do the same with `p2`
- After the iteration, it's possible one of `p1` or `p2` has not reached the end
  + Add whichever one is NOT null to the end of the answer pointer
- Return the `next` value of the answer list

## Complexity
### Time
- `O(n + m)`, where `n` is the length of `list1` and `m` is the length of `list2`

### Space
- `O(1)`