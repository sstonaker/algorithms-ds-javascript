function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let count = 0;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      count++;
      let temp = arr[count];
      arr[count] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[count];
  arr[count] = temp;
  console.log(arr);
  console.log(count);
  return count;
}

console.log(pivot([5, 1, 2, 3, 7, 9, 10]));
