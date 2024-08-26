# Remove Nth Node Fron End of List
## Description
Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

## Examples
**Example 1:**
> **Input**: head = [1,2,3,4,5], n = 2  
**Output**: [1,2,3,5]

**Example 2**:
> **Input**: head = [1], n = 1  
**Output**: []

**Example 3**:
> **Input**: head = [1,2], n = 1  
**Output**: [1]

## Approach
- Use a dummy node whos next points to head
- Create ahead and behind pointers starting at dummy
- Move the ahead pointer n + 1 places ahead (n of the original list)
- Move the behind pointer and ahead pointer together until ahead goes out of bounds
  + At this point, behind will be right behind the element to be removed
  + Set the behind.next = behind.next.next (skip over the removed element)

## Complexity
### Time
- `O(n)`

### Space
- `O(1)`