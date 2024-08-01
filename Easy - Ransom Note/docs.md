# Ransom Note
## Description
Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

## Examples
**Example 1:**
> **Input**: ransomNote = "a", magazine = "b"  
**Output**: false

**Example 2:**
> **Input**: ransomNote = "aa", magazine = "ab"  
**Output**: false

**Example 3:**
> **Input**: ransomNote = "aa", magazine = "aab"  
**Output**: true

## Approach
- Create a map
- Iterate over `magazine` and count the occurrences of each letter in the map
- Iterate over `ransomNote` and decrement each letter when it is found
  + If any letter is not found, return `false`
  + If any letter's count goes below zero, return `false`
- Iterate over the values in the map
  + If any of them are below 0, return `false`
- Return `true`


## Complexity
### Time
- `ransomNote` has length `n`, `magazine` has length `m`
- We iterate over each once
- Therefore, `O(n + m)`

### Space
- We create a map with the size of `magazine`
- Therefore, `O(m)`