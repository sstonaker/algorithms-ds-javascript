function merge(arr1, arr2) {
  sortedArr = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length || p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      sortedArr.push(arr1[p1]);
      p1++;
    } else {
      sortedArr.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 == arr1.length) {
    while (p2 < arr2.length) {
      sortedArr.push(arr2[p2]);
    }
  } else if (p2 == arr2.length) {
    while (p1 < arr1.length) {
      sortedArr.push(arr1[p1]);
    }
  }
  return sortedArr;
}

console.log(merge([1, 3, 5], [2, 4, 6]));
