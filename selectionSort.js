// function selectionSort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//   }
//   return arr;
// }

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1, 3, 5, 6, 2]));
