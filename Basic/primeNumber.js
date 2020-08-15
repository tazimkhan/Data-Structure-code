function primeNumber(n){
    var x=2;
    var m=0;
    while(m!=n){
        for(var i=2;i<=x-1;i++){
            if(x%i==0){
                break;
            }
        }
        if(i===x){
            console.log(x);
            m=m+1;
        }
        x=x+1;
    }
}
primeNumber(5)
