# Valid Perfect Square
## Description
Given a positive integer num, return `true` if `num` is a perfect square or `false` otherwise.

A **perfect square** is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as `sqrt`.

## Examples
**Example 1:**
> **Input**: num = 16  
**Output**: true  
**Explanation**: We return true because 4 * 4 = 16 and 4 is an integer.

**Example 2:**
> **Input**: num = 14  
**Output**: false  
**Explanation**: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

## Approach
- We can use binary search with the `num` being the target
- We'll start out `left` at `1` and our `right` at `num`
- Iterate while `left <= right`
  + Calculate the mid integer between `left` and `right`
  + If the square of the `mid` is equal to the `num` return `true`
  + If it is smaller, then we need to look on the right side only (bigger numbers)
    - Update the `left` to `mid + 1`
  + Else, do the oppsite (update `right`) (smaller number)
+ If the iteration finishes, return `false`

## Complexity
### Time
- `O(log n)`

### Space
- `O(1)`