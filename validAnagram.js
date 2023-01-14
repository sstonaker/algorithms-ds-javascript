function validAnagram(s1, s2) {
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) {
    return false;
  }

  let fc1 = {};
  let fc2 = {};

  for (let char of s1) {
    if (char in fc1) {
      fc1[char]++;
    } else {
      fc1[char] = 1;
    }
  }

  for (let char of s2) {
    if (char in fc2) {
      fc2[char]++;
    } else {
      fc2[char] = 1;
    }
  }

  for (let key in fc1) {
    if (fc1[key] !== fc2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
