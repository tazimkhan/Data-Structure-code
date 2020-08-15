class MaxHeap{
    constructor(){
        this.heap=[];
        this.size=0
    }
    parent (i){
        return Math.floor((i-1)/2);
    }
    insertionMax(data){
        this.heap.push(data);
        this.size++;
        var i=this.heap.length-1;
        this.heapFilterUp(i); 
    }
    heapFilterUp(i){
        while(i!=0 && (this.heap[i]>this.heap[this.parent(i)])){
            var temp=this.heap[i];
            this.heap[i]=this.heap[this.parent(i)];
            this.heap[this.parent(i)]=temp;
            i=this.parent(i);
            }
    }

    heapFilterDown(i){
        while(this.heap[2*i]!==undefined || this.heap[2*i+1]!==undefined){
            if(this.heap[2*i] && this.heap[2*i+1]){
                if(this.heap[i]> this.heap[2*i] && this.heap[i]>this.heap[2*i+1]){
                    break 
                }else{
                    if(this.heap[2*i]>this.heap[2*i+1]){
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
                if(this.heap[i]>this.heap[2*i] || this.heap[i]>this.heap[2*i+1]){
                    break;
                }else if(this.heap[i]<this.heap[2*i]){
                    var small=this.heap[i];
                    this.heap[i]=this.heap[2*i];
                    this.heap[2*i]=small;
                    i=2*i;
                    this.heapFilterDown(i);
                }else if(this.heap[i]<this.heap[2*i+1]){
                    var small=this.heap[i];
                    this.heap[i]=this.heap[2*i+1];
                    this.heap[2*i+1]=small;
                    i=2*i+1;
                    this.heapFilterDown(i);
                }
            }
        }
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
            this.heapFilterUp(i);    
        }else{
            this.heapFilterDown(i);
        }
    }

    heapSort(){
        var sortedArray=[]
        while(this.heap.size!==0){
            var max=this.heap[0];
            sortedArray.unshift(max)
            this.remove(max);
        }
        return sortedArray;
    }
}
const hp=new MaxHeap()
hp.insertionMax(15);
hp.insertionMax(20)
hp.insertionMax(7)
hp.insertionMax(9);
hp.insertionMax(30)
console.log(hp)
var sort=hp.heapSort()
console.log(sort)