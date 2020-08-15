function evenNumber(n){
    var m=0;
    var s=0;
    while(m!=n){
        if(s%2==0){
            console.log(s);
            m=m+1;
        }
        s=s+1;
    }
}
evenNumber(5);