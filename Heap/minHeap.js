
//    Min Heap

class MinHeap{
    constructor(){
        this.heap=[];
        this.size=0
    }
    
    insertionMin(data){
        this.heap.push(data);
        this.size++;
        var i=this.heap.length-1;
        this.heapFilterUp(i); 
    }
    remove(data){
        for(var i=0;i<this.heap.length;i++){
            if(this.heap[i]===data){
                break
            }
        }
        var maxi=this.heap.length-1;
        this.heap[i]=this.heap[maxi];
        this.heap.splice(maxi,1);
        this.size--;
        if(this.heap[i]>this.heap[this.parent(i)]){
            this.heapFilterDown(i);
        }else{
            this.heapFilterUp(i);
        }
    }
    heapFilterDown(i){
        while(this.heap[2*i]!==undefined || this.heap[2*i+1]!==undefined){
            if(this.heap[2*i] && this.heap[2*i+1]){
                if(this.heap[i]< this.heap[2*i] && this.heap[i]<this.heap[2*i+1]){
                    break 
                }else{
                    if(this.heap[2*i]<this.heap[2*i+1]){
                        var small=this.heap[i];
                        this.heap[i]=this.heap[2*i]
                        this.heap[2*i]=small;
                        i=2*i;
                        this.heapFilterDown(i);
                    }else{
                        var small=this.heap[i];
                        this.heap[i]=this.heap[2*i+1]
                        this.heap[2*i+1]=small;
                        i=2*i+1;
                        this.heapFilterDown(i);
                    }
                }
            }else{
                if(this.heap[i]<this.heap[2*i] || this.heap[i]<this.heap[2*i+1]){
                    break;
                }else if(this.heap[i]>this.heap[2*i]){
                    var small=this.heap[i];
                    this.heap[i]=this.heap[2*i];
                    this.heap[2*i]=small;
                    i=2*i;
                    this.heapFilterDown(i);
                }else if(this.heap[i]>this.heap[2*i+1]){
                    var small=this.heap[i];
                    this.heap[i]=this.heap[2*i+1];
                    this.heap[2*i+1]=small;
                    i=2*i+1;
                    this.heapFilterDown(i);
                }
            }
        }
    }
    heapFilterUp(i){
        while(i!=0 && (this.heap[i]<this.heap[this.parent(i)])){
            var temp=this.heap[i];
            this.heap[i]=this.heap[this.parent(i)];
            this.heap[this.parent(i)]=temp;
            i=this.parent(i);
            }
    }
    parent (i){
        return Math.floor((i-1)/2);
    }
    minElement(){
        var s=console.log(this.heap[0]);
        return s;
    }

}
const hp=new MinHeap();
hp.insertionMin(1)
hp.insertionMin(9);
hp.insertionMin(22)
hp.insertionMin(17)
hp.insertionMin(11)
hp.insertionMin(33)
hp.insertionMin(27);
hp.insertionMin(21)
hp.insertionMin(19)
hp.minElement();
console.log(hp)
hp.remove(33)
console.log(hp)