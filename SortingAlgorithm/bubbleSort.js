function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j+1]<arr[j]){
               var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp
            }
        }
    }
    return arr;
}
console.log(bubbleSort([56,42,17,211,91]))