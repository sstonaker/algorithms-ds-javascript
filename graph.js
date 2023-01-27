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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
console.log(g);
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
console.log(g);
g.removeVertex("Aspen");
console.log(g);
