function greatestNumber(n1,n2,n3){
    return n1>n2?n1>n3?n1:n3:n2>n3?n2:n3;
}
console.log(greatestNumber(12,32,11));