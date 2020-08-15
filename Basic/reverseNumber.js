function reverse(n){
    var rev=0;
    while(n!=0){
        var remainder=n%10;
        rev=rev*10+remainder;
        n=parseInt(n/10);
    }
    return rev;
}
console.log(reverse(1234));