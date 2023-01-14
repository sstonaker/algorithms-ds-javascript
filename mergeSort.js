function merge(arr1, arr2) {
  sortedArr = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      sortedArr.push(arr1[p1]);
      p1++;
    } else {
      sortedArr.push(arr2[p2]);
      p2++;
    }
  }
  while (p2 < arr2.length) {
    sortedArr.push(arr2[p2]);
    p2++;
  }
  while (p1 < arr1.length) {
    sortedArr.push(arr1[p1]);
    p1++;
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
}

console.log(mergeSort([1, 3, 5, 2, 4, 9, 8, 7, 6, 10, 15, 18, 20, 25]));
