# Remove Duplicates from Sorted List
## Description
Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

## Examples
**Example 1:**
> **Input**: head = [1,1,2]  
**Output**: [1,2]

**Example 2:**
> **Input**: head = [1,1,2,3,3]  
**Output**: [1,2,3]

## Approach
- Since the list is sorted, we know that the duplicates must be beside eachother
- Thus, a duplicate is found when there the current value and the next value are the same
- Therefore, iterate while `curr` and `curr.next` exist
  + Check if the `curr.val` and `curr.next.val` are equal
    - If they are, set `curr.next` to `curr.next.next` because we want to skip over the duplicate
    - If they are not, set `curr` = `curr.next` (continue the iteration)
- This will effectively remove all duplicates


## Complexity
### Time
- We only iterate over the list once, `O(n)`

### Space
- `O(1)`