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

  /* 
    Inser Operation algorithm
    If node == Null
      node = CreateNode(data)
    If data < node->data
      node->left = InserNode(node->left, data)
    If data > node->data
      node->right = InserNode(node->right, data)
    Return node
  */
  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    }

    const search = function(node){
      if(data < node.data){
        if(node.left){
          return search(node.left)
        } else {
          node.left = new Node(data);
          return;
        }
      } else if(data > node.data){
        if(node.right){
          return search(node.right);
        } else {
          node.right = new Node(data);
          return;
        }
      } else {
        return null;
      }
    }

    return search(node)
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

  /*
    Search Algorithm
    If root == Null
      return Null
    If Number == root-> data
      return root->data
    If Number < root-> data
      return search(root->left)
    If Number > root->data
      return search(root->right)
  */
  search(data, node = this.root){
    // const node = this.root;
    if(!node){
      return -1;
    } else if(data === node.data){
      return node.data;
    } else if(data < node.data) {
      return this.search(data, node.left)
    } else if(data > node.data) {
      return this.search(data, node.right)
    }
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

// const bst = new BST();
// bst.add(10);
// bst.add(12);
// bst.add(11);
// bst.add(5);
// bst.add(3);
// bst.add(9);
// bst.add(6);
// bst.add(8);
// bst.remove(5);
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

// console.log(bst)
// console.log(bst.find(6))
// console.log(bst.search(6))
// console.log(bst.findMax())
// console.log(bst.isPresent(111))


class BinaryTree {
  constructor() {
    this.root = null;
  }

  // A utility function to insert a new node with the given data
  insert(node, data) {
    // If the tree is empty, return a new node
    if (node === null)
      return new Node(data);

    // Otherwise, recur down the tree
    if (data < node.data)
      node.left = this.insert(node.left, data);
    else if (data > node.data)
      node.right = this.insert(node.right, data);

    // return the (unchanged) node pointer
    return node;
  }

  // A utility function to do inorder traversal of BST
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data + " ");
      this.inorder(node.right);
    }
  }

  // Given a binary search tree and a data, this function deletes the data and returns the new root
  deleteNode(root, data) {
    // Base case
    if (root === null)
      return root;

    // If the data to be deleted is smaller than the root's data, then it lies in the left subtree
    if (data < root.data)
      root.left = this.deleteNode(root.left, data);
    // If the data to be deleted is greater than the root's data, then it lies in the right subtree
    else if (data > root.data)
      root.right = this.deleteNode(root.right, data);
    // If data is same as root's data, then this is the node to be deleted
    else {
      // Node with only one child or no child
      if (root.left === null)
        return root.right;
      else if (root.right === null)
        return root.left;

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      root.data = this.minValue(root.right);

      // Delete the inorder successor
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }

  minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
      minv = node.left.data;
      node = node.left;
    }
    return minv;
  }
}

// Driver Code
let tree = new BinaryTree();

/* Let us create following BST
          50
       /     \
      30      70
     /  \    /  \
   20   40  60   80 */
tree.root = tree.insert(tree.root, 50);
tree.insert(tree.root, 30);
tree.insert(tree.root, 20);
tree.insert(tree.root, 40);
tree.insert(tree.root, 70);
tree.insert(tree.root, 60);
tree.insert(tree.root, 80);

console.log("Original BST:");
tree.inorder(tree.root);

console.log("\n\nDelete a Leaf Node: 20");
tree.root = tree.deleteNode(tree.root, 20);
console.log("Modified BST tree after deleting Leaf Node:");
tree.inorder(tree.root);

console.log("\n\nDelete Node with single child: 70");
tree.root = tree.deleteNode(tree.root, 70);
console.log("Modified BST tree after deleting single child Node:");
tree.inorder(tree.root);

console.log("\n\nDelete Node with both child: 50");
tree.root = tree.deleteNode(tree.root, 50);
console.log("Modified BST tree after deleting both child Node:");
tree.inorder(tree.root);