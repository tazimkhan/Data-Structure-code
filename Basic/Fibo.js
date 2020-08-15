function fibo(n)
{
    var a=-1;
    var b=1;
    for(let i=0;i<n;i++){
        var c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
fibo(6);