class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(data) {

        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else

            this.insertNode(this.root, newNode);
    }


    insertNode(node, newNode) {

        if (newNode.data < node.data) {

            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {

            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    search(root, val) {

        if (root === null)
            return null;

        else if (val < root.data)
            return search(root.left, val);

        else if (val > root.data)
            return search(root.right, val);

        else
            return root;
    }


}

var bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
var element = bst.search(this.root, 10);
console.log(element);