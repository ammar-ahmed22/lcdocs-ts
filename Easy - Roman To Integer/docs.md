# Roman To Integer
## Description
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

> **Symbol**       **Value**  
I             1  
V             5  
X             10  
L             50  
C             100  
D             500  
M             1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

## Examples
**Example 1:**
> **Input**: s = "III"  
**Output**: 3    
**Explanation**: III = 3.

**Example 2:**
> **Input**: s = "LVIII"   
**Output**: 58  
**Explanation**: L = 50, V = 5, III = 3

**Example 3:**
> **Input**: s = "MCMXCIV"  
**Output**: 1994
**Explanation**: M = 1000, CM = 900, XC = 90 and IV = 4

## Approach
- Notice in the description it says, roman numerals are written from largest to smallest, except for a few instances
  + Therefore, we know that the previous number should always be larger or equal
  + If it is not, then this is an instance where we have to subtract instead of add
- We can solve this problem by adding or subtracting the previous value from a total based on the above conditons
- To start, create a map with the Roman letters to numbers
- Initialize a variable with the value of the last character in the string 
  + This is because we will only be added the previous values and we will never get to the last one
- Iterate starting from index `1`
  + Get the values from the current and the previous character
  + If the previous character is greater than or equal to the current character, add it to the total
  + If it is less, subtract it from the total
- Return the total

## Complexity
### Time
- We only iterate over the string once
- `O(n)`

### Space
- No extra space created except for the map which is a constant size
- `O(1)`