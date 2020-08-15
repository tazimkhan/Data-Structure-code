function checkPrimeNumber(n){
    for(var i=2;i<=n-1;i++){
        if(n%i===0){
            break
        }
    }
    if(i===n){
        console.log("Number is prime")
    }else{
        console.log("Number is not prime")
    }
}
checkPrimeNumber(2);