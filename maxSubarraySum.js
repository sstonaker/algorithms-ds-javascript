function maxSubarraySum(arr, len) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < len) {
    return null;
  }
  let sum = 0;

  for (let r = 0; r < len; r++) {
    sum += arr[r];
  }
  let tempSum = sum;
  for (let r = len; r < arr.length; r++) {
    tempSum += arr[r] - arr[r - len];
    sum = Math.max(sum, tempSum);
  }
  return sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
