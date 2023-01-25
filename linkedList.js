class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    else {
      let cur = this.head;
      while (cur) {
        if (cur.next == this.tail) {
          let temp = cur.next;
          cur.next = null;
          this.tail = cur;
          this.length--;
          if (this.length === 0) {
            this.head = null;
            this.tail = null;
          }
          return temp.val;
        } else {
          cur = cur.next;
        }
      }
    }
  }

  shift() {
    if (!this.head) return undefined;
    else {
      let currentHead = this.head;
      this.head = currentHead.next;
      currentHead.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }

      return currentHead.val;
    }
  }

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      let newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(n) {
    if (n < 0 || n >= this.length) return undefined;
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == n) {
        return cur.val;
      } else {
        cur = cur.next;
      }
    }
  }

  set(n, val) {
    let currentNode = this.get(n);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(n, val) {
    if (n < 0 || n > this.length) return false;
    if (n === 0) {
      this.unshift(val);
      return true;
    } else if (n === this.length) {
      this.push(val);
      return true;
    } else {
      let currentNode = this.get(n - 1);
      let newNode = new Node(val);
      let nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
      return true;
    }
  }

  remove(n) {
    if (n < 0 || n >= this.length) return false;
    if (n === 0) {
      return this.shift();
    } else if (n === this.length - 1) {
      return this.pop();
    } else {
      let currentNode = this.get(n - 1);
      let nextNode = currentNode.next;
      currentNode.next = nextNode.next;
      this.length--;
      return nextNode.val;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      node = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }

  // traverse() {
  //   let cur = this.head;
  //   while (cur) {
  //     cur = cur.next;
  //   }
  // }
}

let list = new LinkedList();
list.push("My");
list.push("Name");
list.push("Is");
list.push("Steven");

console.log(list);
console.log(list.pop());
