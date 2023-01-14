function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = Math.max(count, digitCount(nums[i]));
  }
  return count;
}

function radixSort(arr) {
  let numDigits = mostDigits(arr);
  for (let i = 0; i < numDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let bucket = getDigit(arr[j], i);
      buckets[bucket].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
