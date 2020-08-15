function permutation(string){
    var result=[];
    if(string.length===1){
        result.push(string);
        return result;
    }
    for(let i=0;i<string.length;i++){
            var firstString=string[i];
            var leftString=string.substring(0,i)+string.substring(i+1);
            innerPermutation=permutation(leftString);
            for(let j=0;j<innerPermutation.length;j++){
                result.push(firstString+innerPermutation[j]);
            }
    }
    return result;
}
var p=permutation('ABC');
console.log(p)