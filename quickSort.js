function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let count = start;

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
  return count;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
