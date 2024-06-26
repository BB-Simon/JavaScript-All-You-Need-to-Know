// **************** Linked List ********************
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

// {value: 1, next_node: null}

class Linkedlist {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(n) {
    const node = new Node(n);
    if (!this.head) {
      this.head = node;
      return
    }

    let last = this.head;
    while (last.next_node) {
      last = last.next_node
    }
    last.next_node = node;
  }

  insertAfter(prev, n) {
    // {value: 1, next_node: null}
    // {value: 1, next_node: {value: 2, next_node: null}}
    // {value: 1, next_node: {value: 2, next_node: {value: 4, next_node: null}}}

    // { value: 3, next_node: null }

    const newNode = new Node(n);

    let currentNode = this.head;
    while(currentNode.value !== prev){
      currentNode = currentNode.next_node;
    }

    newNode.next_node = currentNode.next_node;
    currentNode.next_node = newNode;
  }

  unshift(n) {
    const node = new Node(n);
    node.next_node = this.head
    this.head = node;
  }

  removeByIndex(index) {
    if (this.head === null) {
      return;
    }

    let i = 0;
    let current = this.head;
    let prev = null;

    while (current.next_node && i < index) {
      prev = current;
      current = current.next_node;
      i++;
    }

    if (i < index) {
      return 'Index is out of range';
    } else if (i === 0) {
      this.head = this.head.next_node;
    } else {
      prev.next_node = current.next_node;
    }
  }

  length(h) {

    // **********Loop solution**********
    // let count = 0;
    // let temp = this.head;
    // while(temp !== null){
    //     count++;
    //     temp = temp.next_node;
    // }
    // return count;

    // *********** Recursive solution ************
    if (h === null) {
      return 0;
    }

    return 1 + this.length(h.next_node);
  }

  include(n, h) {

    // ********** Loop solution ***************
    // let res = false;
    // let current = this.head;
    // while(current){
    //     if(current.value === n) {
    //         res = true;
    //     }
    //     current = current.next_node;
    // }
    // return res;

    // ********** Recursive solution *********
    if (h === null) {
      return false;
    }

    if (h.value === n) {
      return true;
    }

    return this.include(n, h.next_node)
  }

  reverse(h) {

    //*************** Loop solution **************
    // let prev = null;
    // let next = null;
    // let current = this.head;

    // while(current !== null){
    //   next = current.next_node;
    //   current.next_node = prev;
    //   prev = current;
    //   current = next;
    // }
    // this.head = prev;

    // ********** Recursive solution ****************
    // if(h === null || h.next_node === null) {
    //   return h;
    // }

    // let rest = this.reverse(h.next_node);
    // h.next_node.next_node = h;
    // h.next_node = null;
    // this.head = rest;

    // ********** Reverse using stack solution ****************
    let stack = [];
    let temp = this.head;

    while(temp.next_node !== null){
      stack.push(temp);
      temp = temp.next_node;
    }

    this.head = temp;
    
    while(stack.length != 0){
      temp.next_node = stack.pop();
      temp = temp.next_node;
    }
    temp.next_node = null;
  }

  getNth(head, index) {
    // ************ Loop solution ***********
    // let count = 0;
    // let current = head;
    // while (current) {
    //   if (count == index) {
    //     return current.value;
    //   }
    //   count++;
    //   current = current.next_node;
    // }    
    // return -1;

    // ********* Recuserive solution
    let count = 0;
    if(head){
      if (count === index) {
        return head.value;
      }

      return this.getNth(head.next_node, index - 1);
    }

    return  -1;
  }

  printNthFromLast(n){
    let len = 0;
    let temp = this.head;

    while(temp){
      temp = temp.next_node;
      len++;
    }
    
    if(n > len ){
      return -1;
    }
    
    temp = this.head;

    for(let i = 0; i < (len - n); i++){
      temp = temp.next_node;
    }
    if(temp){
      return temp.value
    }
    return -1;
  }

  countOfOccurrences(n){
    let count = 0;

    let temp = this.head;
    while(temp){
      if(temp.value === n){
        count++;
      }
      temp = temp.next_node;
    }
    return count;
  }

  printMiddle(){
    if(this.head !== null){
      let len = 0;
      let temp = this.head;
      while (temp) {
        temp = temp.next_node;
        len++;
      }

      let midIdx = parseInt(len / 2);
      temp = this.head
      while (midIdx !== 0) {
        temp = temp.next_node;
        midIdx--;
      }

      return temp.value;
    }
    
    return -1;
  }

}

const list = new Linkedlist();
list.push(1);
list.push(3);
list.push(4);
list.insertAfter(1, 2);
list.unshift(0);

console.log(list)

// list.unshift(7);
// console.log(list.head);
// list.reverse(list.head);

// list.push(4);
// list.insertAfter(3, 19)
// list.push(5);
// console.log(list.include(3, list.head));
// console.log(list.head);
// list.removeByIndex(0)
// console.log(list.head);
// console.log(list.length(list.head));