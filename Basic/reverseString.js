function reverse(s){
    var s1='';
    for(let i=s.length-1;i>=0;i--){
        s1=s1+s[i];
    }
    return s1;
}
console.log(reverse('this is a dog'))