// BY ecliduan method
function GCD(n1,n2){
    var res,a1,a2;
    var a1= n1<n2?n1:n2;
    var a2= n1<n2?n2:n1;
        if(a2%a1===0){
            res=a1;
            return a1;
        }else{
            var a=a2%a1;
            res=GCD(a1,a)
        }
    return res;
}
console.log(GCD(105,91));

