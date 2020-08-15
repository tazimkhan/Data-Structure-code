class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        var node=new Node(data)
        if(this.root==null){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(newRoot,node){
        if(newRoot.data>node.data){
            if(!newRoot.left){
                newRoot.left=node;
            }else{
                this.insertNode(newRoot.left,node)
            }
        }else{
            if(!newRoot.right){
                newRoot.right=node;
            }else{
                this.insertNode(newRoot.right,node);
            }
        }
    }

    remove(data){
        this.removeNode(this.root,data);
    }
    removeNode(newRoot,data){
        if(newRoot===null){
            return null;
        }else if(newRoot.data>data){
            newRoot.left=this.removeNode(newRoot.left,data);
            return newRoot;
        }else if(newRoot.data<data){
            newRoot.right=this.removeNode(newRoot.right,data)
            return newRoot;
        }else{
            if(newRoot.right===null && newRoot.left===null){
                newRoot=null;
                return newRoot;
            }
            if(newRoot.left===null){
                newRoot=newRoot.right
                return newRoot;
            }else if(newRoot.right===null){
                newRoot=newRoot.left;
                return newRoot;
            }

            var aux=this.findMinNode(newRoot.right);
            newRoot.data=aux.data;

            newRoot.right=this.removeNode(newRoot.right,aux.data)
            return newRoot;
        }
    }
    findMinNode(node){
        if(node.left===null){
            return node;
        }else{
           return this.findMinNode(node.left);
        }
    }

    
    getRoot(){
        return this.root;
    }
    inOrder(node){
        if(node !==null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    preOrder(node){
        if(node!==null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node){
        if(node !== null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data);
        }
    }
}
var bst=new BinarySearchTree();
bst.insert(20);
bst.insert(30);
bst.insert(10)
// console.log(bst);
bst.remove(10)
var node=new Node(20);
bst.postOrder(node)
// console.log(bst)