function HCF(n1,n2){
    for(let i=n1<n2?n1:n2;i>0;i--){
        if(n1%i==0 && n2%i==0){
            return i;
        }
    }
}
console.log(HCF(105,147))