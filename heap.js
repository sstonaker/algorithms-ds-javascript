class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.values.length - 1;
    const val = this.values[i];
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      let parent = this.values[parentIndex];
      if (val > parent) {
        this.values[i] = parent;
        this.values[parentIndex] = val;
        i = parentIndex;
      } else break;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let i = 0;
    const length = this.values.length;
    const val = this.values[0];
    while (true) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let left, right;
      let swap = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left > val) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if ((swap === null && right > val) || (swap !== null && right > left)) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[i] = this.values[swap];
      this.values[swap] = val;
      i = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
