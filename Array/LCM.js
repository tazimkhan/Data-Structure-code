function LCM(n1,n2){
    for(let i=(n1<n2?n2:n1);i<=n1*n2;i++){
        if(i%n1==0 && i%n2==0){
            var res=i;
            return res;
        }
    }
}
console.log(LCM(345,22));