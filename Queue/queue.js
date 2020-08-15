class Queue{
    constructor(){
        this.store=[];
        this.front=-1;
        this.rear=-1;
    }
    enqueue(element){
        this.store.push(element);
        this.rear++;
        if(this.store.length>=1){
            this.front=0;
        }
    }
    dequeue(){
        if(this.store.length>0){
            this.store.shift();
            this.rear--;
        }else{
            this.front=-1;
            return console.log("Queue is empty");
        }
    }
    peek(){
        if(this.store.shift.length>0){
            return console.log(this.store[this.store.length-1])
        }else{
            return console.log("Queue is empty");
        }
    }
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    }
}
const q1=new Queue();
q1.enqueue(100)
q1.enqueue(200)
q1.enqueue(300)
q1.enqueue(400)
q1.enqueue(500)
// console.log(q1);
q1.dequeue();
q1.dequeue();
console.log(q1);