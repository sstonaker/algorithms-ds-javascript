function isPalindrome(str) {
  function reverse(str) {
    // add whatever parameters you deem necessary - good luck!

    if (str.length <= 1) return str;

    return reverse(str.slice(1)) + str[0];
  }

  let reversed = reverse(str);
  return str === reversed;

  // add whatever parameters you deem necessary - good luck!
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
