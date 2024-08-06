# Min Stack
## Description
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

## Examples
**Example 1:**
> **Input**  
["MinStack","push","push","push","getMin","pop","top","getMin"]  
[[],[-2],[0],[-3],[],[],[],[]]  
  
**Output**  
[null,null,null,null,-3,null,0,-2]  
  
**Explanation**  
MinStack minStack = new MinStack();  
minStack.push(-2);  
minStack.push(0);  
minStack.push(-3);  
minStack.getMin(); // return -3  
minStack.pop();  
minStack.top();    // return 0  
minStack.getMin(); // return -2  

## Approach
- As always, we use arrays for the stacks
- For this problem, we'll use one array for the actual stack and one array for the min values
- Whenever we push a value to the stack, we check if the value is less than or equal to the top of the min stack
  + i.e. we have new smaller value, so we push it to the min stack as well (or if the min stack is empty)
- When we pop values, we check if the top of the stack currently is the same as the top of the min stack
  + If it is, we pop from the min stack as well
- To get the min value we simply return the top of the min stack

## Complexity
### Time
- `O(1)`

### Space
- `O(n)`