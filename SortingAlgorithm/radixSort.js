function radixSort(array){
    var max=Math.max(...array);
    for(let pos=1;parseInt(max/pos)>0;pos=pos*10){
        var array=countingSort(array,pos);
    }
    return array;
}
function countingSort(arr,pos){
    var count=[],b=[] 
    for(let i=0;i<=9;i++){
        count[i]=0
    }
    for(let i=0;i<arr.length;i++){
        b[i]=0;
        ++count[(parseInt(arr[i]/pos))%10]
    }
    for(let i=1;i<=9;i++){
        count[i]=count[i]+count[i-1]
    }
    for(let i=arr.length-1;i>=0;i--){
            b[--count[(parseInt(arr[i]/pos))%10]]=arr[i]
        }
    return b
}
console.log(radixSort([1,1,0,0,6,5,4,8,4,3,3,3,3,3,6,4,5,4,2,8,6,6,7,7,1,1]))