class HashTable{
    constructor(sizeOfTable){
        this.hashTable=new Array(sizeOfTable);
        this.size=sizeOfTable;
    }

    hashFunction(key){
       return key%this.size;
    }

    insert(key){
        var index=this.hashFunction(key);
        this.hashTable[index]=key;
    }
    delete(key){
        var index=this.hashFunction(key);
        this.hashTable.splice(index,1);
    }

}
const ht=new HashTable(10);
ht.insert(3);
ht.insert(10)
ht.insert(9)
console.log(ht)
ht.delete(3);
console.log(ht)