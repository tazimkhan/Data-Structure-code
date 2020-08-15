function countingSort(array){
    var count=[],sortedArray=[] 
    for(let i=0;i<=9;i++){
        count[i]=0
    }
    for(let i=0;i<array.length;i++){
        sortedArray[i]=0;
        ++count[array[i]]
    }
    for(let i=1;i<=9;i++){
        count[i]=count[i]+count[i-1]
    }
    for(let i=array.length-1;i>=0;i--){
        sortedArray[--count[array[i]]]=array[i]
        }
    return sortedArray
}
console.log(countingSort([1,1,0,0,6,5,4,8,4,3,3,3,3,3,6,4,5,4,2,8,6,6,7,7,1,1]));