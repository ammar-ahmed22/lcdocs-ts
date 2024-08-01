# Group Anagrams
## Description
Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Examples
**Example 1:**
> **Input**: strs = ["eat","tea","tan","ate","nat","bat"]  
**Output**: [["bat"],["nat","tan"],["ate","eat","tea"]]  

**Example 2:**
> **Input**: strs = [""]  
**Output**: [["]]

**Example 3:**
> **Input**: strs = ["a"]  
**Output**: [["a"]]

## Approach
- All strings consist only of lowercase english letters
  + Therefore, we know there are only 26 possible characters in each string
  + We can use this to find anagrams
  + We can create a constant size array (26) where each letter corresponds to it's index and hold the count of each letter
  + If any string has the same character count array, it is an anagram
+ Create a map that has the character count array (as a string (comma-separated)) as it's key and an array of strings as it's value
+ For each string
  + First create the character count array
  + Convert the character count array to string by joining it with comma
  + Check if the map contains the character count string, add the string to it's array
  + If it doesn't, add the character count string with the string in an array
+ For each value in the map, add to an answer array 

## Complexity
### Time
- Let `strs` have length `n`, and the longest string in `strs` to have length `m`
- We iterate over `strs` once and inside that we iterate over each string once
- Therefore, `O(n * m)`

### Space
- `O(n)` -> map
