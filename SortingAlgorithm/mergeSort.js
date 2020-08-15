function mergeSort(arr){
    if (arr.length>1){
        const mid=Math.floor(arr.length/2)
        const L=arr.slice(0,mid);
        const R=arr.slice(mid);
        return combine(mergeSort(L),mergeSort(R))
    }else{
        return arr;
    }
}
function combine(L,R){
let i=0,j=0;
var NewArray=[];
while(i<L.length && j< R.length){
    if(L[i]<R[j]){
      NewArray.push(L[i]);
      i++;
    }else{
        NewArray.push(R[j]);
        j++;
    }
}
while(i<L.length){
    NewArray.push(L[i])
    i++
}
while(j<R.length){
    NewArray.push(R[j])
    j++
}
return NewArray
}
arr=[5,4,2,8,6,2,9,1];
console.log(mergeSort(arr))