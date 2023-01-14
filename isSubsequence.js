function isSubsequence(ss, s) {
  // good luck. Add any arguments you deem necessary.
  let p1 = 0;
  let p2 = 0;
  while (p2 < s.length) {
    console.log(ss[p1], s[p2]);
    if (ss[p1] !== s[p2]) {
      p2++;
    } else if (ss[p1] == s[p2]) {
      p1++;
      p2++;
    }
    if (p1 === ss.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
