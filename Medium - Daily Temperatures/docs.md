# Daily Temperatures
## Description
Given an array of integers temperatures represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

## Examples
**Example 1**:
> **Input**: temperatures = [73,74,75,71,69,72,76,73]  
**Output**: [1,1,4,2,1,1,0,0]

**Example 2**:
> **Input**: temperatures = [30,40,50,60]  
**Output**: [1,1,1,0]

**Example 3**:
> **Input**: temperatures = [30,60,90]  
**Output**: [1,1,0]

## Approach
- Use stack
- Create the resultant array of length `n`, initialized to zero
- Iterate over the numbers
- The stack will hold the temperature value and its index
- On each iteration, while the stack is not empty and the top of the stack is less than or equal to the current temperature
  - i.e. top of the stack is less than the current, pop the value from the stack and use the popped index to insert into the answer array
- Add the temperature index pair to the stack

## Complexity
### Time
- `O(n)`

### Space
- `O(n)`