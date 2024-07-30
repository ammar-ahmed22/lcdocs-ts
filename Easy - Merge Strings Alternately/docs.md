# Merge Strings Alternately
## Description
You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Examples
**Example 1:**
> **Input**: word1 = "abc", word2 = "pqr"   
**Output**: "apbqcr"    
**Explanation**: The merged string will be merged as so:  
word1:  a   b   c  
word2:    p   q   r  
merged: a p b q c r

**Example 2:**
> **Input**: word1 = "ab", word2 = "pqrs"  
**Output**: "apbqrs"  
**Explanation**: Notice that as word2 is longer, "rs" is appended to the end.  
word1:  a   b  
word2:    p   q   r   s  
merged: a p b q   r   s

**Example 3:**
> **Input**: word1 = "abcd", word2 = "pq"   
**Output**: "apbqcd"  
**Explanation**: Notice that as word1 is longer, "cd" is appended to the end.    
word1:  a   b   c   d    
word2:    p   q     
merged: a p b q c   d

## Approach
- Initialize two pointers, one for word1 and one for word2
- Also initialize the resultant string
- Iterate while both pointers are less than their respective strings (this will cease the loop as soon as either pointer reaches the end of its string)
  + If the length of the string is even (modulo operator), add the character from word1 and increment its pointer
  + If the length of the string is odd, add the character from word2 and increment its pointer
- When the first loop ends, one of the strings may not have reached its end
  + Make 2 loops one for each word and it's characters to the end of the string
  + One of the loops, won't run because it will have already reached the end (vis. a vis. the first loop)


## Complexity
- We iterate over both strings once, therefore, if `word1` has length, `n` and `word2` has length `m`, O(n + m)
- Space complexity: O(1), no extra space except for the answer