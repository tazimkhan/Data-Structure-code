class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class CircularLinkList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    //insertBeg
    insertBeg(data){
        var node=new Node(data);
        if(!this.head){
            this.head=node;
            node.next=this.head;
        }else{
            var current=this.head;
            while(current.next!==this.head){
                current=current.next;
            }
            current.next=node;
            node.next=this.head;
            this.head=node
        }
        this.size++;
    }

    //insertLast
    insertLast(data){
        var node=new Node(data);
        if(!this.head){
            this.head=node;
            node.next=node;
        }else{
            var first=this.head;
            var current=this.head;
            current=current.next;
            while(current.next!=first){
                current=current.next;
            }
            node.next=current.next
            current.next=node;
        }
        this.size++;
    }

    //insertAtIndex
    insertAtIndex(data,index){
        var previous,current=this.head,count=0;
        if(index<0 || index>this.size){
            return
        }else if(index===0){
            this.insertBeg(data);
        }else{
            while(count<index){
                previous=current;
                count++;
                current=current.next;
            }
            var node=new Node(data);
            previous.next=node;
            node.next=current;
            this.size++;
        }
    }

    //removeBeg
    removeBeg(){
        var current=this.head;
        this.head=current.next;
        this.size--
    }

    //removeLast
    removeLast(){
        var previous,current=this.head;
        while(current.next !== this.head){
            previous=current;
            current=current.next;
        }
        previous.next=current.next;
        this.size--;
    }

    //removeAtIndex
    removeAtIndex(index){
        var previous,current=this.head,count=0;
        if(index<0 || index>this.size){
            return
        }else if(index===0){
            this.removeBeg;
        }else{
            while(count<index){
                previous=current;
                count++;
                current=current.next;
            }
            previous.next=current.next;
            this.size--;
        }
    }

    //getAllData
    getAllData(){
        var current=this.head;
        if(current.next===this.head){
            console.log(current.data)
            return
        }else{
        while(current.next!==this.head){
            console.log(current.data);
            current=current.next;
        }
        console.log(current.data)
        }
    }
}
var cll=new CircularLinkList();
cll.insertBeg(100)
cll.insertBeg(200)
cll.insertBeg(300)
// cll.insertLast(99)
// cll.insertLast(999)
// cll.insertLast(9999)

// cll.getAllData();
// cll.insertAtIndex(5555,3)
// cll.removeBeg()
// cll.removeLast();
cll.removeAtIndex(1)
console.log(cll)
cll.getAllData();