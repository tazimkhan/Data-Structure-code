class HashMap{
    constructor(){
        this.hashMap=new Map();
    }
    insert(key,value){
        this.hashMap.set(key,value);
    }
    delete(key){
        this.hashMap.delete(key);
    }
}
var h=new HashMap();
h.insert('A',[2,3,4,5]);
console.log(h)
