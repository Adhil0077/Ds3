class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  //Normal search

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  //DFS

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(this.left);
      this.postOrder(this.right);
      console.log(root.value);
    }
  }

  //BFS

  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  //delete

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  isBst(root) {
    if (root === null) {
      return true;
    }
    if (root.left && root.left.value > root.value) {
      return false;
    }
    if (root.right && root.right.value < root.value) {
      return false;
    }
    if (!this.isBst(root.left) || !this.isBst(root.right)) {
      return false;
    }
    return true;
  }

  closestNum(target) {
    let currentNode = this.root;
    let closest = currentNode.value;
    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }
}
const Bst = new bst()
Bst.insert(50)
Bst.insert(40)
Bst.insert(30)
Bst.insert(15)
Bst.insert(68)
Bst.insert(44)
Bst.insert(99)

console.log("Empty or not : "+Bst.emptyCheck());
Bst.delete(30)
Bst.inorder(Bst.root)
// Bst.preOrder(Bst.root)
console.log("Bst or not : "+Bst.IsBst(Bst.root));
console.log("smallest : "+Bst.min(Bst.root));
console.log("biggest : "+Bst.max(Bst.root));
console.log("closest num"+Bst.closestNum(14));