class Node{
    constructor(data,pre=null,next=null){
        this.data=data;
        this.pre=pre;
        this.next=next;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insert(data){
        var node=new Node(data);
        if(this.head===null){
            this.head=node;
            this.size++;
            return
        }else{
            var current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
            node.pre=current.data;
            this.size++
        }
    }
    insertAtBeg(data){
        var node=new Node(data);
        var current=this.head;
        current.pre=node.data;
        node.next=current;
        this.head=node;
        this.size++;
    }
    insertAtLast(data){
        var node=new Node(data);
        var current=this.head;
        if(this.size==0){
            this.head=node;
            return
        }
        while(current.next){
            current=current.next;
        }
        current.next=node;
        node.pre=current.data;
        this.size++;
    }
    insertAtIndex(data,index){
        if(index<0 || index>this.size) { return }
        if(index==0){
            this.insertAtBeg(data);
            return;
        }
        if(index==this.size){
            this.insertAtLast(data);
            return
        }
        var node=new Node(data);
        var current=this.head;
        var count=0,previous;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }

        previous.next=node;
        node.pre=previous.data;
        node.next=current;
        this.size++
    }
    deleteAtBeg(){
        var current=this.head;
        this.head=current.next;
        this.head.pre=null;
        this.size--;
    }
    deleteAtLast(){
       var current= this.head;
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
            this.deleteAtBeg(data);
            return;
        }
        if(index==this.size){
            this.insertAtLast(data);
            return
        }
        var current=this.head;
        var count=0,previous;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        current.next.pre=previous.data;
        previous.next=current.next;
        this.size--;
    }
}
var DBL=new DoublyLinkedList();
DBL.insert(10);
DBL.insert(20);
DBL.insert(30);
DBL.insert(40);
// DBL.insertAtIndex(50,2);
// DBL.deleteAtBeg();
DBL.deleteAtLast();
DBL.deleteAtIndex(1)
// DBL.insert(20);
// DBL.insert(30);
// DBL.insertAtBeg(40);
console.log(DBL);