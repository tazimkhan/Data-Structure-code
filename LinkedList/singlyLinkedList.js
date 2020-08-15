class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertAtBeg(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    insert(data){
        var node=new Node(data);
        var current=this.head;
        if(this.head==null){
            this.head=node;
        }else{
        while(current.next!=null){
            current=current.next;
        }
        current.next=node;
        }
        this.size++;
    }
    insertAtLast(data){
        var node=new Node(data);
        if(this.head==null){
            this.head=node;
        }else{
            var current=this.head
            while(current.next){
                current=current.next;
            }
            current.next=node;
            }
            this.size++;
        }
    insertAtIndex(data,index){
        var node=new Node(data);
        if(index<0 || index>this.size) { return }
        if(index==0){ 
            var current=this.head;
            this.head=node;
            node.next=current;
            this.size++;
            return
        }
        var previous,count=0,current=this.head;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        node.next=current;
        previous.next=node;
        this.size++;
    }
    deleteAtBeg(){
        var current=this.head;
        this.head=current.next;
        this.size--;
    }
    deleteAtLast(){
        var current=this.head;
        var previous;
        while(current.next){
            previous=current;
            current=current.next;
        }
        previous.next=null;
        this.size--;
    }
    deleteAtIndex(index){
        if(index<0 || index>this.size) { return }
        if(index==0){
            this.deleteAtBeg();
            return;
        }
        if(index==this.size-1){
            this.deleteAtLast();
            return;
        }
        var previous,current=this.head,count=0;
        while(count<index){
            previous=current;
            count++;
            current=current.next;
        }
        previous.next=current.next;
        this.size--;
    }
    search(data){
        var current=this.head;
        var count=0;
        while(count<this.size){
            if(current.data==data){
                break
            }
            current=current.next;
            count++;
        }
        if(count<this.size){
            return count;
        }else{
            return ("data is not exist in the linked list")
        }
    }
}

var node1=new Node(14);
console.log(node1);
var linkedList1=new SinglyLinkedList();
linkedList1.insert(600);
linkedList1.insertAtLast(500);
linkedList1.insertAtIndex(250,0);
// linkedList1.insertAtIndex(300,0)
console.log(linkedList1);
linkedList1.deleteAtBeg();
console.log(linkedList1);
linkedList1.deleteAtLast();
console.log(linkedList1);
linkedList1.insert(800);
linkedList1.insertAtLast(900);
console.log(linkedList1);
linkedList1.deleteAtIndex(2);
console.log(linkedList1);
console.log(linkedList1.search(600));