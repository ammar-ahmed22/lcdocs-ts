export type ArgsType = [string,string];
export type ReturnType = string;

export function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < word1.length && j < word2.length) {
    if (result.length % 2 === 0) {
      result += word1[i];
      i++;
    } else {
      result += word2[j];
      j++;
    }
  }

  while(i < word1.length) {
    result += word1[i];
    i++;
  }

  while(j < word2.length) {
    result += word2[j];
    j++;
  }
  
  return result;
}