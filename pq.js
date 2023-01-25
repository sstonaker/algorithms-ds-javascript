class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PQ {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.values.length - 1;
    const val = this.values[i];
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      let parent = this.values[parentIndex];
      if (val.priority < parent.priority) {
        this.values[i] = parent;
        this.values[parentIndex] = val;
        i = parentIndex;
      } else break;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
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
        if (left.priority < val.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap === null && right.priority < val.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
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

let ER = new PQ();
ER.enqueue("cold", 5);
ER.enqueue("wound", 1);
ER.enqueue("fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
