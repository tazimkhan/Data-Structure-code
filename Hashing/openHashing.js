class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class HashTable{
    constructor(sizeOfTable){
        this.hashTable=new Array(sizeOfTable);
        this.size=sizeOfTable;
    }
    hashFunction(key){
        return key%this.size;
    }
    insert(data){
        var index=this.hashFunction(data);
        if(!this.hashTable[index]){
            this.hashTable[index]=new Node(data);
        }else{
            var current=this.hashTable[index];
            //console.log(current.next );
            while(current.next!==null){
                current=current.next;
            }
            current.next=new Node(data);
            current=current.next;
            //console.log(current.data)
        }
    }
}
const ht=new HashTable(10);
ht.insert(3);
ht.insert(13);
ht.insert(23)
console.log(ht);