/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            searchTree(node);
        }
    }


    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    // rescursive

    preOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traversePreOrder(node) {
              if(node.data !== null){
                  result.push(node.data);
              }
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
          };
          traversePreOrder(this.root);
          return result;
        };
      }

      // Iterative solutions

      preorderTraversal = function() {
        let node = this.root;
        let stack = [];
        let output = [];
        while (stack.length || node !== null) {
            if (node !== null) {

                if(node.data !== null)
                output.push(node.data);
               
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop().right;
            }
            
        }
        return output;
    };
       
}



const bst = new BST();


bst.add(1);
bst.add(null);
bst.add(2);
bst.add(3);
var result = bst.preorderTraversal();

console.log(result);

// var preOrder =  bst.preOrder();
// console.log('pre Order ' , preOrder);


// console.log(bst.find(5));

