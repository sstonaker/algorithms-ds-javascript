function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  if (arguments.length === 0) {
    return false;
  }

  let fc1 = {};

  for (let i = 0; i < arguments.length; i++) {
    let char = arguments[i];
    if (char in fc1) {
      fc1[char]++;
    } else {
      fc1[char] = 1;
    }
  }

  for (let key in fc1) {
    if (fc1[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
