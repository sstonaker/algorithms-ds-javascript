class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode.val;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode.val;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(n) {
    if (!this.head) return false;
    if (n < 0 || n >= this.length) return null;
    if (n === 0) return this.head;
    if (n === this.length - 1) return this.tail;
    let mid = Math.floor((this.length - 1) / 2);
    if (n <= mid) {
      let cur = this.head;
      for (let i = 0; i <= mid; i++) {
        if (i === n) {
          return cur;
        } else {
          cur = cur.next;
        }
      }
    } else {
      let cur = this.tail;
      for (let i = this.length - 1; i > mid; i--) {
        if (i === n) {
          return cur;
        } else {
          cur = cur.prev;
        }
      }
    }
  }

  set(n, val) {
    let foundNode = this.get(n);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(n, val) {
    if (n < 0 || n > this.length) return false;
    if (n === 0) return !!this.unshift(val);
    if (n === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(n - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(n) {
    if (n < 0 || n >= this.length) return false;
    if (n === 0) return !!this.shift();
    if (n === this.length - 1) return !!this.pop();

    let removedNode = this.get(n);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    let curNode = this.head;
    this.head = this.tail;
    this.tail = this.curNode;

    for (let i = 0; i < this.length; i++) {
      let oldPrev = curNode.prev;
      let oldNext = curNode.next;
      curNode.next = oldPrev;
      curNode.prev = oldNext;
      curNode = oldNext;
    }
    return this;
  }
}
