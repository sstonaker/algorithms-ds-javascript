function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!

  let seen = {};
  let start = 0;
  let len = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (seen[ch]) {
      start = Math.max(start, seen[ch]);
    }
    len = Math.max(len, i - start + 1);
    seen[ch] = i + 1;
  }
  return len;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
