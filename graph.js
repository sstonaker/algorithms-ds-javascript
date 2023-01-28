class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }

  addEdge(v, w) {
    if (this.adjList[v] && this.adjList[w]) {
      this.adjList[v].push(w);
      this.adjList[w].push(v);
    }
  }

  removeEdge(v, w) {
    if (this.adjList[v] && this.adjList[w]) {
      this.adjList[v] = this.adjList[v].filter((vtx) => vtx !== w);
      this.adjList[w] = this.adjList[w].filter((vtx) => vtx !== v);
    }
  }

  removeVertex(v) {
    for (let i = 0; i < this.adjList[v].length; i++) {
      let w = this.adjList[v].pop();
      this.removeEdge(w, v);
    }
    delete this.adjList[v];
  }

  dfsRecursive(start) {
    let visited = {};
    let results = [];
    let adjList = this.adjList;

    function dfs(v) {
      if (!v) return;
      visited[v] = true;
      results.push(v);
      adjList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    return results;
  }

  dfsIterative(start) {
    let s = [start];
    let visited = {};
    let results = [];
    let v;

    visited[start] = true;

    while (s.length) {
      v = s.pop();
      results.push(v);
      this.adjList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          s.push(neighbor);
        }
      });
    }
    return results;
  }

  bfsIterative(start) {
    let q = [start];
    let visited = {};
    let results = [];
    let v;

    visited[start] = true;

    while (q.length) {
      v = q.shift();
      results.push(v);
      this.adjList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          q.push(neighbor);
        }
      });
    }
    return results;
  }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// console.log(g);
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// console.log(g);
// g.removeVertex("Aspen");
// console.log(g);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.bfsIterative("A"));
