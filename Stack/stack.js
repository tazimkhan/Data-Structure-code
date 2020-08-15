class Stack {
    constructor(){
        this.store=[];
        this.top=0;
    }
    peek(){
        if(this.store.length===0){
            var s=console.log('Stack is empty');
            return s
        }else{
            var s=console.log(this.store[this.top-1]);
            return s;
        }
    }
    push(data){
        this.store.push(data);
        this.top++;
    }
    pop(){
        if(this.store.length===0){
            var s=console.log('Sorry Stack is already empty');
            return s
        }else{
        this.store.pop();
        this.top--;
    }}
    getAll(){
        for(let i=this.store.length-1;i>=0;i--){
            console.log(this.store[i]);
        }
    }
    
}
const s1=new Stack();
s1.push(100);
s1.push(200)
s1.push(300)
s1.push(400)
s1.pop();
console.log(s1)
// s1.peek();
s1.getAll();