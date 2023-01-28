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
    const element = this.values[i];
    while (i > 0) {
      let parentIndex = Math.floor((i - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority < parent.priority) {
        this.values[i] = parent;
        this.values[parentIndex] = element;
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
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let left, right;
      let swap = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left.priority < element.priority) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap === null && right.priority < element.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[i] = this.values[swap];
      this.values[swap] = element;
      i = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }

  addEdge(v, w, weight) {
    if (this.adjList[v] && this.adjList[w]) {
      this.adjList[v].push({ node: w, weight });
      this.adjList[w].push({ node: v, weight });
    }
  }

  dpsa(start, end) {
    // use optimized PQ binary heap
    // let nodes = new PriorityQueue();
    let nodes = new PQ();
    let distances = {};
    let previous = {};
    let smallest;
    let path = []; // to return at end

    // build initial state
    for (let v in this.adjList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    // while PQ is not empty
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        // done and build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjList[smallest]) {
          // find neighboring node
          let nextNode = this.adjList[smallest][neighbor];
          //calculate new dist to neighbor node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in pq with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.dpsa("A", "E"));

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }

//   enqueue(value, priority) {
//     this.values.push({ value, priority });
//     this.sort();
//   }

//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }
