function sameFrequency(n1, n2) {
  let s1 = n1.toString();
  let s2 = n2.toString();

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

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
