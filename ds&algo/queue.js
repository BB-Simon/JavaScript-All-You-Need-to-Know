// head { value: 1, next_node: null}
// head { value: 1, next_node: {value: 2, next_node: null}}

class Node {
  constructor(value){
    this.value = value;
    this.next_node = null;
  }
}

class Queue {
  constructor(){
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    if(this.queue.length === 0) {
      return -1;
    }

    this.queue.pop();
  }

  length() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue);
console.log(queue.length());