# Jewels and Stones
## Description
You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

## Examples
**Example 1:**
> **Input**: jewels = "aA", stones = "aAAbbbb"  
**Output**: 3  
**Explanation**: Because 1 + 2 == 3, we return 3.

**Example 2:**
> **Input**: jewels = "z", stones = "ZZ"  
**Output**: 0

## Approach
- Create a set with the `jewels` characters
- Iterate over the `stones`
- If the stone exists in the jewels set, update a counter
- Return the counter

## Complexity
### Time
- Iterate over the jewels once 
- Iterate over the stones once
- `jewels` has length `m`, `stones` has length `n`
- Therefore, `O(m + n)`

### Space
- Extra space created is only for the `jewels`
- Therefore, `O(m)`