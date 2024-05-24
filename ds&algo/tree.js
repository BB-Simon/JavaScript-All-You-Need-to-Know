class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data){
    const node  = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    }

    const searchTree = function(node){
      if(data < node.data) {
        if(node.left){
          return searchTree(node.left);
        } else {
          node.left = new Node(data);
          return;
        }
      } else if(data > node.data) {
        if(node.right){
          return searchTree(node.right);
        } else {
          node.right = new Node(data);
          return;
        }
      } else {
        return null;
      }
    }

    return searchTree(node)
  }

  findMin(){
    let current = this.root;
    while(current.left){
      current = current.left
    }
    return current.data;
  }

  findMax(){
    let current = this.root;
    while(current.right){
      current = current.right;
    }
    return current.data;
  }

  find(data){
    let current = this.root;
    while(current){
      if(data === current.data){
        return current.data;
      } else if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return -1;
  }
  isPresent(data){
    let current = this.root;
    while(current){
      if(data === current.data){
        return true;
      } else if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBlanced(){
    return (this.minHeight() >= this.maxHeight() - 1);
  }

  minHeight(node = this.root) {
    if(!node) {
      return -1;
    }

    let left = this.minHeight(node.left)
    let right = this.minHeight(node.right);

    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  maxHeight(node = this.root) {
    if(node === null){
      return -1;
    }

    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);

    if(left > right){
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

const bst = new BST();
bst.add(10);
bst.add(12);
bst.add(11);
bst.add(5);
bst.add(3);
bst.add(9);
bst.add(6);
bst.add(8);
bst.remove(5);
/*  

        10
      /   \  
    5       12
  /   \     /
 3      9  11
      /   
    6
      \
        8

Node {
  data: 10;
  right: { 
    data: 12,
    right: null,
    left: {
      data: 11,
      right: null,
      left: nu;;
    }
  }
  left: {
    data: 5,
    right: {
      data: 9,
      right: null,
      left: null
    },
    left: {
      data: 3,
      right: null,
      left: null
    }
  }
}
*/

console.log(bst)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.isPresent(111))