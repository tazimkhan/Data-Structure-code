function oddNumber(n){
    var m=0;
    var s=1;
    while(m!=n){
        if(s%2!=0){
            console.log(s);
            m=m+1;
        }
        s=s+1;
    }
}
oddNumber(5);